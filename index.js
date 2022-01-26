// import "./style.css";
import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
 75,
 window.innerWidth / window.innerHeight,
 0.1,
 1000
);
const renderer = new THREE.WebGLRenderer({
 canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);
renderer.render(scene, camera);


// OBJECT MAKING:

// DONUT REQUIREMENTS:
const radius = 5,tube = 2.8,radialSegments = 25,tubularSegments = 66,arc = Math.PI * 2;
const loader2 = new THREE.TextureLoader();
loader2.crossOrigin = '';
const donutglazed = loader2.load('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Donut_texture%2C_Doughnut.jpg/800px-Donut_texture%2C_Doughnut.jpg');
//const donutsprinkles = loader2.load('https://s3-us-west-2.amazonaws.com/sabrinamarkon-images/images/pinkdonutwithsprinkles.png');
const donutGeometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
const donutMaterial = new THREE.MeshPhongMaterial({map: donutglazed});

// First DONUT
const donut1 = new THREE.Mesh(donutGeometry, donutMaterial);
scene.add(donut1);
donut1.position.set(-15, 1, -1);


// ABHI DONUT
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//const material = new THREE.MeshStandardMaterial({color: 0x479eff});
const torus = new THREE.Mesh(geometry, donutMaterial);
scene.add(torus);

/*
// PREV. TORUSKNOT -> DONUT
//const geometry2 = new THREE.TorusKnotGeometry(3, 0.75, 100, 16);
//const material2 = new THREE.MeshBasicMaterial({color: 0xff6347});
const torusKnot = new THREE.Mesh(donutGeometry, donutMaterial);
scene.add(torusKnot);
*/


// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
const ambientLight2 = new THREE.PointLight(0x808080);
ambientLight2.position.set(-27, 5, 5);
ambientLight2.decay = 2;

scene.add(pointLight, ambientLight, ambientLight2);


function addStar() {
 const geometry = new THREE.SphereGeometry(0.2, 24, 24);
 const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
 const star = new THREE.Mesh(geometry, material);
 const [x, y, z] = Array(3)
   .fill()
   .map(() => THREE.MathUtils.randFloatSpread(100));
 star.position.set(x, y, z);
 scene.add(star);
}

// Arra of 250 values and then for each value calls the addStar function
Array(250).fill().forEach(addStar);

// changes bg
const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture;
// avatar
const aniTexture = new THREE.TextureLoader().load('abhi.jpg')
const ani = new THREE.Mesh(
 new THREE.BoxGeometry(6, 6, 6),
 //map prop on the material as a texture
 new THREE.MeshBasicMaterial({ map: aniTexture })
);
scene.add(ani);
//MOOON
const moonTexture = new THREE.TextureLoader().load('moon.jpg')
const imageTexture = new THREE.TextureLoader().load('beach.jpg')
const moon = new THREE.Mesh(
 new THREE.SphereGeometry(3, 32, 32),
 new THREE.MeshStandardMaterial({ map: moonTexture, normalMap: imageTexture })
);
scene.add(moon);
// Repostionisng moon to further down of z axis as that is the direction of scroll
moon.position.z = 30;
moon.position.setX(-10);

ani.position.x = 17;
ani.position.z = -3.7;

//torusKnot.position(-20,1,1);

torus.position.setX(13.5);


// scroll Animation
function moveCamera() {
 // top prop here shows how far we are from the top of the webpage
 const t = document.body.getBoundingClientRect().top;
 moon.rotation.x += 0.05;
 moon.rotation.y += 0.075;
 moon.rotation.z += 0.05;
 ani.rotation.y += 0.01;
 ani.rotation.z += 0.01;
 //camera.rotation.z = t * -0.01;
 camera.rotation.z = t * -0.0001;
 camera.rotation.x = t * -0.0002;
 camera.rotation.y = t * -0.0002;
}
// fire the func when scrolled
document.body.onscroll = moveCamera;
moveCamera(); // thr func is assigned as the event handler for the document body on scroll event
// Animation
// renderer.render( scene, camera );
// Alternate below
function animate() {
 requestAnimationFrame(animate);

 const time = Date.now() * 0.0005;

 donut1.position.x += Math.sin(time) * 0.02;
 donut1.position.y += Math.cos(time) * 0.02;
 donut1.position.z += Math.cos(time) * 0.02;




 torus.rotation.x += 0.01; // rotation along x axis
 torus.rotation.y += 0.005; // roatation along y axis
 torus.rotation.z += 0.01; // rotation on z axis

 donut1.rotation.x += 0.005; // rotation along x axis
 donut1.rotation.y -= 0.01; // roatation along y axis
 donut1.rotation.z -= 0.02; // rotation on z axis

 //torusKnot.rotation.x += 0.005; // rotation along x axis
 //torusKnot.rotation.y += 0.005;; // roatation along y axis
 //torusKnot.rotation.z += 0.005; // rotation on z axis
 moon.rotation.x += 0.005;
 //controls.update();
 renderer.render(scene, camera);
}
animate();
