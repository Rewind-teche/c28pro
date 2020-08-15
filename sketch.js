
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
  array=[]
  array2=[1,2,3,4,5]
  array.push(array2)
  console.table(array)
	//Create the Bodies Here.
  ground = new Ground(width/2,590,800,15)

  tree = new Tree(650,360,10,500)

  boy = new Boy(150,540,10,100)

  mango1 = new Mango(650,300,5)
  mango2 = new Mango(650,170,20)
  mango3 = new Mango(550,280,20)
  mango4 = new Mango(730,250,20)
  mango5 = new Mango(640,230,20)
  mango6 = new Mango(590,350,20)
  mango7 = new Mango(740,355,20)

  stone = new Stone(100,100,20)

  sling = new Sling(stone.body,{x:110,y:500})
	Engine.run(engine);
  
}


function draw() {
 
  background("white");
  Engine.update(engine);
  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  sling.display();
  stone.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})
}

function mouseReleased()
{
    sling.fly()
}

function detectCollision(lstone,lmango)
{
  mangoPosition = lmango.body.position
  stonePosition = lstone.body.position

  var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
  if(distance<=lmango.radius+lstone.radius)
  {
    Matter.Body.setStatic(lmango.body,false)
  }
}

function keyPressed()
{
   if(keyCode === 32)
   {
    
     Matter.Body.setPosition(stone.body,{x:110,y:500})
     sling.attach(stone.body)
   }
}
