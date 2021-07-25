var bg;
var runner;
var edges;
function preload(){
  //pre-load images
  pathImg = loadImage("road.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  bg = createSprite(200,200)
  bg.addImage(pathImg);
  bg.velocityY= 4;
  bg.scale = 1.35;
  
  edges = createEdgeSprites();

  runner = createSprite(200,200);
  runner.addAnimation("runner", runnerImg);
  runner.scale = 0.095;
}

function draw() {
  background(0);
  if(bg.y > 400){
    bg.y = height/2;
  } 
  runner.x = mouseX;
  runner.collide(edges[0]);
  runner.collide(edges[1]);
drawSprites();
}
