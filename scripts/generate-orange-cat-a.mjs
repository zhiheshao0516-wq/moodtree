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
root.name = "MoodTreeOrangeCatSelectedCartoon";

const mat = (name, color, roughness = .3) => new THREE.MeshPhysicalMaterial({
  name, color, roughness, metalness: 0, clearcoat: .42, clearcoatRoughness: .2,
});
const orange = mat("warm orange resin", 0xf2a34a, .34);
const stripe = mat("soft orange tabby stripes", 0xd8782f, .4);
const cream = mat("warm ivory muzzle chest and paws", 0xffedcf, .4);
const pink = mat("soft pink inner ears", 0xee9c9b, .3);
const iris = mat("warm amber brown eyes", 0x8e4d19, .16);
const black = mat("espresso details", 0x241a17, .3);
const white = mat("eye catchlights", 0xffffff, .12);

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

// Selected cartoon language: large rounded head directly joined to a compact pear body.
sphere("BodyShell", orange, [0, .12, 0], [.61, .86, .50], body);
sphere("ShoulderShell", orange, [0, .68, .01], [.53, .49, .46], body);
sphere("ChestBib", cream, [0, .19, .49], [.33, .60, .05], body, 32);
sphere("HeadShell", orange, [0, 1.38, .025], [.74, .68, .61], head);
sphere("CheekShellL", orange, [-.40,1.26,.35], [.39,.34,.30], head, 32);
sphere("CheekShellR", orange, [.40,1.26,.35], [.39,.34,.30], head, 32);
sphere("MuzzleL", cream, [-.17, 1.20, .59], [.31, .23, .12], face, 32);
sphere("MuzzleR", cream, [.17, 1.20, .59], [.31, .23, .12], face, 32);

// Rounded ears built from softened cones.
const earGeo = new THREE.ConeGeometry(.27, .58, 32, 4);
mesh("EarL", earGeo, orange, [-.45, 2.00, .015], [.95, 1, .72], [0, 0, -.08], head);
mesh("EarR", earGeo, orange, [.45, 2.00, .015], [.95, 1, .72], [0, 0, .08], head);
const innerGeo = new THREE.ConeGeometry(.17, .39, 32, 3);
mesh("EarInnerL", innerGeo, pink, [-.45, 2.00, .15], [.82, .84, .30], [0, 0, -.08], head);
mesh("EarInnerR", innerGeo, pink, [.45, 2.00, .15], [.82, .84, .30], [0, 0, .08], head);

// Large friendly round amber eyes from the approved illustration.
const eyeL = sphere("EyeL", white, [-.255, 1.48, .565], [.225, .265, .055], face, 40);
const eyeR = sphere("EyeR", white, [.255, 1.48, .565], [.225, .265, .055], face, 40);
sphere("IrisL", iris, [-.255, 1.47, .615], [.145, .18, .035], face, 32);
sphere("IrisR", iris, [.255, 1.47, .615], [.145, .18, .035], face, 32);
sphere("PupilL", black, [-.255, 1.47, .646], [.082, .115, .018], face, 24);
sphere("PupilR", black, [.255, 1.47, .646], [.082, .115, .018], face, 24);
sphere("HighlightL", white, [-.30, 1.56, .665], [.048, .055, .012], face, 16);
sphere("HighlightR", white, [.21, 1.56, .665], [.048, .055, .012], face, 16);
sphere("Nose", pink, [0, 1.24, .735], [.065, .052, .040], face, 24);

// Smile and whiskers use rounded tubes.
const tube = (name, points, radius, material, parent = face) => mesh(name, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p))), 20, radius, 8, false), material, [0, 0, 0], [1, 1, 1], [0, 0, 0], parent);
tube("SmileL", [[0,1.20,.75],[-.045,1.12,.755],[-.14,1.10,.72]], .011, black);
tube("SmileR", [[0,1.20,.75],[.045,1.12,.755],[.14,1.10,.72]], .011, black);
[-.08, .02, .12].forEach((dy, i) => {
  tube(`WhiskerL${i}`, [[-.34,1.16+dy,.62],[-.62,1.17+dy,.68],[-.88,1.20+dy,.63]], .0045, black);
  tube(`WhiskerR${i}`, [[.34,1.16+dy,.62],[.62,1.17+dy,.68],[.88,1.20+dy,.63]], .0045, black);
});

// Full limbs stay outside the torso silhouette, like a seated resin figurine.
const forelegGeo = new THREE.CapsuleGeometry(.15,.55,10,24);
mesh("ForelegL",forelegGeo,orange,[-.31,-.20,.43],[1,1,.88],[0,0,-.02],body);
mesh("ForelegR",forelegGeo,orange,[.31,-.20,.43],[1,1,.88],[0,0,.02],body);
sphere("HaunchL", orange, [-.50, -.43, -.01], [.31, .40, .36], body, 32);
sphere("HaunchR", orange, [.50, -.43, -.01], [.31, .40, .36], body, 32);
sphere("PawL", cream, [-.31, -.70, .47], [.23, .15, .29], body, 32);
sphere("PawR", cream, [.31, -.70, .47], [.23, .15, .29], body, 32);
sphere("RearPawL", cream, [-.51, -.68, .28], [.20, .13, .26], body, 28);
sphere("RearPawR", cream, [.51, -.68, .28], [.20, .13, .26], body, 28);

// A slim, naturally curved tail that does not curl back into a ring.
const tailCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(.50,-.55,-.12), new THREE.Vector3(.78,-.60,-.08),
  new THREE.Vector3(.98,-.43,-.02), new THREE.Vector3(1.06,-.12,.04),
  new THREE.Vector3(1.04,.20,.09), new THREE.Vector3(.96,.47,.14),
]);
mesh("TailShell", new THREE.TubeGeometry(tailCurve, 56, .14, 20, false), orange, [0,0,0], [1,1,1], [0,0,0], tail);

// Soft graphic stripes as shallow rounded forms.
[-.20,0,.20].forEach((x, i) => sphere(`ForeheadStripe${i}`, stripe, [x, 1.82 - Math.abs(x)*.12, .585], [.045, .16 - Math.abs(i-1)*.012, .014], face, 20));
[-.52,.52].forEach((x, side) => [-.02,.28,.52].forEach((yy, i) => sphere(`BodyStripe${side}_${i}`, stripe, [x, yy, .43], [.12, .040, .016], body, 20)));
[-.31,.31].forEach((x,side)=>[-.12,.17].forEach((yy,i)=>sphere(`LegStripe${side}_${i}`,stripe,[x,yy,.565],[.11,.035,.014],body,20)));
[.70,.88,1.04].forEach((x,i)=>sphere(`TailStripe${i}`,stripe,[x,-.55+i*.14,-.045+i*.055],[.10,.035,.10],tail,18));

// Match the production camera contract: about 3.1 world units tall, feet near y=-0.875.
root.scale.setScalar(.92);
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
const outputPath = process.argv[2] || new URL("../public/pets3d/01.glb", import.meta.url);
fs.writeFileSync(outputPath, Buffer.from(output));
console.log(`wrote ${outputPath} (${output.byteLength} bytes)`);
