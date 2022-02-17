const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
var engine, world,ground;
var bgImg;
var tower,towerImg;
var cannon;



function preload() {
 bgImg=loadImage("./assets/background.gif");
 towerImg = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;
  
  var groundoptions={
    isStatic : true
  }
  ground = Bodies.rectangle(600,600,1200,10,groundoptions);
  World.add(world,ground);
 
  tower = Bodies.rectangle(160,350,160,310,groundoptions);
  World.add(world,tower);

  cannon = new Cannon(180,110,130,100);
}

function draw() {
  background("skyblue");
  Engine.update(engine);

  image(bgImg,0,0,1200,600);

  rectMode(CENTER);
  
  push ();
  fill("black");
  rect(ground.position.x,ground.position.y,1200,10);
  pop ();

  push ();
  fill("white");
  imageMode(CENTER);
  image(towerImg,tower.position.x,tower.position.y,160,310);
  pop ();

  cannon.display();
 
 
  
   
}
