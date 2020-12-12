const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree1;
var mango,ground;
var stone;

function preload()
{
   boy = loadImage("boy.png");
   garden = loadImage("bkimg.jpg");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
    

	//tree1 = createSprite(400,350,200,200);
	
//Create the Bodies Here.
	ground = new Ground(width/2,700,width,20);
   tree1 = new ped(1000,250,400,400);
   mango = new Mangoes(1005,400,100,100);
   //mango1 = new Mangoes(990,170,100,100);
   mango2 = new Mangoes(960,290,100,100);
   mango3 = new Mangoes(1070,445,100,100);
   mango4 = new Mangoes(880,350,100,100);
   mango5 = new Mangoes(920,480,100,100);
   mango6 = new Mangoes(1140,380,100,100);
   mango7 = new Mangoes(1010,460,100,100);

   //stone = new Stone(200,570,100,100);
   stone = new Stone(200,570,100,100);
   launcher = new Launcher(stone.body,{x:220,y:580});
	Engine.run(engine);
  
}


function draw() {
 background(garden);
  image(boy ,200,400,200,300);
  tree1.display();
  mango.display();
  //mango1.diaplsy();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  ground.display();
  launcher.display();
  detectCollision(mango,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
  detectCollision(mango7,stone);
  
}

function detectCollision(lmango,lstone)
{
   mangop = lmango.body.position;
   stonep = lstone.body.position;
  
   var distance = dist(stonep.x,stonep.y,mangop.x,mangop.y);

   if(distance<=lmango.r+lstone.r)
   {
      Matter.Body.setStatic(lmango.body,false);
      console.log("collision detected");
   }
}

function mouseDragged()
{
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased()
{
   launcher.fly();
}
function keyPressed()
{
   if(keyCode === 32)
   {
      Matter.Body.setPosition(stone.body,{x:220,y:580});
      launcher.attach(stone.body);
   }
}