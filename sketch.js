
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var bola;
var solo;
var parede2;
var parede1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.



  
var propriedadesdabola= {
	restitution:0.3,
	isStatic:false,
	density:1.2



}
var propriedadesdosolo={

isStatic:true

}
var propriedadesdaparede2={

	isStatic:true
}
var propriedadesdaparede1={

	isStatic:true
}
parede1=Bodies.rectangle(1350,600,20,120,propriedadesdaparede1);
parede2=Bodies.rectangle(1100,600,20,120,propriedadesdaparede2);
solo=Bodies.rectangle(width/2,670,width,20,propriedadesdosolo);
bola=Bodies.circle(400,350,20,propriedadesdabola);
World.add(world,parede1);
World.add(world,parede2);
World.add(world,solo);
World.add(world,bola);
ellipseMode(RADIUS);
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  ellipse(bola.position.x,bola.position.y,20);

rect(solo.position.x,solo.position.y,width,20);

rect(parede2.position.x,parede2.position.y,20,120);

rect(parede1.position.x,parede1.position.y,20,120);

}


function keyPressed(){
if(keyCode==UP_ARROW){
	Matter.Body.applyForce(bola,bola.position,{x:50,y:-50});
}

}
