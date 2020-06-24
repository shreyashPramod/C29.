const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var black1;
var polygon1;

function setup() {
  createCanvas(900,600);
	engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,400,200,20);
  ground2 = new Ground(730,350,180,20);
  ground3 = new Ground(60,400,100,100);

  //level two
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  //level three
  block6 = new Block(360,192,30,40);
  block7 = new Block(390,192,30,40);
  block8 = new Block(420,192,30,40);
  //level top
  block9 = new Block(390,155,30,40);

  //level two
  block10 = new Block(670,200,30,40);
  block11 = new Block(700,200,30,40);
  block12 = new Block(730,200,30,40);
  block13 = new Block(760,200,30,40);
  block14 = new Block(790,200,30,40);
  //level tree
  block15 = new Block(700,250,30,40);
  block16 = new Block(730,250,30,40);
  block17 = new Block(760,250,30,40);
 //level top
  block18 = new Block(730,280,30,40);

  polygon1 = new Polygon(60,100,20,20);

  Engine.run(engine);
}

function draw() {
  background("pink"); 
  Engine.update(engine);

  ground1.display();
  ground2.display();
  
  //level two
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  //level tree
  block6.display();
  block7.display();
  block8.display();
  //level top
  block9.display();

  //level two
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  //level three
  block15.display();
  block16.display();
  block17.display();
  //level top
  block18.display();
  polygon1.display();

  drawSprites();
}