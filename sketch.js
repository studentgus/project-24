
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper = new Paper(200,450,20);
ground = new Ground(width/2,height-10,width,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.positionFileList,{x:60,y:-60});
		
	}
	
}


