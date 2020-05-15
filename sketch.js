const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,tri1,rect1;


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  ground = new Ground(400,height,1200,20);
  tri1 = new Tri(400, 200);
  rect1 = new Rect(400, 300);





}

function draw() {
  background(255,255,255);  
  drawSprites();
}