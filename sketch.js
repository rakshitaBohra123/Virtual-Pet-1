//Create variables here
var dog,Happydog;
var foodS,foodStock;
var database;

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  HappydogImage=loadImage("images/dogImg1.png");
}

function setup() {
 canvas=createCanvas(1000, 1000);
  dog=createSprite(500,500,5,5);
  dog.addImage(dogImage);

  database=firebase.database();

foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);

if(keyDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(HappydogImage);
}



  drawSprites();
  //add styles here
textSize(20);
fill("red");
stroke("brown");
text(foodStock,980,980);
text("Note:Press UP ARROW to feed you Pet with milk",250,497);
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}
else{
  x=x-1
}


  database.ref('/').update({
  Food:x
})


}
