var bg,bgImg;
var player, shooterImg, shooter_shooting;
var gamestate = 0

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

 buttonimg=loadImage("assets/button.png")
zombie = loadImage("assets/zombie.png")
entrance=loadImage("assets/entrance.jpg")
maze1img=loadImage("assets/maze1.jpg")
maze2=loadImage("assets/maze2.jpg")
maze3img=loadImage("assets/maze3.jpeg")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  button2 = createSprite(50,50)
      button2.addImage(buttonimg)
      button2.scale = 0.4
      button3 = createSprite(50,50)
      button3.addImage(buttonimg)
      button3.scale = 0.4
  //adding the background image
  if(gamestate === 0){
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage("0",entrance)
bg.addImage("1",maze1img)
bg.addImage("2",maze3img)
bg.scale = 1.1
button2.visible = false
button = createSprite(50,50)
button.addImage(buttonimg)
button.scale = 0.4}
//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 
  if(mousePressedOver(button)){
    gamestate = 1
     
    }
    if(gamestate === 1){
      bg.changeImage("1",maze1img)
      bg.scale=2
      button2.visible=true
    }
    if(mousePressedOver(button2)){
      gamestate = 2
       
      }
      if(gamestate === 2){
        bg.changeImage("2",maze3img)
        bg.scale=2
        button3.visible=true
      }



  //moving the player up and down and making the game mobile compatible using touches




//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
