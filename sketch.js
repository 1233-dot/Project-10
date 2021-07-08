var spriteName

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  preload()
}

function draw() {
  background("blue");
  drawSprites();

  spriteName.addImage(seaImg);
  seaImg.velocityX = 2
}

