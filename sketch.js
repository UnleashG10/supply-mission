var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(180)


	engine = Engine.create();
	world = engine.world;

	var p_options = {restitution:1, isStatic:false}


	packageBody = Bodies.circle(width/2 , 260 , 5 , p_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,20);

  ellipseMode(RADIUS);
  ellipse(packageBody.position.x, packageBody.position.y, 10, 10);


    packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === l) {
   
    packageBody = {isStatic : false}
  }
}



