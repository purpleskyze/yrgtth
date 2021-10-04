var trackImg;
var runnerAnimation;


function preload(){
  //pre-load images
  trackImg = loadImage("path.png");

  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  track = createSprite(180,200,0,15);
  track.addImage(trackImg);
  track.velocityY = 4;
  track.scale = 1.2;

  runner = createSprite(200,350,15,15);
  runner.addAnimation("running", runnerAnimation);
  runner.scale = 0.07;

  invisibleBoundaryRIGHT = createSprite(350,200,15,400);
  invisibleBoundaryRIGHT.visible = false;

  invisibleBoundaryLEFT = createSprite(18,200,15,400);
  invisibleBoundaryLEFT.visible = false;
}

function draw() {
  background("white");

  if(track.y > 400) {
    track.y = height/2;
  }

  runner.x = mouseX;
  runner.collide(invisibleBoundaryRIGHT);
  runner.collide(invisibleBoundaryLEFT);

  drawSprites();
}
