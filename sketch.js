var fixedRect,movingRect;
var ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(1200,800);

ob1=createSprite(200,100,50,50);
ob2=createSprite(200,200,50,50);
ob3=createSprite(200,300,50,50);
ob4=createSprite(200,400,50,50);
ob1.shapeColor="blue";
ob2.shapeColor="blue";
ob3.shapeColor="blue";
ob4.shapeColor="blue";
    ob3.velocityY=3;
    ob4.velocityY=-3;
  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor="green";
 
  movingRect.debug = true;
  fixedRect.debug = true;
  
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x);

  if(isTouching(movingRect,ob1))
{
  ob1.shapeColor="orange";
  movingRect.shapeColor="orange"
}
  bounceOff(ob3,ob4);
  drawSprites();
}

function isTouching(object1,object2)
{
if(object1.x-object2.x < object1.width/2 + object2.width/2
     && object1.x - object2.x < -(object1.width/2 + object2.width/2) 
     && object1.y - object2.y < object1.height/2 + object2.height/2 
     && object1.y - object2.y < -(object1.height/2 + object2.height/2)) 
  {
    return true;
  }
  else
  {
    return false;
  }

}

function bounceOff(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    ||object1.x - object2.x < -(object1.width/2 + object2.width/2))
    {
      object1.velocityX = (-1)*(object1.velocityX);
      object2.velocityX = (-1)*(object2.velocityX);
  }  
  

  if(object1.y - object2.y < object1.height/2 + object2.height/2 
    || object1.y - object2.y < -(object1.height/2 + object2.height/2)) 
  {
    object1.velocityY = (-1)*(object1.velocityY);
    object2.velocityY = (-1)*(object2.velocityY);
  }
}














































// movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  




  

