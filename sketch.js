
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 //create a monkey sprite
  monkey = createSprite(50,320,20,50);
  monkey.addAnimation("running", monkey_running); //setAnimation

  monkey.scale= 0.1;
  FoodGroup=new Group();
  obsticleGroup=new Group();
  
           
  
  
    
  
} 

  



function draw() {
  background("white")
  
  //create a ground
  ground=createSprite(300,380,600,20);
  ground.velocityX=-8;
  
  //Reset the ground
  if(ground.x<0)
    {
      ground.x=600;
    }
  if (keyDown("space") && monkey.y>150)
   {         
     monkey.velocityY = -15;
     
   }
     monkey.collide(ground);
  
      
  
  //Add gravity 
   monkey.velocityY = monkey. velocityY+ 1; 
  createbanana();
  createobstacle();
  drawSprites();
}
function createbanana()
{
  if(frameCount%70===0) // For all multiples of 50 
    {
  banana=createSprite(600,Math.round(random(150,300)));
  banana.addImage(bananaImage );
  banana.velocityX=-6;
      // for the trex to not go throught the clouds 
      monkey.depth=banana.depth+1;
      banana.scale=0.1;
      FoodGroup.add(banana)
      banana.lifetime=100;
    }
}
function createobstacle()
{
  if(frameCount%100===0) // For all multiples of 50 
    {
  obstacle=createSprite(600,360);
      obstacle.scale=0.2;
      switch(Math.round(random(1,6)))
        {
          case 1:obstacle.addImage(obstaceImage); break;
          case 2:obstacle.addImage(obstaceImage); break;
          case 3:obstacle.addImage(obstaceImage); break;
          case 4:obstacle.addImage(obstaceImage); break;
          case 5:obstacle.addImage(obstaceImage); break;
          case 6:obstacle.addImage(obstaceImage); break;
          default:break;
        }
  obstacle.velocityX=-8;
      obstacle.lifetime=75;
      
      
    }
}