// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
  

   constructor(i) {
    this.mass = 1;
    this.position = createVector(220 + i * 50, 100);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.anchor = createVector(220 + i * 50, 20);
this.length = 80;
  }
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

   show() {
  stroke(0);
  line(
    this.anchor.x,
    this.anchor.y,
    this.position.x,
    this.position.y
  );

  fill(127);
  ellipse(this.position.x, this.position.y, 50, 50);
}


  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
  
  constrainLength() {
  let direction = p5.Vector.sub(this.position, this.anchor);
  direction.setMag(this.length);
  this.position = p5.Vector.add(this.anchor, direction);
}
}

