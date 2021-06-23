function Shape(x, y, w, h, s) {
  var options = {
    friction: 0,
    restitution: 0
  }
  if (s==1) {
    this.body = Bodies.rectangle(x, y, w, h, options);
  }else {
    this.body = Bodies.circle(x, y, w, options);
  }
  this.w = w;
  this.h = h;
  this.s = s;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(1);
    stroke(255);
    fill(127);

    if (this.s == 1) {
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
    }else {
      circle(0, 0, this.w);
    }
    pop();
  }

}
