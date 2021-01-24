var a,b

function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 50, 100);
  a.shapeColor="white"
  b=createSprite(600,200,50,150)
  b.shapeColor="white"
}

function draw() {
  background("black");
  b.x=mouseX
  b.y=mouseY

  console.log(b.x-a.x)
  if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<b.width/2+a.width/2
    
    && a.y-b.y<a.height/2 + b.height/2 && b.y-a.y<b.height/2+a.height/2){


    b.shapeColor="red"
    a.shapeColor="red"
  }
  else{
b.shapeColor="white"
a.shapeColor="white"

  }

  
  



  drawSprites();
}