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

  for (let mover of movers) {
    mover.update();
    mover.show();
  }
}
  
