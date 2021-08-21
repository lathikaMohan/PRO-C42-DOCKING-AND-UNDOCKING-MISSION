var issImage,bgImage,spacecraft1Image,
spacecraft2Image,spacecraft3Image,
spacecraft4Image
var iss,spacecraft,hasDocked=false

function preload(){
  issImage=loadImage("iss.png")
  spacecraft1Image=loadImage("spacecraft1.png")
  spacecraft2Image=loadImage("spacecraft2.png")
  spacecraft3Image=loadImage("spacecraft3.png")
  spacecraft4Image=loadImage("spacecraft4.png")
  bgImage=loadImage("space.jpg")
}
function setup() {
  createCanvas(800,400);
  iss= createSprite(330, 130);
  iss.addImage(issImage);
  iss.scale=0.25;

  spacecraft=createSprite(285,240);
  spacecraft.addImage(spacecraft1Image);
  spacecraft.scale=0.15;
}

function draw() {
  background(bgImage);
  
  if( !hasDocked){
    spacecraft.x=spacecraft.x+Math.round(random(-1,1))

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3Image)
spacecraft.x=spacecraft.x-1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft4Image)
spacecraft.x=spacecraft.x+1
    }
    if(keyDown("UP_ARROW")){
      spacecraft.addImage(spacecraft1Image)
spacecraft.y=spacecraft.y-1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2Image)
spacecraft.y=spacecraft.y+1
    }
  }

  console.log("Trace 1"+spacecraft.y);
  console.log("Trace 2"+iss.y);
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked=true

    console.log("Inside the condition")
    stroke (0)
    fill ("White")
    text ("DOCKING SUCCESSFUL",450,250);
  }

  drawSprites();
}