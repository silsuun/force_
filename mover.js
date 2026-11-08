// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
  

   constructor(i) {
    this.mass = 1;
    this.position = createVector(220 + i * 50, 100);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

   show() {
    fill(127);
    ellipse(this.position.x, this.position.y, 40, 40);
  }


  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
  
}

