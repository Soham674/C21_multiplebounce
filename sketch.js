var obj2, obj1;
var obj3,obj4;
function setup() {
  createCanvas(1200,800);
  obj2 = createSprite(400, 100, 50, 80);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj1 = createSprite(400, 800,80,30);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj1.velocityY = -5;
  obj2.velocityY = +5;
  obj3 = createSprite(100,50,50,50);
  obj4 = createSprite(500,50,50,50);
  obj3.velocityX = 5;
  obj4.velocityX = -5;
}

function draw() {
  background(0,0,0);  
bounce(obj1,obj2);
bounce(obj3,obj4);
  drawSprites();
} 

function bounce(obj1,obj2) {
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
  obj1.velocityX = obj1.velocityX * (-1);
  obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
  obj1.velocityY = obj1.velocityY * (-1);
  obj2.velocityY = obj2.velocityY * (-1);
}
}