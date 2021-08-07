 
var ship

function preload(){
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided" ,trex_collided);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
}

function setup(){
  createCanvas(400,400);
 spriteName.addImg(seaImg); 
}

function draw() {
  background("blue");
 //code to reset the background
 if (sea.x<0){
sea.x=sea.width/2;


 }
}