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
const orange = mat("matte resin orange", 0xf2a04f, .76);
const stripe = mat("tangerine tiger stripes", 0xd96f32, .78);
const cream = mat("ivory chest and paws", 0xffeccb, .8);
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

sphere("BodyShell", orange, [0, .16, 0], [.67, 1.17, .54], body);
sphere("ChestBib", cream, [0, .26, .51], [.34, .72, .07], body, 24);
sphere("HeadShell", orange, [0, 1.67, .03], [.80, .70, .67], head);
sphere("Muzzle", cream, [0, 1.52, .61], [.45, .28, .13], face, 24);

// Rounded ears built from softened cones.
const earGeo = new THREE.ConeGeometry(.31, .64, 32, 4);
mesh("EarL", earGeo, orange, [-.49, 2.25, .02], [.92, 1, .72], [0, 0, -.12], head);
mesh("EarR", earGeo, orange, [.49, 2.25, .02], [.92, 1, .72], [0, 0, .12], head);
const innerGeo = new THREE.ConeGeometry(.18, .40, 32, 2);
mesh("EarInnerL", innerGeo, pink, [-.49, 2.25, .18], [.84, .86, .35], [0, 0, -.12], head);
mesh("EarInnerR", innerGeo, pink, [.49, 2.25, .18], [.84, .86, .35], [0, 0, .12], head);

const eyeL = sphere("EyeL", green, [-.28, 1.74, .61], [.19, .24, .095], face, 32);
const eyeR = sphere("EyeR", green, [.28, 1.74, .61], [.19, .24, .095], face, 32);
sphere("PupilL", black, [-.28, 1.75, .70], [.085, .14, .035], face, 20);
sphere("PupilR", black, [.28, 1.75, .70], [.085, .14, .035], face, 20);
sphere("HighlightL", white, [-.33, 1.84, .735], [.042, .052, .018], face, 16);
sphere("HighlightR", white, [.23, 1.84, .735], [.042, .052, .018], face, 16);
sphere("CheekL", pink, [-.48, 1.48, .64], [.15, .085, .04], face, 20);
sphere("CheekR", pink, [.48, 1.48, .64], [.15, .085, .04], face, 20);
sphere("Nose", pink, [0, 1.56, .75], [.075, .055, .045], face, 20);

// Smile and whiskers use rounded tubes.
const tube = (name, points, radius, material, parent = face) => mesh(name, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p))), 20, radius, 8, false), material, [0, 0, 0], [1, 1, 1], [0, 0, 0], parent);
tube("SmileL", [[0,1.52,.77],[-.04,1.44,.78],[-.13,1.43,.75]], .012, black);
tube("SmileR", [[0,1.52,.77],[.04,1.44,.78],[.13,1.43,.75]], .012, black);
[-.08, .02, .12].forEach((dy, i) => {
  tube(`WhiskerL${i}`, [[-.37,1.48+dy,.67],[-.66,1.49+dy,.73],[-.94,1.52+dy,.68]], .007, black);
  tube(`WhiskerR${i}`, [[.37,1.48+dy,.67],[.66,1.49+dy,.73],[.94,1.52+dy,.68]], .007, black);
});

// Full limbs stay outside the torso silhouette, like a seated resin figurine.
const forelegGeo = new THREE.CapsuleGeometry(.17,.76,8,20);
mesh("ForelegL",forelegGeo,orange,[-.39,-.22,.48],[1,1,.88],[0,0,-.04],body);
mesh("ForelegR",forelegGeo,orange,[.39,-.22,.48],[1,1,.88],[0,0,.04],body);
sphere("HaunchL", orange, [-.58, -.49, .02], [.34, .48, .40], body);
sphere("HaunchR", orange, [.58, -.49, .02], [.34, .48, .40], body);
sphere("PawL", cream, [-.39, -.79, .52], [.25, .17, .32], body, 24);
sphere("PawR", cream, [.39, -.79, .52], [.25, .17, .32], body, 24);

// A slim, naturally curved tail that does not curl back into a ring.
const tailCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(.55,-.55,-.15), new THREE.Vector3(.91,-.52,-.12),
  new THREE.Vector3(1.20,-.28,-.05), new THREE.Vector3(1.36,.10,.04),
  new THREE.Vector3(1.43,.48,.10), new THREE.Vector3(1.35,.76,.16),
]);
mesh("TailShell", new THREE.TubeGeometry(tailCurve, 48, .14, 16, false), orange, [0,0,0], [1,1,1], [0,0,0], tail);

// Soft graphic stripes as shallow rounded forms.
[-.25,0,.25].forEach((x, i) => sphere(`ForeheadStripe${i}`, stripe, [x, 2.01 - Math.abs(x)*.13, .63], [.065, .20 - i*.008, .025], face, 16));
[-.43,.43].forEach((x, side) => [-.08,.27].forEach((yy, i) => sphere(`BodyStripe${side}_${i}`, stripe, [x, yy, .50], [.14, .052, .025], body, 16)));
[-.39,.39].forEach((x,side)=>[.08,.38].forEach((yy,i)=>sphere(`LegStripe${side}_${i}`,stripe,[x,yy,.63],[.13,.045,.022],body,16)));

// Match the production camera contract: about 3.1 world units tall, feet near y=-0.875.
root.scale.setScalar(.86);
root.position.y = .02;

const times = [0, .7, 1.4, 2.1, 2.8];
const vecTrack = (node, prop, values, name) => new THREE.VectorKeyframeTrack(`${node.name}.${prop}`, times, values, THREE.InterpolateSmooth);
const quatValues = (angles) => angles.flatMap(([x,y,z]) => new THREE.Quaternion().setFromEuler(new THREE.Euler(x,y,z)).toArray());
const clip = (name, duration, tracks) => new THREE.AnimationClip(name, duration, tracks);

const idleBreathe = clip("idle_breathe", 2.8, [
  vecTrack(body, "scale", [1,1,1, 1.015,1.03,1.015, 1,1,1, .99,.985,.99, 1,1,1]),
  vecTrack(head, "position", [0,0,0, 0,.025,0, 0,.04,0, 0,.02,0, 0,0,0]),
]);
const idleBlink = clip("idle_blink", 2.8, [
  new THREE.VectorKeyframeTrack(`${eyeL.name}.scale`, [0,1.35,1.48,1.61,2.8], [.19,.24,.095, .19,.24,.095, .19,.02,.095, .19,.24,.095, .19,.24,.095]),
  new THREE.VectorKeyframeTrack(`${eyeR.name}.scale`, [0,1.35,1.48,1.61,2.8], [.19,.24,.095, .19,.24,.095, .19,.02,.095, .19,.24,.095, .19,.24,.095]),
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
fs.writeFileSync(new URL("../public/pets3d/01.glb", import.meta.url), Buffer.from(output));
console.log(`wrote public/pets3d/01.glb (${output.byteLength} bytes)`);
