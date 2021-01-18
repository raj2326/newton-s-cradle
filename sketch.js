
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(800,200,200,20)
d=40
x=800
y=500
ball1=new Ball(x-2*d,y,20)
ball2=new Ball(x-d,y,20)
ball3=new Ball(x,y,20)
ball4=new Ball(x+d,y,20)
ball5=new Ball(x+2*d,y,20)
rope1=new Rope(ball1.body,roof.body,-2*d,0)
rope2=new Rope(ball2.body,roof.body,-d,0)
rope3=new Rope(ball3.body,roof.body,0,0)
rope4=new Rope(ball4.body,roof.body,d,0)
rope5=new Rope(ball5.body,roof.body,2*d,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  ball1.display()
	  ball2.display()
	  ball3.display()
	  ball4.display()
	  ball5.display()
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45})
	}
}

