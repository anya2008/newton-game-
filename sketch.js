const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;



function setup(){
    var canvas = createCanvas(1200,400);
    
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  
    ball = new ball(700,250,20,20)

    
    chain = new Chain(ball.body, ground.body)
                      
   
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ball.display();
    chain.display();
}
