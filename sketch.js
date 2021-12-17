var box
function setup() {
  createCanvas(400,400);
  box=createSprite(100,20,10,10)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW))
  {
    box.position.x=box.position.x+2
  }
  if(keyIsDown(LEFT_ARROW))
  {
    box.position.x=box.position.x-2
  }
drawSprites()
}




