const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var engine,world
var ground;
var division;

function setup() {
  createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,595,480,5)

  for(var i = 1; i<560 ; i=i+80){
    divisions.push(new Divisions(i,500,5,300))
  }

 for(var j = 10; j<480 ; j= j+40){
    plinkos.push(new Plinko(j,50,10))
  }

  for(var j1 = 30; j1<=450 ; j1= j1+40){
    plinkos.push(new Plinko(j1,125,10))
  }

  for(var j2 = 10; j2<480 ; j2= j2+40){
    plinkos.push(new Plinko(j2,200,10))
  }

 for(var j3 = 30; j3<=450 ; j3= j3+40){
    plinkos.push(new Plinko(j3,275,10))
  }

 

}

function draw() {
  background(0);
  Engine.update(engine);  
  
  ground.display();

  for (var i=0;i<divisions.length;i++) {
    divisions[i].display();
  }

  for (var j=0;j<plinkos.length;j++) {
    plinkos[j].display();
  }

  if(frameCount%60 === 0){
    particles.push (new Particle(random(width/2-10,width/2+10),10,10))
  }


  for(var k = 0 ; k<particles.length ; k++){
    particles[k].display();
  }

  
  drawSprites();
}