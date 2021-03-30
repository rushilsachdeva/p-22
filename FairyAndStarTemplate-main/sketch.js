var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
    fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    bgImg = loadImage("images/starNight.png");
    fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
    createCanvas(800, 650);

    // fairyVoice.play();

    fairy = createSprite(130, 480);
    fairy.addAnimation("fairyflying",fairyImg);  
    fairy.scale =0.25;

    star = createSprite(650,30);
    star.addImage(starImg);
    star.scale = 0.2;

    engine = Engine.create();
    world = engine.world;

    starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
    World.add(world, starBody);
    
    Engine.run(engine);

}


function draw() {
  background(bgImg);
  fairyVoice.play();

  star.y = starBody.position.y;

if (keyDown("left")){
    fairy.x=fairy.x-3;
 }

if (keyDown("right")){
    fairy.x=fairy.x+3;
 }

if (starBody.position.y > 470 && fairy.x > 300){
    Matter.Body.setPosition(starBody,true);
}

    fairy.debug = true;
    fairy.setCollider("rectangle",5,5,100,10);  

  drawSprites();

}

function keyPressed() {
    //write code here

 if (keyCode===DOWN_ARROW){
    Matter.Body.setStatic(starBody, false);
}
}



