const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snake,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    snake = new Box(300,300,30,50);
    ground = new Ground(200,390,400,20);
}

function draw(){
    background(255);
    Engine.update(engine);
    snake.display();
    ground.display();
   
}
function keyPressed(){
snake.dir();
}