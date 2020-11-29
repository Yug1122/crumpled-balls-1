
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,groundObject,side1,side2,side3;
var world;

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	paperObject = new paper(200,450,40);
	groundObject = new ground(width/2,670,width,20);

	side1 = createSprite(1200,650,200,20);
	side1.shapeColor = "white";

	side2 = createSprite(1100,610,20,100);
	side2.shapeColor = "white";

	side3 = createSprite(1300,610,20,100);
	side3.shapeColor = "white";
	//Create the Bodies Here.
    
    
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  groundObject.display();
  side1.display();
  side2.display();
  side3.display();
	 
 
  
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.positiom,{x:85,y:-85})
   
}

}  

