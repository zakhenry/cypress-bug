import { ArcRotateCamera, DirectionalLight, Engine, Mesh, Scene, ShadowGenerator, Vector3 } from 'babylonjs';

try {

  const progress  = document.getElementById('progress');

  progress.innerHTML += `loading canvas\n`;
  const canvas: HTMLCanvasElement = document.getElementById('babylon') as HTMLCanvasElement;
  progress.innerHTML += `starting engine\n`;
  const engine = new Engine(canvas);

  progress.innerHTML += `creating scene\n`;
  const scene = new Scene(engine);

  progress.innerHTML += `registering camera\n`;
  const camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 8, 50, Vector3.Zero(), scene);

  progress.innerHTML += `attaching camera to canvas\n`;
  camera.attachControl(canvas, true);

  progress.innerHTML += `creating light\n`;
  const light = new DirectionalLight("direct", new Vector3(-1.2, -1, -2).normalize(), scene);
  light.position = new Vector3(10, 30, 15);

  // Creation of a knot
  // (name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable)
  progress.innerHTML += `creating knot\n`;
  const knot = Mesh.CreateTorusKnot("knot", 5, 0.5, 128, 64, 2, 3, scene);

  progress.innerHTML += `creating ground\n`;
  const ground = Mesh.CreateGround("ground", 30,30, 10, scene);
  ground.position.y = -8;

  progress.innerHTML += `creating shadows\n`;
  const shadowGenerator = new ShadowGenerator(4096, light);
  shadowGenerator.getShadowMap().renderList.push(knot);
  knot.receiveShadows = true;
  ground.receiveShadows = true;

  progress.innerHTML += `starting render loop\n`;
  engine.runRenderLoop(() => {
    scene.render();
  });

  progress.innerHTML += `setting 'No Errors'\n`;
  document.getElementById('errors').innerHTML = 'No Errors';

} catch (e) {

  console.error(e);
  document.getElementById('errors').innerHTML = 'Encountered error: ' + e.message;


}
