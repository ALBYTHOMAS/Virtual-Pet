//Create variables here
var Dog,happyDog;
var foodS,foodStock,database
function preload()
{
  //load images here
  Dog=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300,50,50)
  dog.addImage(Dog)
  dog.scale=0.2;
  foodStock=database.ref("food")
  foodStock.on("value",readStock)
  
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  database.ref("/").update({
    food:x
  })
if(x<=0){
  x=0;
}else{
  x=x-1;
}
}

function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock("foods")
  dog.addImage(happyDog)
  }
  textSize(15);
fill("255")
  text("Note:Press UP_ARROW Key to feed Drago milk",150,200)
  drawSprites();
  //add styles here


}



