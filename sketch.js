//const { load } = require("./p5");

//Making constrained bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


// Variables
var back1,background
var gameState = 0;
var backgroundImg;
var allplayers

function preload(){

//back1=loadImage("./Background.jpg");

}

function setup(){
createCanvas(1000,1000);
fill("black");

}


function draw() {
  if(backgroundImg)
        background(backgroundImg);

    if(gameState === 0){
      form1 = new Form1()
      form1.display();
   // form.display()
    }


    if(playerCount === 1){
      game.update(1);
    }


    if(gameState === 1){
     // clear();
      //game.play();
      form2.display();
    }

 // text(mouseX + ',' + mouseY, 20, 15);
  //background("255,255,255"); 

  
 //image(back1,10,50,1000,1000);
  drawSprites();

}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }
}