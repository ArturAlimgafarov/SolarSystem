let zoom = 1;
let drag;
let prevMouse;
let heightIndent = 10;

let sun;

function setup() {
  drag = createVector(0, 0);
  
  createCanvas(windowWidth, windowHeight - heightIndent, WEBGL);
  
  sun = new SpaceObject(24, 0, null, loadImage("textures/sun.jpg"), color(255));
  mercury = new SpaceObject(5, 60, sun, loadImage("textures/mercury.jpg"));
  venus = new SpaceObject(8, 120, sun, loadImage("textures/venus.jpg"));
  earth = new SpaceObject(9, 190, sun, loadImage("textures/earth.jpg"));
  mars = new SpaceObject(7, 260, sun, loadImage("textures/mars.jpg"));
  moon = new SpaceObject(2, 25, earth, loadImage("textures/moon.jpg"));
  phobos = new SpaceObject(3, 22, mars, loadImage("textures/phobos.jpg"));
  deimos = new SpaceObject(2, 30, mars, loadImage("textures/deimos.jpg"));
}

function draw() {
  background(0);
  
  noStroke();
  ambientMaterial(255);
  ambientLight(42);
  
  orbitControl();
  rotateX(PI / 2);

  sun.show();
  sun.orbit();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - heightIndent);
}

function mousePressed() {
  prevMouse = createVector(mouseX, mouseY);
}

function mouseWheel(event) {
  zoom += event.delta * 0.0005;
}
