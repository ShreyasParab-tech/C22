const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var world,engine
var box
var ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world


  var boxoption = {
    isStatic : true
  }

  box = Bodies.rectangle(200,390,400,20,boxoption)
  World.add(world,box)
  var balloption = {
    restitution : 1.5
  }
  ball = Bodies.circle(200,100,40,balloption)
  World.add(world,ball)
}

function draw() {
  background(0,0,0);
  Engine.update(engine)

  rectMode(CENTER)
  rect(box.position.x,box.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40);

  drawSprites();
}