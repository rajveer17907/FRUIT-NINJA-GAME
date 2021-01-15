var sword,swordImage;
var PLAY = 1;
var END = 0;
var gameState = 1;
var score = 0;
var fruit,fruitImage1,fruitImage2,fruitImage3,fruitImage4,fruitGroup;
var r;
var monster,monsterImage,enemyGroup;
var gameOver,gameover_Image;


function preload()
{
  swordImage = loadImage("sword.png");  
  fruitImage1 = loadImage("fruit1.png");
  fruitImage2 = loadImage("fruit2.png");
  fruitImage3 = loadImage("fruit3.png");
  fruitImage4 = loadImage("fruit4.png");
  monsterImage = loadImage("alien1.png");
  gameover_Image = loadImage("gameover.png");
  
 
 
}

function setup()
{
  createCanvas(600,600);
  sword = createSprite(70,200,20,20);
  sword.addImage(swordImage)
  sword.scale = 0.7;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
}

function draw()
{
  background("skyblue");
  
  if(fruitGroup.isTouching(sword))
  {
    fruitGroup.destroyEach();
    score = score + 2;
    
  }
  
  if(enemyGroup.isTouching(sword))
    {
      enemyGroup.destroyEach();
      gameState = END;
      
      
    }
 
  
  
  text("Score: "+ score,500,50);
  
  if(gameState === PLAY)
  {
    fruits();
    enemy();
    sword.x = World.mouseX;
    sword.y = World.mouseY;
    
    
    
  }
  
  if(gameState === END)
    {
      sword.destroy();
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      gameOver = createSprite(300,200,400,80);
      gameOver.addImage("gameover1223",gameover_Image);
      gameOver.scale = 2.5;
      
    }
  
  
  
   
  
   
  
 
  
  drawSprites();
  
}

function fruits()
{
  if(frameCount%80 === 0)
    {
     fruit = createSprite(600,200,20,20);
      fruit.scale = 0.2;
     
      
    r = Math.round(random(1,4))
    if(r == 1)
     {
        fruit.addImage(fruitImage1);
          
     }else if(r == 2)
     {
        fruit.addImage(fruitImage2);
            
     }else if(r == 3)
     {
        fruit.addImage(fruitImage3);
              
       }else if(r == 4)
     {
        fruit.addImage(fruitImage4);
                
     }
      
      fruit.y=Math.round(random(50,340));
      fruit.velocityX = -7;
      fruit.lifetime = 100;
      
      
      fruitGroup.add(fruit);
  
     }

  
  
}

  function enemy()
{
  if(World.frameCount%200===0)
  {
    monster = createSprite(600,200,20,20);
    monster.addImage("moving",monsterImage);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -8;
    
    
    enemyGroup.add(monster);
  }
  
}





