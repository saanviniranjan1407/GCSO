var car, wall;
var speed, weight;

function setup() {
  createCanvas(1366,400);
  
  car = createSprite(100,200,30,30);
  wall = createSprite(1236,200,60,height/2);

  car.depth = wall.depth;
  car.depth = car.depth + 1;

  speed = random(45,60);
  weight = random(1500,3000);
}

function draw() {
  background("black");  
  drawSprites();

  car.velocityX = speed;

  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;

    var deformation = (0.5*weight*speed*speed)/22500;
    if(deformation < 100){
      car.shapeColor = "green";
    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
  }
}