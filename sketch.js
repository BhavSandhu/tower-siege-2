
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  createCanvas(1600, 600);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  polygon = new Polygon(400, 400, 30, 30)
  ground = new Ground(800, 600, 1600, 40)
  block8 = new Block(1300, 235, 30, 40)
  block9 = new Block(1330, 235, 30, 40)
  block10 = new Block(1360, 235, 30, 40)
  block11 = new Block(1390, 235, 30, 40)
  block12 = new Block(1420, 235, 30, 40)
  block13 = new Block(1330, 195, 30, 40)
  block14 = new Block(1360, 195, 30, 40)
  block15 = new Block(1390, 195, 30, 40)
  block16 = new Block(1360, 155, 30, 40)
  platform = new Ground(1360, 300, 250, 10)
  slingshot = new Slingshot(polygon.body, { x: 400, y: 400 })

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  polygon.display()
  ground.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  platform.display()
  slingshot.display()



  drawSprites();

}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })

}

function mouseReleased() {
  slingshot.fly()

}
