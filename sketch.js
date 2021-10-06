
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(900,600,20,120);
	rightSide = new ground(1100,600,20,120);

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		friction: 0,
		density:1.2,
		restitution:0.5
	}

	ball = Bodies.circle(100,200,20,ball_options);
	World.add(world, ball);

	// rectMode(CENTER);
	 ellipseMode(RADIUS);
}


function draw() {
  background(0);

  Engine.update(engine);

   groundObj.show();
   leftSide.show();
   rightSide.show();
	ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

