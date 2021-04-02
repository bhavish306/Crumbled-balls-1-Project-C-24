
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball,side1,side2,side3;
var ground,groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(displayWidth-20, 900);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	paperball = new Paper(200,700,50,50);
	side3 = new sides(1170,700,30,130);
	side2 = new sides(1100,750,140,30);
	side1 = new sides(1030,700,30,130);

	ground = new sides(displayWidth/2,920,displayWidth,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  side1.display();
  side2.display();
  side3.display();
  paperball.display();
  ground.display();
  
  drawSprites();
  jumpTheBall();
 
}

function jumpTheBall(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:25, y:305});
	}
}



