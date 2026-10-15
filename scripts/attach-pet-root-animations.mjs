import fs from "node:fs";

const [, , inputPath, outputPath] = process.argv;
if (!inputPath || !outputPath) {
  throw new Error("Usage: node attach-pet-root-animations.mjs input.glb output.glb");
}

const source = fs.readFileSync(inputPath);
const jsonLength = source.readUInt32LE(12);
const json = JSON.parse(source.subarray(20, 20 + jsonLength).toString("utf8").replace(/\0+$/, ""));
const binHeader = 20 + jsonLength;
const binLength = source.readUInt32LE(binHeader);
let binary = Buffer.from(source.subarray(binHeader + 8, binHeader + 8 + binLength));

json.bufferViews ||= [];
json.accessors ||= [];
json.animations = [];

const rootIndex = json.scenes[json.scene || 0].nodes[0];
const root = json.nodes[rootIndex];
if (root.matrix) throw new Error("Matrix-only root is not supported by this batch script.");
const baseTranslation = [...(root.translation || [0, 0, 0])];
const baseRotation = [...(root.rotation || [0, 0, 0, 1])];
const baseScale = [...(root.scale || [1, 1, 1])];
root.translation = baseTranslation;
root.rotation = baseRotation;
root.scale = baseScale;
root.name = `${root.name || "Pet"}_AnimatedRoot`;

const align4 = (value) => (value + 3) & ~3;
const append = (values, type, componentCount) => {
  const offset = align4(binary.length);
  if (offset !== binary.length) binary = Buffer.concat([binary, Buffer.alloc(offset - binary.length)]);
  const data = Buffer.alloc(values.length * 4);
  values.forEach((value, index) => data.writeFloatLE(value, index * 4));
  binary = Buffer.concat([binary, data]);
  const view = json.bufferViews.push({ buffer: 0, byteOffset: offset, byteLength: data.length }) - 1;
  const count = values.length / componentCount;
  const accessor = { bufferView: view, componentType: 5126, count, type };
  if (type === "SCALAR") {
    accessor.min = [Math.min(...values)];
    accessor.max = [Math.max(...values)];
  }
  return json.accessors.push(accessor) - 1;
};
const scaled = (factor) => baseScale.map((value) => value * factor);
const moved = (dy) => [baseTranslation[0], baseTranslation[1] + dy, baseTranslation[2]];
const quatMultiply = (a, b) => [
  a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
  a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
  a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
  a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
];
const rotateY = (angle) => quatMultiply(baseRotation, [0, Math.sin(angle / 2), 0, Math.cos(angle / 2)]);
const rotateZ = (angle) => quatMultiply(baseRotation, [0, 0, Math.sin(angle / 2), Math.cos(angle / 2)]);

const addAnimation = (name, tracks) => {
  const animation = { name, samplers: [], channels: [] };
  for (const track of tracks) {
    const input = append(track.times, "SCALAR", 1);
    const width = track.path === "rotation" ? 4 : 3;
    const output = append(track.values.flat(), width === 4 ? "VEC4" : "VEC3", width);
    const sampler = animation.samplers.push({ input, output, interpolation: track.interpolation || "LINEAR" }) - 1;
    animation.channels.push({ sampler, target: { node: rootIndex, path: track.path } });
  }
  json.animations.push(animation);
};

addAnimation("idle_breathe", [
  { path: "scale", times: [0, 1.4, 2.8], values: [scaled(1), scaled(1.022), scaled(1)] },
  { path: "translation", times: [0, 1.4, 2.8], values: [moved(0), moved(0.006), moved(0)] },
]);
addAnimation("idle_blink", [
  { path: "scale", times: [0, 0.08, 0.16, 2.8], values: [scaled(1), [baseScale[0], baseScale[1] * 0.992, baseScale[2]], scaled(1), scaled(1)], interpolation: "STEP" },
]);
addAnimation("idle_tail", [
  { path: "rotation", times: [0, 1, 2], values: [rotateY(-0.025), rotateY(0.025), rotateY(-0.025)] },
]);
addAnimation("touch_happy", [
  { path: "translation", times: [0, 0.22, 0.48, 0.8], values: [moved(0), moved(0.045), moved(0.012), moved(0)] },
  { path: "rotation", times: [0, 0.22, 0.48, 0.8], values: [baseRotation, rotateZ(-0.045), rotateZ(0.035), baseRotation] },
  { path: "scale", times: [0, 0.22, 0.48, 0.8], values: [scaled(1), scaled(1.025), scaled(1.008), scaled(1)] },
]);
addAnimation("look_follow", [
  { path: "rotation", times: [0, 0.8, 1.6, 2.4], values: [rotateY(-0.055), rotateY(0.055), rotateY(0.02), rotateY(-0.055)] },
]);

json.buffers[0].byteLength = binary.length;
const jsonRaw = Buffer.from(JSON.stringify(json));
const jsonPadded = Buffer.concat([jsonRaw, Buffer.alloc(align4(jsonRaw.length) - jsonRaw.length, 0x20)]);
const binPadded = Buffer.concat([binary, Buffer.alloc(align4(binary.length) - binary.length)]);
const totalLength = 12 + 8 + jsonPadded.length + 8 + binPadded.length;
const header = Buffer.alloc(12);
header.writeUInt32LE(0x46546c67, 0);
header.writeUInt32LE(2, 4);
header.writeUInt32LE(totalLength, 8);
const jsonHeader = Buffer.alloc(8);
jsonHeader.writeUInt32LE(jsonPadded.length, 0);
jsonHeader.writeUInt32LE(0x4e4f534a, 4);
const binOutHeader = Buffer.alloc(8);
binOutHeader.writeUInt32LE(binPadded.length, 0);
binOutHeader.writeUInt32LE(0x004e4942, 4);
fs.writeFileSync(outputPath, Buffer.concat([header, jsonHeader, jsonPadded, binOutHeader, binPadded]));
console.log(`Wrote ${outputPath} (${totalLength} bytes) with ${json.animations.length} clips.`);
