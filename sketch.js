const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine,world;
var canvas;
var drops=[];
var maxDrops;
var Bruce;
var img1;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
    img1 = loadAnimation('images/Walking Frame/walking_1.png','images/Walking Frame/walking_2.png','images/Walking Frame/walking_3.png','images/Walking Frame/walking_4.png','images/Walking Frame/walking_5.png','images/Walking Frame/walking_6.png','images/Walking Frame/walking_7.png','images/Walking Frame/walking_8.png');
    thunder1 = loadImage('images/thunderbolt/1.png')
    thunder2 = loadImage('images/thunderbolt/2.png')
    thunder3 = loadImage('images/thunderbolt/3.png')
    thunder4 = loadImage('images/thunderbolt/4.png')
}

function setup(){

    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    Bruce = createSprite(200,270,30,20);
    Bruce.addAnimation('Animation',img1);
    Bruce.scale = 0.4;

    maxDrops = 100;

    umbrella = new Paper2(200,170,40);

    for(var i = 0;i<maxDrops;i++){
        drops.push(new Paper());
    }
}

function draw(){
    background(0,0,0);

    Engine.update(engine);

    spawnThunder();

    for(var k=0;k<drops.length;k++){
        drops[k].reset();
    }
    
    for(var j=0;j<drops.length;j++){
        drops[j].display();
    }

    umbrella.display();
    
    drawSprites();
}   

function spawnThunder(){
    if(frameCount%300===0){
      var thunder = createSprite(random(0,400),20,20,20);
      var rand = Math.round(random(1,4));
      switch(rand){
        case 1:thunder.addImage(thunder1);
          break;
        case 2:thunder.addImage(thunder2);
          break;
        case 3:thunder.addImage(thunder3);
          break;
        case 4:thunder.addImage(thunder4);
          break;
          default:break;
      }
      thunder.lifetime = 30;
      thunder.scale = 0.5
    }
}  

