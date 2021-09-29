const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var object_options={
    restitution:0.9
  }

  object=Bodies.circle(200,100,20,object_options);
  World.add(world,object);

  console.log(object)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  ellipse(object.position.x,object.position.y,20,20)
  
}