var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);
 car =  createSprite(50, 200, 100, 50);
 wall = createSprite(1000,300,10,600);
 speed = random(55,90);
 weight = random(400,1500);
 car.shapeColor= "red";
wall.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  car.velocityX = 10;

if (wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation=0.5 * weight * speed* speed/22509;
  if (deformation>180)
  {
    car.shapeColor = "blue";
  }
  if (deformation = 180 && deformation>100){
    car.shapeColor = "brown";
  }
  if (deformation < 100){
    car.shapeColor="black";
  }
}




  drawSprites();
}