// import "./style.css";
import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import {
    OrbitControls
} from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";
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

// DONUT #1

//Added 1/25/22

//DONUT 1
const radius = 5, tube = 2.8, radialSegments = 25, tubularSegments = 66, arc = Math.PI * 2;
//
const loader2 = new THREE.TextureLoader();
loader2.crossOrigin = '';
const donutglazed = loader2.load('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Donut_texture%2C_Doughnut.jpg/800px-Donut_texture%2C_Doughnut.jpg');
//const donutsprinkles = loader2.load('https://s3-us-west-2.amazonaws.com/sabrinamarkon-images/images/pinkdonutwithsprinkles.png');
const donutMaterial = new THREE.MeshPhongMaterial({map: donutglazed});
const donut1 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);

scene.add(donut1);
donut1.position.set(-10, 0, 10);
// FINISHED DONUT #1

// MULTIPLE VIEWABLE DONUTS

const donut2 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
scene.add(donut2);
donut2.position.set(-15, 20, 10);

/*

const donut3 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut4 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut5 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut6 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut7 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut8 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut9 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut10 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
//const donut2 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut13 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut14 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut15 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut16 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut17 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut18 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut19 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
const donut20 = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);




scene.add(donut3);
donut3.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut4);
donut4.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut5);
donut5.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut6);
donut6.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut7);
donut7.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut8);
donut8.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut9);
donut9.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut10);
donut10.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut13);
donut13.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut14);
donut14.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut15);
donut15.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut16);
donut16.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut17);
donut17.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut18);
donut18.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut19);
donut19.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));

scene.add(donut20);
donut20.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloat(low: -15, high: 30), THREE.MathUtils.randFloat(low: -30, high: 20));
//END MULTIPLE

*/

// DONUT BUILDER
  /* 
function addDonut() {
    const nextDonut = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
	const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

    nextDonut.position.set(x, y, z);
    scene.add(nextDonut);

if(THREE.MathUtils.randFloatSpread(100) > 0) {
	const nextDonut = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
	const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloat(low:10 high:100));

    star.position.set(x, y, z);
    scene.add(nextDonut);
}else{
	const nextDonut = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc), donutMaterial);
	const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(low:-100 high:-10));

    star.position.set(x, y, z);
    scene.add(nextDonut);
}
	
	
    
}

//Array(30).fill().forEach(addDonut);
//
*/

//const geometry2 = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const geometry2 = new THREE.TorusGeometry(3, 0.75, 100, 16);
const material2 = new THREE.MeshBasicMaterial({
    color: 0xff6347
});
const torusKnot = new THREE.Mesh(geometry2, donutMaterial);
scene.add(torusKnot);



//DONUT 2
/*
const loader2 = new THREE.TextureLoader();
	loader2.crossOrigin = '';
	const donutsprinkles = loader2.load('https://s3-us-west-2.amazonaws.com/sabrinamarkon-images/images/pinkdonutwithsprinkles.png');
	const donutMaterial2 = new THREE.MeshPhongMaterial({map: donutsprinkles});  // donut/torus #2 material
	const donut2 = new THREE.Mesh(
		   new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc),
		   donutMaterial2);
		   donut2.position.set(-50, 50, 0);


//Stopped 1/25/22
*/

// object
// Torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//changed color 1-23-22
//const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const material = new THREE.MeshStandardMaterial({
    //color: 0x479eff
    //color: 0x301934
    color: 0x502a56
});

const torus = new THREE.Mesh(geometry, donutMaterial);
//adding to the scene below

scene.add(torus);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);

const ambientLight2 = new THREE.PointLight(0x808080);
ambientLight2.position.set(-27, 5, 5);
ambientLight2.decay = 2;
// moon -10,0,30
// torusKnot -20, 1, 1
scene.add(pointLight, ambientLight, ambientLight2);

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper( 200, 50 )
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement); // Listen to dom events on the mouse and update the camera pos accordingly

function addStar() {
    const geometry = new THREE.SphereGeometry(0.2, 24, 24);
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff
    });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}
/*
function addLight() {

light1 = new THREE.PointLight(0xff0040, 2, 50);
light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
color: 0xff0040
})));

    const geometrye = new THREE.SphereGeometry(50, 24, 24);
    const materiale = new THREE.MeshBasicMaterial({
color: 0xff0040
})));
    let stary.add(new THREE.Mesh(geometrye, materiale));

    const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

    stary.position.set(x, y, z);
    scene.add(stary);
}
*/

// Arra of 250 values and then for each value calls the addStar function
Array(250).fill().forEach(addStar);
//Array(250).fill().forEach(addLight);

// changes bg
const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture;

// avatar

const aniTexture = new THREE.TextureLoader().load('abhi.jpg')
const ani = new THREE.Mesh(
    new THREE.BoxGeometry(6, 6, 6),
    //map prop on the material as a texture
    new THREE.MeshBasicMaterial({
        map: aniTexture
    })
);
scene.add(ani);


//MOOON
const moonTexture = new THREE.TextureLoader().load('moon.jpg')
const imageTexture = new THREE.TextureLoader().load('beach.jpg')
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: imageTexture
    })
);
scene.add(moon);
// Repostionisng moon to further down of z axis as that is the direction of scroll
moon.position.setX(-10);
moon.position.z = 30;
// Moon: (-10,0,30)

ani.position.x = 17;
ani.position.z = -3.7;
torus.position.setX(13.5);
// Ani: (17,0,-3.7)
// Torus: (13.5,0,0)


torusKnot.position.setX(-20);
torusKnot.position.y = 1;
torusKnot.position.z = 1;
// Knot: (-20,1,1)
// scroll Animation


//Added by Abhitej - 1/23/22

let light1, light2, light3, light4, light5;
const clock = new THREE.Clock();

const sphere = new THREE.SphereGeometry(100, 16, 8);

light1 = new THREE.PointLight(0xff0040, 2, 50);
light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
    color: 0xff0040
})));


light2 = new THREE.PointLight(0x0040ff, 2, 50);
light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
    color: 0x0040ff
})));


light3 = new THREE.PointLight(0x80ff80, 2, 50);
light3.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
    color: 0x80ff80
})));


light4 = new THREE.PointLight(0xffaa00, 2, 50);
light4.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
    color: 0xffaa00
})));


light5 = new THREE.PointLight(0xffaa00, 2, 50);
light5.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({
    color: 0xffaa00
})));
/*
scene.add(light1);
scene.add(light2);
scene.add(light3);
scene.add(light4);
scene.add(light5);
*/

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

    torus.rotation.x += 0.01; // rotation along x axis
    torus.rotation.y += 0.005; // roatation along y axis
    torus.rotation.z += 0.01; // rotation on z axis
	
    donut1.rotation.x += 0.01; // rotation along x axis
    donut1.rotation.y -= 0.005; // roatation along y axis
    donut1.rotation.z -= 0.02; // rotation on z axis


    torusKnot.rotation.x += 0.005; // rotation along x axis
    torusKnot.rotation.y += 0.005; // roatation along y axis
    torusKnot.rotation.z += 0.005; // rotation on z axis


    /*
				light1.position.x = 0;
				light1.position.y = 0;
				light1.position.z = 0;

				light2.position.x = 5;
				light2.position.y = 5;
				light2.position.z = 5;

				light3.position.x = -3;
				light3.position.y = -3;
				light3.position.z = -3;

				light4.position.x = 1;
				light4.position.y = 1;
				light4.position.z = 7;
*/
    moon.rotation.x += 0.005;


    const time = Date.now() * 0.0005;
    const delta = clock.getDelta();

    light1.position.x = Math.sin(time * 0.7) * 10;
    light1.position.y = Math.cos(time * 0.5) * 20;
    light1.position.z = Math.cos(time * 0.3) * 10;

    light2.position.x = Math.cos(time * 0.3) * 10;
    light2.position.y = Math.sin(time * 0.5) * 20;
    light2.position.z = Math.sin(time * 0.7) * 30;

    light3.position.x = Math.sin(time * 0.7) * 30;
    light3.position.y = Math.cos(time * 0.3) * 0;
    light3.position.z = Math.sin(time * 0.5) * 20;

    light4.position.x = Math.sin(time * 0.3) * 10;
    light4.position.y = Math.cos(time * 0.7) * 0;
    light4.position.z = Math.sin(time * 0.5) * 10;

    light5.position.x = -20;
    light5.position.y = 2;
    light5.position.z = 2;
    //controls.update();

    renderer.render(scene, camera);
}

animate();
