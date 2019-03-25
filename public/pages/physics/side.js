function Side(x, y, w, h){
  this.w = w;
  this.h = h;
  var options = {
    isStatic: true
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    noStroke(255);
    fill(170);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }

  this.refresh = function(x, y, w, h){
    World.remove(world, this.body);
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
  }

}
