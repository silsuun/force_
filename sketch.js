// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let movers = [];

function setup() {
  createCanvas(640, 240);

  for (let i = 0; i < 5; i++) {
    movers[i] = new Mover(i);
  }
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.1);

  for (let mover of movers) {
    mover.applyForce(gravity);
    mover.update();
    mover.constrainLength();
    mover.show();
  }
  for (let i = 0; i < movers.length - 1; i++) {
  movers[i].checkCollision(movers[i + 1]);
}
}
  
