import { ArcRotateCamera, DirectionalLight, Engine, Mesh, Scene, ShadowGenerator, Vector3 } from 'babylonjs';


try {

  const canvas: HTMLCanvasElement = document.getElementById('babylon') as HTMLCanvasElement;

  const engine = new Engine(canvas);

  const scene = new Scene(engine);

  const camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 8, 50, Vector3.Zero(), scene);

  camera.attachControl(canvas, true);

  const light = new DirectionalLight("direct", new Vector3(-1.2, -1, -2).normalize(), scene);
  light.position = new Vector3(10, 30, 15);

  // Creation of a knot
  // (name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable)
  const knot = Mesh.CreateTorusKnot("knot", 5, 0.5, 128, 64, 2, 3, scene);

  const ground = Mesh.CreateGround("ground", 30,30, 10, scene);
  ground.position.y = -8;

  const shadowGenerator = new ShadowGenerator(4096, light);
  shadowGenerator.getShadowMap().renderList.push(knot);
  knot.receiveShadows = true;
  ground.receiveShadows = true;

  engine.runRenderLoop(() => {
    scene.render();
  });


} catch (e) {

  document.write('Encountered error: ' + e.message)

}
