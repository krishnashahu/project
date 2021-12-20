var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obs,obsImg
function preload(){
bgImg = loadImage("assets/bg.png")
obsImg = loadAnimation("assets/obsTop2.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

obs = createSprite(100,300,10,100);
obs.addAnimation("obs",obsImg);
obs.scale = 0.1;
obs.velocityX=-1

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            
          }

         
          balloon.velocityX = balloon.velocityY+2;

        balloon.collide(bottomGround)
        balloon.collide(topGround)
        
        if(keyDown("space")) {
          obs.velocityY= -6 ;
          obs.velocityX = balloon.velocityY+1;


          obs.collide(bottomGround)
        obs.collide(topGround)
          
        }


        drawSprites();
        
}
