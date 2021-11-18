var hhIMG
var vhIMG
var aliceIMG
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,cardboard23
function preload(){
hhIMG=loadImage("hh.png")
vhIMG=loadImage("vh.png")
aliceIMG=loadImage("alice.png")
alice1IMG=loadImage("aliceCopy.png")
coinIMG=loadImage("coin.png")
}
 
function setup(){
createCanvas (windowWidth,windowHeight)

 cardboard1 = createSprite((windowWidth/2-windowWidth/4),50,100,20);
cardboard1.addImage(hhIMG)
cardboard1.scale=0.35

 cardboard3 = createSprite(150,windowHeight/2.5,140,20);
cardboard3.addImage(hhIMG)
cardboard3.scale=0.35

 cardboard5 = createSprite(windowWidth/2,windowHeight/2+windowHeight/4,20,100);
 cardboard5.addImage(vhIMG)
cardboard5.scale=0.35

 cardboard6 = createSprite(windowWidth/3,windowHeight/2,20,100);
 cardboard6.addImage(vhIMG)
cardboard6.scale=0.35

 cardboard7 = createSprite(windowWidth/2+windowWidth/15,windowHeight/3,100,20);
 cardboard7.addImage(hhIMG)
 cardboard7.scale=0.35

 cardboard9 = createSprite(windowWidth/2+250,windowHeight/16,100,20);
 cardboard9.addImage(hhIMG)
cardboard9.scale=0.35

 cardboard10 = createSprite(windowWidth/2+windowWidth/4,(windowHeight/2+windowHeight/20),20,100);
 cardboard10.addImage(vhIMG)
cardboard10.scale=0.35

 cardboard11 = createSprite(windowWidth/2+windowWidth/6,windowHeight-50,100,20);
 cardboard11.addImage(hhIMG)
 cardboard11.scale=0.35
 

coin=createSprite(windowWidth-100,windowHeight-100)
coin.addImage(coinIMG)
coin.scale=0.25

 alice = createSprite(100,100);
alice.addImage(aliceIMG)
alice.scale=0.75

alice.debug=true
alice.setCollider("rectangle",0,-15,50,120)
cardboard1.debug=true
cardboard1.setCollider("rectangle",0,0,200,200)
cardboard3.debug=true
cardboard5.debug=true
cardboard6.debug=true
cardboard7.debug=true
cardboard9.debug=true
cardboard10.debug=true
cardboard11.debug=true
}

function draw(){

background("red")

alice.velocityX=0
alice.velocityY=0

if (keyDown("UP_ARROW")){
    alice.velocityX=0
    alice.velocityY=-5
   
   }
   if (keyDown("DOWN_ARROW")){
       alice.velocityX=0
       alice.velocityY=5
      
      }
   if (keyDown("RIGHT_ARROW")){
       alice.velocityX=5
       alice.velocityY=0
       alice.addImage(alice1IMG)
      }
   if (keyDown("LEFT_ARROW")){
       alice.velocityX=-5
       alice.velocityY=0
       alice.addImage(aliceIMG)
      }
      
      if (alice.isTouching(cardboard1)||alice.isTouching(cardboard3)||alice.isTouching(cardboard5)||alice.isTouching(cardboard6)||
      alice.isTouching(cardboard7)||alice.isTouching(cardboard9)||alice.isTouching(cardboard10)||alice.isTouching(cardboard11)){
          alice.x=20;
          alice.y=20;
          fill("black");
          textSize(70);
          text("you lose", 150, 200);
      
      }





    drawSprites()
}




