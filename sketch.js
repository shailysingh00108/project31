var Engine = Matter.Engine;
World= Matter.World;
Events=Matter.Events;
Bodies = Matter.Bodies;

// var engine, world;
// var ground1;

var particles = [];
 var plinkos = [];
 var divisions = [];
 
 var divisionHeight = 300;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;


  ground1 = new Ground(width/2,height,width,20);
  for (var k = 0; k <= width; k = k + 80 )
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight ));
  }

  for(var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new plinko(j,75));
  }

  for(var j = 15; j <= width-10; j = j + 50 )
  {
    plinkos.push(new plinko(j,175));
  }

  for(var j = 40; j <= width; j = j +50)
  {
    plinkos.push(new plinko(j,275));
  }

  for(var j = 15; j <= width-10; j = j + 50)
  {
    plinkos.push(new plinko(j,375));
  }

 

}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine); 
  ground1.display();
  
  if(frameCount%90 === 0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j = 0; j< particles.length; j++)
  {
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; j++)
  {
   divisions[k].dispaly();
  }

  for(var l = 0; l <plinkos.length; l++ )
  {
    plinkos[l].display();
  }

}