
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900,500);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	stick1=createSprite(685, 455, 100, 10 );
	stick1.shapeColor = color(255,255,255)
	stick2=createSprite(635, 430, 10, 50);
	stick2.shapeColor = color(255,255,255)
	stick3=createSprite(735, 430.5, 10, 50);
	stick3.shapeColor = color(255,255,255)

	groundSprite=createSprite(width/2, height -35, width,10);
	groundSprite.shapeColor=color(240,245,20)

	ground = Bodies.rectangle(width/2, 435, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 ball1 = new ball(150,height -55, 15)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ball1.display();
}

function keypressed()
{
if(keyCode === 38)
{
	Matter.Body.applyForce(ball1.body, ball1.body.position,{x:15 ,y:-15})
}
}

