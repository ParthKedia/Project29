const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var block1,block2;
var block3,block4;
var block5,block6;
var block7,block8;
var block9,block10;
var block11,block12;
var block13,block14;


function setup() {
    var canvas = createCanvas(1200,400); 

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(200,height,200,20);
    ground2 = new Ground(700,height,200,20);

    block1 = new Box(230,230,30,40);
    block2 = new Box(260,230,30,40);
    block3 = new Box(290,230,30,40);
    block4 = new Box(320,230,30,40);

    block5 = new Box(260,220,30,40);
    block6 = new Box(290,220,30,40);

    block7 = new Box(275,210,30,40);

    block8 = new Box(730,230,30,40);
    block9 = new Box(760,230,30,40);
    block10 = new Box(790,230,30,40);
    block11 = new Box(820,230,30,40);

    block12 = new Box(760,220,30,40);
    block13 = new Box(790,220,30,40);

    block14 = new Box(775,210,30,40);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    strokeWeight(2);
    text("Drag the hexagon and release it to launch at the blocks",100,100);
    ground1.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
}