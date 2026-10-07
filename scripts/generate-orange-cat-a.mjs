import fs from "node:fs";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

if (!globalThis.FileReader) {
  globalThis.FileReader = class {
    readAsArrayBuffer(blob) { blob.arrayBuffer().then((value) => { this.result = value; this.onloadend?.(); }); }
    readAsDataURL(blob) { blob.arrayBuffer().then((value) => { this.result = `data:${blob.type};base64,${Buffer.from(value).toString("base64")}`; this.onloadend?.(); }); }
  };
}

const root = new THREE.Group();
root.name = "MoodTreeOrangeCatA";

const mat = (name, color, roughness = .86) => new THREE.MeshStandardMaterial({
  name, color, roughness, metalness: 0,
});
const orange = mat("warm matte orange", 0xf2a25e);
const stripe = mat("soft tangerine stripes", 0xd9773f);
const cream = mat("warm cream", 0xffedcf);
const pink = mat("blush pink", 0xf4a8a5);
const green = mat("deep sage green eyes", 0x366e5b, .72);
const black = mat("soft charcoal", 0x3b3a37, .76);
const white = mat("eye highlights", 0xffffff, .65);

const mesh = (name, geometry, material, position, scale = [1, 1, 1], rotation = [0, 0, 0], parent = root) => {
  const value = new THREE.Mesh(geometry, material);
  value.name = name;
  value.position.set(...position);
  value.scale.set(...scale);
  value.rotation.set(...rotation);
  value.castShadow = true;
  value.receiveShadow = true;
  parent.add(value);
  return value;
};
const sphere = (name, material, position, scale, parent = root, segments = 32) =>
  mesh(name, new THREE.SphereGeometry(1, segments, Math.max(16, segments / 2)), material, position, scale, [0, 0, 0], parent);

const body = new THREE.Group(); body.name = "Body"; root.add(body);
const head = new THREE.Group(); head.name = "Head"; root.add(head);
const face = new THREE.Group(); face.name = "Face"; head.add(face);
const tail = new THREE.Group(); tail.name = "Tail"; root.add(tail);

sphere("BodyShell", orange, [0, .18, 0], [.92, 1.1, .68], body);
sphere("ChestBib", cream, [0, .38, .61], [.48, .66, .09], body, 24);
sphere("HeadShell", orange, [0, 1.48, .04], [1.08, .94, .86], head);
sphere("Muzzle", cream, [0, 1.30, .77], [.62, .40, .16], face, 24);

// Rounded ears built from softened cones.
const earGeo = new THREE.ConeGeometry(.42, .82, 32, 4);
mesh("EarL", earGeo, orange, [-.66, 2.22, .02], [.92, 1, .7], [0, 0, -.16], head);
mesh("EarR", earGeo, orange, [.66, 2.22, .02], [.92, 1, .7], [0, 0, .16], head);
const innerGeo = new THREE.ConeGeometry(.25, .52, 32, 2);
mesh("EarInnerL", innerGeo, pink, [-.66, 2.22, .24], [.85, .86, .34], [0, 0, -.16], head);
mesh("EarInnerR", innerGeo, pink, [.66, 2.22, .24], [.85, .86, .34], [0, 0, .16], head);

const eyeL = sphere("EyeL", green, [-.39, 1.60, .77], [.26, .31, .12], face, 32);
const eyeR = sphere("EyeR", green, [.39, 1.60, .77], [.26, .31, .12], face, 32);
sphere("PupilL", black, [-.39, 1.60, .885], [.12, .18, .045], face, 20);
sphere("PupilR", black, [.39, 1.60, .885], [.12, .18, .045], face, 20);
sphere("HighlightL", white, [-.46, 1.72, .925], [.055, .07, .025], face, 16);
sphere("HighlightR", white, [.32, 1.72, .925], [.055, .07, .025], face, 16);
sphere("CheekL", pink, [-.65, 1.26, .80], [.22, .12, .05], face, 20);
sphere("CheekR", pink, [.65, 1.26, .80], [.22, .12, .05], face, 20);
sphere("Nose", pink, [0, 1.35, .96], [.10, .075, .06], face, 20);

// Smile and whiskers use rounded tubes.
const tube = (name, points, radius, material, parent = face) => mesh(name, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p))), 20, radius, 8, false), material, [0, 0, 0], [1, 1, 1], [0, 0, 0], parent);
tube("SmileL", [[0,1.30,.99],[-.05,1.20,1.0],[-.17,1.19,.97]], .018, black);
tube("SmileR", [[0,1.30,.99],[.05,1.20,1.0],[.17,1.19,.97]], .018, black);
[-.08, .02, .12].forEach((dy, i) => {
  tube(`WhiskerL${i}`, [[-.48,1.26+dy,.88],[-.82,1.27+dy,.95],[-1.12,1.30+dy,.90]], .011, black);
  tube(`WhiskerR${i}`, [[.48,1.26+dy,.88],[.82,1.27+dy,.95],[1.12,1.30+dy,.90]], .011, black);
});

// Paws and haunches.
sphere("HaunchL", orange, [-.63, -.50, .10], [.52, .62, .55], body);
sphere("HaunchR", orange, [.63, -.50, .10], [.52, .62, .55], body);
sphere("PawL", cream, [-.42, -.88, .52], [.36, .22, .44], body, 24);
sphere("PawR", cream, [.42, -.88, .52], [.36, .22, .44], body, 24);

// Curled tail, thick and toy-like.
const tailCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(.67,-.33,-.16), new THREE.Vector3(1.12,-.20,-.12),
  new THREE.Vector3(1.32,.25,.02), new THREE.Vector3(1.28,.73,.14),
  new THREE.Vector3(1.08,.98,.28), new THREE.Vector3(.98,.75,.36),
]);
mesh("TailShell", new THREE.TubeGeometry(tailCurve, 48, .23, 16, false), orange, [0,0,0], [1,1,1], [0,0,0], tail);

// Soft graphic stripes as shallow rounded forms.
[-.34,0,.34].forEach((x, i) => sphere(`ForeheadStripe${i}`, stripe, [x, 1.97 - Math.abs(x)*.16, .80], [.10, .28 - i*.015, .035], face, 16));
[-.52,.52].forEach((x, side) => [-.02,.35].forEach((yy, i) => sphere(`BodyStripe${side}_${i}`, stripe, [x, yy, .57], [.20, .075, .035], body, 16)));

// Match the production camera contract: about 3.1 world units tall, feet near y=-0.875.
root.scale.setScalar(.82);
root.position.y = .04;

const times = [0, .7, 1.4, 2.1, 2.8];
const vecTrack = (node, prop, values, name) => new THREE.VectorKeyframeTrack(`${node.name}.${prop}`, times, values, THREE.InterpolateSmooth);
const quatValues = (angles) => angles.flatMap(([x,y,z]) => new THREE.Quaternion().setFromEuler(new THREE.Euler(x,y,z)).toArray());
const clip = (name, duration, tracks) => new THREE.AnimationClip(name, duration, tracks);

const idleBreathe = clip("idle_breathe", 2.8, [
  vecTrack(body, "scale", [1,1,1, 1.015,1.03,1.015, 1,1,1, .99,.985,.99, 1,1,1]),
  vecTrack(head, "position", [0,0,0, 0,.025,0, 0,.04,0, 0,.02,0, 0,0,0]),
]);
const idleBlink = clip("idle_blink", 2.8, [
  new THREE.VectorKeyframeTrack(`${eyeL.name}.scale`, [0,1.35,1.48,1.61,2.8], [.26,.31,.12, .26,.31,.12, .26,.025,.12, .26,.31,.12, .26,.31,.12]),
  new THREE.VectorKeyframeTrack(`${eyeR.name}.scale`, [0,1.35,1.48,1.61,2.8], [.26,.31,.12, .26,.31,.12, .26,.025,.12, .26,.31,.12, .26,.31,.12]),
]);
const idleTail = clip("idle_tail", 2.8, [
  new THREE.QuaternionKeyframeTrack(`${tail.name}.quaternion`, times, quatValues([[0,0,-.05],[.03,.08,.06],[0,0,-.04],[-.02,-.06,.05],[0,0,-.05]])),
]);
const touchHappy = clip("touch_happy", 1.4, [
  new THREE.VectorKeyframeTrack(`${head.name}.position`, [0,.35,.7,1.05,1.4], [0,0,0, 0,.16,.05, 0,.03,0, 0,.13,.04, 0,0,0]),
  new THREE.QuaternionKeyframeTrack(`${head.name}.quaternion`, [0,.35,.7,1.05,1.4], quatValues([[0,0,0],[0,0,.12],[0,0,-.10],[0,0,.06],[0,0,0]])),
]);
const lookFollow = clip("look_follow", 2.8, [
  new THREE.QuaternionKeyframeTrack(`${head.name}.quaternion`, times, quatValues([[0,-.06,0],[.03,.10,.02],[0,.05,0],[-.025,-.10,-.02],[0,-.06,0]])),
]);

root.traverse((item) => item.updateMatrix());
const exporter = new GLTFExporter();
const output = await exporter.parseAsync(root, {
  binary: true,
  animations: [idleBreathe, idleBlink, idleTail, touchHappy, lookFollow],
  onlyVisible: true,
  trs: true,
});
fs.writeFileSync(new URL("../public/pets3d/01-a.glb", import.meta.url), Buffer.from(output));
console.log(`wrote public/pets3d/01-a.glb (${output.byteLength} bytes)`);
