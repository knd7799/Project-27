
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ballOject1;
var ballObject2;
var ballObject3;
var ballObject4;
var ballObject5;

var roof1;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


/*function preload()
{
	
}*/

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  
  ballDiameter=40;

  startballPositionX=width/2; 
  startballPositionY=height/4+500;
  

    ballObject1=new ball(startballPositionX-ballDiameter*2,startballPositionY,ballDiameter);

    ballObject2=new ball(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
    
    ballObject3=new ball(startballPositionX,startballPositionY, ballDiameter);
    
    ballObject4=new ball(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
    
    ballObject5=new ball(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);

    roof1=new roof(width/2,height/4,width/7,20);

    rope1=new Rope(ballObject1.body,roof.body,-ballDiameter*2, 0);
    rope2=new Rope(ballObject2.body,roof.body,-ballDiameter*1, 0);
    rope3=new Rope(ballObject3.body,roof.body,0, 0);
    rope4=new Rope(ballObject4.body,roof.body,ballDiameter*1, 0);
    rope5=new Rope(ballObject5.body,roof.body,ballDiameter*2, 0);

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1600,
        height: 700,
        wireframes: false
      }
      })

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();

  roof1.display();

  rope1.display ();
  rope2.display ();
  rope3.display ();
  rope4.display ();
  rope5.display ();

  drawSprites();
 
}
function keyPressed (){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-50,y:-45});
  }
}
function drawLine (Constraint)
{
  ballBodyPosition=Constraint.bodyA.position
  roofBodyPosition=Constraint.bodyB.position

  roofBodyOffset=Constraint.pointB;

  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(ballBodyPosition.x, ballBodyPosition.y,roofBodyX,roofBodyY);

}



