// Matter aliases
var Engine  = Matter.Engine,
  World     = Matter.World,
  Bodies    = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;
var shape = 1;
var size = 50;
var randomness = false;
var variation = 50;
var w;
var h;


//SETUP
function setup() {
  w = select("body").width;
  h = select("body").height-54.5;
  createCanvas(w, h);

  engine = Engine.create();
  world = engine.world;
  ground = new Side(w/2, h, w, 50);

  World.add(world, ground);
}

//DRAW
function draw() {
  background(32, 31, 40);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].body.position.x < -50 || boxes[i].body.position.x > (w+50) || boxes[i].body.position.y < -50){
      World.remove(world, boxes[i]);
      boxes.splice(i, 0);
    }else {
      boxes[i].show();
    }
  }

  ground.show();

}


//OTHER FUNCTIONS
function mouseClicked(event) {
  // console.log(event.target.value);
  if (event.target.id == "square"){
    shape = 1;
  }else if (event.target.id == "circle"){
    shape = 2;
  }else if (event.target.id == "size") {
    size = event.target.value;
  }else if (event.target.id == "randomness") {
    randomness = !randomness;
    console.log(randomness);
  }
  if (!(mouseY < 54.5)) {
    if (randomness) {
      console.log(size);
      console.log(randomSize(Number(size)-variation, Number(size)+variation));
      boxes.push(new Shape(mouseX, mouseY, randomSize(Number(size)-variation, Number(size)+variation), randomSize(Number(size)-variation, Number(size)+variation), shape));
    }else {
      boxes.push(new Shape(mouseX, mouseY, size, size, shape));
    }
  }
}

function mouseDragged() {
  if (!(mouseY < 54.5)) {
    if (randomness) {
      boxes.push(new Shape(mouseX, mouseY, randomSize(Number(size)-variation, Number(size)+variation), randomSize(Number(size)-variation, Number(size)+variation), shape));
    }else {
      boxes.push(new Shape(mouseX, mouseY, size, size, shape));
    }
  }
}

function windowResized() {
  var w = select("body").width;
  var h = select("body").height-54.5;
  ground.refresh(w/2, h, w, 50)
  resizeCanvas(w, h);
}

function randomSize(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
