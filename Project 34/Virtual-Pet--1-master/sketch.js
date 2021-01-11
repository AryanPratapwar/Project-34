//Create variables here
var dog,dog1,happyDog,Database,foodS,foodStock;

function preload()
{
dog1.loadImage("Dog.png",normalDog);
happyDog.loadImage("happydog.png",happpyDog);

	//load images here
}

function setup() {
	createCanvas(500, 500);
  foodStock= Database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
backGround(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  text(value,100,100);


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  Database.ref('/').update({
    Food:x
  })
  
}
