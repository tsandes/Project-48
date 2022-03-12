var plane
var planeimg

var back
var touch

var points

var bullet1
var bulletimg1
var bullet2
var bulletimg2
var bullet3
var bulletimg3
var bullet4
var bulletimg4
var bullet5
var bulletimg5
var bullet6
var bulletimg6
var bullet7
var bulletimg7
var bullet8
var bulletimg8
var bullet9
var bulletimg9
var bullet10
var bulletimg10
var bullet11
var bulletimg11
var bullet12
var bulletimg12
var bullet13
var bulletimg13
var bullet14
var bulletimg14
var bullet15
var bulletimg15
var bulletnum=15
var bulletCurrent=1


var alien1
var alienimg1
var alien2
var alienimg2
var alien3
var alienimg3
var alien4
var alienimg4
var alien5
var alienimg5
var alien6
var alienimg6
var alien7
var alienimg7
var alien8
var alienimg8
var alien9
var alienimg9
var alien10
var alienimg10

var score=0

var title
var titleimg
var gameover
var gameoverimg
var crashing


function preload() {
  gameoverimg=loadImage("Game Over.png")
  planeimg=loadImage("Plane.png")
  back=loadImage("background.png")
  crashing=loadAnimation("Alien.png","crash3.png")

  bulletimg1=loadImage("bullet.png")
  bulletimg2=loadImage("bullet.png")
  bulletimg3=loadImage("bullet.png")
  bulletimg4=loadImage("bullet.png")
  bulletimg5=loadImage("bullet.png")
  bulletimg6=loadImage("bullet.png")
  bulletimg7=loadImage("bullet.png")
  bulletimg8=loadImage("bullet.png")
  bulletimg9=loadImage("bullet.png")
  bulletimg10=loadImage("bullet.png")
  bulletimg11=loadImage("bullet.png")
  bulletimg12=loadImage("bullet.png")
  bulletimg13=loadImage("bullet.png")
  bulletimg14=loadImage("bullet.png")
  bulletimg15=loadImage("bullet.png")
  
  alienimg1=loadImage("Alien.png")
  alienimg2=loadImage("Alien.png")
  alienimg3=loadImage("Alien.png")
  alienimg4=loadImage("Alien.png")
  alienimg5=loadImage("Alien.png")
  alienimg6=loadImage("Alien.png")
  alienimg7=loadImage("Alien.png")
  alienimg8=loadImage("Alien.png")
  alienimg9=loadImage("Alien.png")
  alienimg10=loadImage("Alien.png")
}

function setup() {
 createCanvas(800,550);
 
 gameover=createSprite(400, 350, 50, 50);
 gameover.addImage(gameoverimg)
 gameover.scale=0.3
 gameover.visible=false

 touch=createSprite(50,530,8000)
 touch.visible=false

 plane=createSprite(400, 490, 50, 50);
 plane.addImage(planeimg)
 plane.scale=0.35
 plane.visible=true

 bullet1=createSprite(1000,plane.y-50,50,50)
 bullet1.addImage(bulletimg2)
 bullet1.scale=0.3
 bullet1.visible=false

 bullet2=createSprite(plane.x,plane.y-50,50,50)
 bullet2.addImage(bulletimg3)
 bullet2.scale=0.3
 bullet2.visible=false

 bullet3=createSprite(plane.x,plane.y-50,50,50)
 bullet3.addImage(bulletimg4)
 bullet3.scale=0.3
 bullet3.visible=false

 bullet4=createSprite(plane.x,plane.y-50,50,50)
 bullet4.addImage(bulletimg5)
 bullet4.scale=0.3
 bullet4.visible=false

 bullet5=createSprite(plane.x,plane.y-50,50,50)
 bullet5.addImage(bulletimg6)
 bullet5.scale=0.3
 bullet5.visible=false

 bullet6=createSprite(plane.x,plane.y-50,50,50)
 bullet6.addImage(bulletimg7)
 bullet6.scale=0.3
 bullet6.visible=false

 bullet7=createSprite(plane.x,plane.y-50,50,50)
 bullet7.addImage(bulletimg8)
 bullet7.scale=0.3
 bullet7.visible=false

 bullet8=createSprite(plane.x,plane.y-50,50,50)
 bullet8.addImage(bulletimg9)
 bullet8.scale=0.3
 bullet8.visible=false

 bullet9=createSprite(plane.x,plane.y-50,50,50)
 bullet9.addImage(bulletimg10)
 bullet9.scale=0.3
 bullet9.visible=false

 bullet10=createSprite(plane.x,plane.y-50,50,50)
 bullet10.addImage(bulletimg11)
 bullet10.scale=0.3 
 bullet10.visible=false

 bullet11=createSprite(plane.x,plane.y-50,50,50)
 bullet11.addImage(bulletimg12)
 bullet11.scale=0.3 
 bullet11.visible=false


 bullet12=createSprite(plane.x,plane.y-50,50,50)
 bullet12.addImage(bulletimg13)
 bullet12.scale=0.3 
 bullet12.visible=false


 bullet13=createSprite(plane.x,plane.y-50,50,50)
 bullet13.addImage(bulletimg14)
 bullet13.scale=0.3 
 bullet13.visible=false


 bullet14=createSprite(plane.x,plane.y-50,50,50)
 bullet14.addImage(bulletimg15)
 bullet14.scale=0.3 
 bullet14.visible=false

 bullet15=createSprite(plane.x,plane.y-50,50,50)
 bullet15.addImage(bulletimg1)
 bullet15.scale=0.3 
 bullet15.visible=false


 alien1=createSprite(50,50, 50, 50)
 alien1.addImage(alienimg1)
 alien1.scale=0.5
 alien1.velocityY=0.9
 alien1.addAnimation("crash",crashing)

 alien2=createSprite(130,50, 50, 50)
 alien2.addImage(alienimg2)
 alien2.scale=0.5
 alien2.velocityY=0.9
 alien2.addAnimation("crash",crashing)

 alien3=createSprite(210, 50, 50, 50)
 alien3.addImage(alienimg3)
 alien3.scale=0.5
 alien3.velocityY=0.9
 alien3.addAnimation("crash",crashing)

 alien4=createSprite(290,50, 50, 50)
 alien4.addImage(alienimg4)
 alien4.scale=0.5
 alien4.velocityY=0.9
 alien4.addAnimation("crash",crashing)

 alien5=createSprite(370,50, 50, 50)
 alien5.addImage(alienimg5)
 alien5.scale=0.5
 alien5.velocityY=0.9
 alien5.addAnimation("crash",crashing)

 alien6=createSprite(450,50, 50, 50)
 alien6.addImage(alienimg6)
 alien6.scale=0.5
 alien6.velocityY=0.9
 alien6.addAnimation("crash",crashing)

 alien7=createSprite(530,50, 50, 50)
 alien7.addImage(alienimg7)
 alien7.scale=0.5
 alien7.velocityY=0.9
 alien7.addAnimation("crash",crashing)

 alien8=createSprite(610,50, 50, 50)
 alien8.addImage(alienimg8)
 alien8.scale=0.5
 alien8.velocityY=0.9
 alien8.addAnimation("crash",crashing)

 alien9=createSprite(690,50, 50, 50)
 alien9.addImage(alienimg9)
 alien9.scale=0.5
 alien9.velocityY=0.9
 alien9.addAnimation("crash",crashing)

 alien10=createSprite(770,50, 50, 50)
 alien10.addImage(alienimg10)
 alien10.scale=0.5
 alien10.velocityY=0.9
 alien10.addAnimation("crash",crashing)
}

function draw() {
 background(0);
 image(back,0,0,800,550)
 //gameOver()
 moveShoot()
 aliensTouching()
 aliensHit()
 textSize(20)
 fill('white')
 text("Number Of Bullets:"+round(bulletnum),10,40)
 text('Score:'+score,10,20)
 drawSprites();
}

function moveShoot() {
 if (keyIsDown(LEFT_ARROW)) {
   plane.x-=5
 }
     
  if (keyIsDown(RIGHT_ARROW)) {
   plane.x+=5
  }
  
  if (keyCode===32) {
    if (bulletCurrent=1 && bulletnum>0) {
      bulletnum-=0.5
      bullet1.visible=true
      bullet1.x=plane.x
      bullet1.y=plane.y-50
      bullet1.velocityY-=3
      bulletCurrent+=1
      keyCode=0
      
     }else if(bulletCurrent=2 && bulletnum>2){
      bulletnum-=0.5
      bullet2.visible=true
      bullet2.x=plane.x
      bullet2.y=plane.y-50
      bullet2.velocityY-=3
      bulletCurrent+=1
      keyCode=0
     }else if (bulletCurrent=3 && bulletnum>3) {
      bulletnum-=0.5
      bullet3.visible=true
      bullet3.x=plane.x
      bullet3.y=plane.y-50
      bullet3.velocityY-=3
      bulletCurrent+=1
      keyCode=0 
      
     } else if (bulletCurrent=4 && bulletnum>4) {
      bulletnum-=0.5
      bullet4.visible=true
      bullet4.x=plane.x
      bullet4.y=plane.y-50
      bullet4.velocityY-=3
      bulletCurrent+=1
      keyCode=0 
      
     } else if(bulletCurrent=5&& bulletnum>5) {
      bulletnum-=0.5
      bullet5.visible=true
      bullet5.x=plane.x
      bullet5.y=plane.y-50
      bullet5.velocityY-=3
      bulletCurrent+=1
      keyCode=0 
      
     } else if (bulletCurrent=6 && bulletnum>6) {
      bulletnum-=0.5
      bullet6.visible=true
      bullet6.x=plane.x
      bullet6.y=plane.y-50
      bullet6.velocityY-=3
      bulletCurrent+=1
      keyCode=0 
      
     } else if (bulletCurrent=7 && bulletnum>7) {
      bulletnum-=0.5
      bullet7.visible=true
      bullet7.x=plane.x
      bullet7.y=plane.y-50
      bullet7.velocityY-=3
      bulletCurrent+=1
      keyCode=0 
       
     } else if (bulletCurrent=8 && bulletnum>8) {
      bulletnum-=0.5
      bullet8.visible=true
      bullet8.x=plane.x
      bullet8.y=plane.y-50
      bullet8.veloctyY-=3
      bulletCurrent+=1
      keyCode=0 
       
     } else if (bulletCurrent=9 && bulletnum>9) {
      bulletnum-=0.5
      bullet9.visible=true
      bullet9.x=plane.x
      bullet9.y=plane.y-50
      bullet9.velocityY-=3
      bulletCurrent+=1
      keyCode=0 
       
      } else if (bulletCurrent=10 && bulletnum>10) {
        bulletnum-=0.5
      bullet10.visible=true
      bullet10.x=plane.x
      bullet10.y=plane.y-50
      bullet10.velocityY-=3
      bulletCurrent+=1
      keyCode=0 
    
    }else if (bulletCurrent=11 && bulletnum>11) {
      bulletnum-=0.5
    bullet11.visible=true
    bullet11.x=plane.x
    bullet11.y=plane.y-50
    bullet11.velocityY-=3
    bulletCurrent+=1
    keyCode=0 
  
  }else if (bulletCurrent=12 && bulletnum>12) {
    bulletnum-=0.5
  bullet12.visible=true
  bullet12.x=plane.x
  bullet12.y=plane.y-50
  bullet12.velocityY-=3
  bulletCurrent+=1
  keyCode=0 

}else if (bulletCurrent=13 && bulletnum>13) {
  bulletnum-=0.5
bullet13.visible=true
bullet13.x=plane.x
bullet13.y=plane.y-50
bullet13.velocityY-=3
bulletCurrent+=1
keyCode=0 

}else if (bulletCurrent=14 && bulletnum>14) {
  bulletnum-=0.5
bullet14.visible=true
bullet14.x=plane.x
bullet14.y=plane.y-50
bullet14.velocityY-=3
bulletCurrent+=1
keyCode=0 

}else if (bulletCurrent=15 && bulletnum>15) {
  bulletnum-=0.5
bullet15.visible=true
bullet15.x=plane.x
bullet15.y=plane.y-50
bullet15.velocityY-=3
bulletCurrent=bulletCurrent-1
keyCode=0 
}
    
  }
} 

function aliensHit() {
  // Bullet 1

  if (bullet1.isTouching(alien1)) {
    bullet1.visible=false
    alien1.y=900
    score+=5

  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.y=900
    score+=5
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.y=900
    score+=5
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.y=900
    score+=5
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.y=900
    score+=5
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.y=900
    score+=5
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.y=900
    score+=5
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.y=900
    score+=5
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.y=900
    score+=5
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.y=900
    score+=5
  }

  // Bullet 2

  if (bullet2.isTouching(alien1)) {
    bullet2.visible=false
    alien1.y=900
    score+=5
  }
  if (bullet2.isTouching(alien2)) {
    bullet2.visible=false
    alien2.y=900
  }

  if (bullet2.isTouching(alien3)) {
    bullet2.visible=false
    alien3.y=900
    score+=5
  }
  
  if (bullet2.isTouching(alien4)) {
    bullet2.visible=false
    alien4.y=900
    score+=5
  }

  if (bullet2.isTouching(alien5)) {
    bullet2.visible=false
    alien5.y=900
    score+=5
  }

  if (bullet2.isTouching(alien6)) {
    bullet2.visible=false
    alien6.y=900
    score+=5
  }

  if (bullet2.isTouching(alien7)) {
    bullet2.visible=false
    alien7.y=900
    score+=5
  }

  if (bullet2.isTouching(alien8)) {
    bullet2.visible=false
    alien8.y=900
    score+=5
  }

  if (bullet2.isTouching(alien9)) {
    bullet2.visible=false
    alien9.y=900
    score+=5
  }

   if (bullet2.isTouching(alien10)) {
    bullet2.visible=false
    alien10.y=900
    score+=5
  }

  // Bullet 3

  if (bullet3.isTouching(alien1)) {
    bullet3.visible=false
    alien1.y=900
    score+=5
  }
  if (bullet3.isTouching(alien2)) {
    bullet3.visible=false
    alien2.y=900
    score+=5
  }

  if (bullet3.isTouching(alien3)) {
    bullet3.visible=false
    alien3.y=900
    score+=5
  }
  
  if (bullet3.isTouching(alien4)) {
    bullet3.visible=false
    alien4.y=900
    score+=5
  }

  if (bullet3.isTouching(alien5)) {
    bullet3.visible=false
    alien5.y=900
    score+=5
  }

  if (bullet3.isTouching(alien6)) {
    bullet3.visible=false
    alien6.y=900
    score+=5
  }

  if (bullet3.isTouching(alien7)) {
    bullet3.visible=false
    alien7.y=900
    score+=5
  }

  if (bullet3.isTouching(alien8)) {
    bullet3.visible=false
    alien8.y=900
    score+=5
  }

  if (bullet3.isTouching(alien9)) {
    bullet3.visible=false
    alien9.y=900
    score+=5
  }

  if (bullet3.isTouching(alien10)) {
    bullet3.visible=false
    alien10.y=900
    score+=5
  }

  // Bullet 4

  if (bullet4.isTouching(alien1)) {
    bullet4.visible=false
    alien1.y=900
    score+=5
  }
  if (bullet4.isTouching(alien2)) {
    bullet4.visible=false
    alien2.y=900
    score+=5
  }

  if (bullet4.isTouching(alien3)) {
    bullet4.visible=false
    alien3.y=900
    score+=5
  }
  
  if (bullet4.isTouching(alien4)) {
    bullet4.visible=false
    alien4.y=900
    score+=5
  }

  if (bullet4.isTouching(alien5)) {
    bullet4.visible=false
    alien5.y=900
    score+=5
  }

  if (bullet4.isTouching(alien6)) {
    bullet4.visible=false
    alien6.y=900
    score+=5
  }

  if (bullet4.isTouching(alien7)) {
    bullet4.visible=false
    alien7.y=900
    score+=5
  }

  if (bullet4.isTouching(alien8)) {
    bullet4.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet4.isTouching(alien9)) {
    bullet4.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet4.isTouching(alien10)) {
    bullet4.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 5

  if (bullet5.isTouching(alien1)) {
    bullet5.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet5.isTouching(alien2)) {
    bullet5.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet5.isTouching(alien3)) {
    bullet5.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet5.isTouching(alien4)) {
    bullet5.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet5.isTouching(alien5)) {
    bullet5.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet5.isTouching(alien6)) {
    bullet5.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet5.isTouching(alien7)) {
    bullet5.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet5.isTouching(alien8)) {
    bullet5.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet5.isTouching(alien9)) {
    bullet5.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet5.isTouching(alien10)) {
    bullet5.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 6

  if (bullet6.isTouching(alien1)) {
    bullet6.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet6.isTouching(alien2)) {
    bullet6.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet6.isTouching(alien3)) {
    bullet6.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet6.isTouching(alien4)) {
    bullet6.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet6.isTouching(alien5)) {
    bullet6.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet6.isTouching(alien6)) {
    bullet6.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet6.isTouching(alien7)) {
    bullet6.visible=false
    aline7.y=900
  }

  if (bullet6.isTouching(alien8)) {
    bullet6.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet6.isTouching(alien9)) {
    bullet6.visible=false
    aline9.y=900
    score+=5
  }
[]
  if (bullet6.isTouching(alien10)) {
    bullet6.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 7

  if (bullet7.isTouching(alien1)) {
    bullet7.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet7.isTouching(alien2)) {
    bullet7.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet7.isTouching(alien3)) {
    bullet7.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet7.isTouching(alien4)) {
    bullet7.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet7.isTouching(alien5)) {
    bullet7.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet7.isTouching(alien6)) {
    bullet7.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet7.isTouching(alien7)) {
    bullet7.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet7.isTouching(alien8)) {
    bullet7.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet7.isTouching(alien9)) {
    bullet7.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet7.isTouching(alien10)) {
    bullet7.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 8

  if (bullet8.isTouching(alien1)) {
    bullet8.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet8.isTouching(alien2)) {
    bullet8.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet8.isTouching(alien3)) {
    bullet8.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet8.isTouching(alien4)) {
    bullet8.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet8.isTouching(alien5)) {
    bullet8.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet8.isTouching(alien6)) {
    bullet8.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet8.isTouching(alien7)) {
    bullet8.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet8.isTouching(alien8)) {
    bullet8.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet8.isTouching(alien9)) {
    bullet8.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet8.isTouching(alien10)) {
    bullet8.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 9

  if (bullet9.isTouching(alien1)) {
    bullet9.visible=false
    aline1.y=900
    score+=5
    
  }
  if (bullet9.isTouching(alien2)) {
    bullet9.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet9.isTouching(alien3)) {
    bullet9.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet9.isTouching(alien4)) {
    bullet9.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet9.isTouching(alien5)) {
    bullet9.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet9.isTouching(alien6)) {
    bullet9.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet9.isTouching(alien7)) {
    bullet9.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet9.isTouching(alien8)) {
    bullet9.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet9.isTouching(alien9)) {
    bullet9.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet9.isTouching(alien10)) {
    bullet9.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 10

  if (bullet10.isTouching(alien1)) {
    bullet10.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet10.isTouching(alien2)) {
    bullet10.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet10.isTouching(alien3)) {
    bullet10.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet10.isTouching(alien4)) {
    bullet10.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet10.isTouching(alien5)) {
    bullet10.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet10.isTouching(alien6)) {
    bullet10.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet10.isTouching(alien7)) {
    bullet10.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet10.isTouching(alien8)) {
    bullet10.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet10.isTouching(alien9)) {
    bullet10.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet10.isTouching(alien10)) {
    bullet10.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 10

  if (bullet10.isTouching(alien1)) {
    bullet10.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet10.isTouching(alien2)) {
    bullet10.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet10.isTouching(alien3)) {
    bullet10.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet10.isTouching(alien4)) {
    bullet10.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet10.isTouching(alien5)) {
    bullet10.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet10.isTouching(alien6)) {
    bullet10.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet10.isTouching(alien7)) {
    bullet10.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet10.isTouching(alien8)) {
    bullet10.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet10.isTouching(alien9)) {
    bullet10.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet10.isTouching(alien10)) {
    bullet10.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 11

  if (bullet11.isTouching(alien1)) {
    bullet11.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet11.isTouching(alien2)) {
    bullet11.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet11.isTouching(alien3)) {
    bullet11.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet11.isTouching(alien4)) {
    bullet11.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet11.isTouching(alien5)) {
    bullet11.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet11.isTouching(alien6)) {
    bullet11.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet11.isTouching(alien7)) {
    bullet11.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet11.isTouching(alien8)) {
    bullet11.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet11.isTouching(alien9)) {
    bullet11.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet11.isTouching(alien10)) {
    bullet11.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 12

  if (bullet12.isTouching(alien1)) {
    bullet12.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet12.isTouching(alien2)) {
    bullet12.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet12.isTouching(alien3)) {
    bullet12.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet12.isTouching(alien4)) {
    bullet12.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet12.isTouching(alien5)) {
    bullet12.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet12.isTouching(alien6)) {
    bullet12.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet12.isTouching(alien7)) {
    bullet12.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet12.isTouching(alien8)) {
    bullet12.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet12.isTouching(alien9)) {
    bullet12.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet12.isTouching(alien10)) {
    bullet12.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 13

  if (bullet13.isTouching(alien1)) {
    bullet13.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet13.isTouching(alien2)) {
    bullet13.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet13.isTouching(alien3)) {
    bullet13.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet13.isTouching(alien4)) {
    bullet13.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet13.isTouching(alien5)) {
    bullet13.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet13.isTouching(alien6)) {
    bullet13.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet13.isTouching(alien7)) {
    bullet13.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet13.isTouching(alien8)) {
    bullet13.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet13.isTouching(alien9)) {
    bullet13.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet13.isTouching(alien10)) {
    bullet13.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 14

  if (bullet14.isTouching(alien1)) {
    bullet14.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet14.isTouching(alien2)) {
    bullet14.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet14.isTouching(alien3)) {
    bullet14.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet14.isTouching(alien4)) {
    bullet14.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet14.isTouching(alien5)) {
    bullet14.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet14.isTouching(alien6)) {
    bullet14.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet14.isTouching(alien7)) {
    bullet14.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet14.isTouching(alien8)) {
    bullet14.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet14.isTouching(alien9)) {
    bullet14.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet14.isTouching(alien10)) {
    bullet14.visible=false
    aline10.y=900
    score+=5
  }

  // Bullet 15

  if (bullet15.isTouching(alien1)) {
    bullet15.visible=false
    aline1.y=900
    score+=5
  }
  if (bullet15.isTouching(alien2)) {
    bullet15.visible=false
    aline2.y=900
    score+=5
  }

  if (bullet15.isTouching(alien3)) {
    bullet15.visible=false
    aline3.y=900
    score+=5
  }
  
  if (bullet15.isTouching(alien4)) {
    bullet15.visible=false
    aline4.y=900
    score+=5
  }

  if (bullet15.isTouching(alien5)) {
    bullet15.visible=false
    aline5.y=900
    score+=5
  }

  if (bullet15.isTouching(alien6)) {
    bullet15.visible=false
    aline6.y=900
    score+=5
  }

  if (bullet15.isTouching(alien7)) {
    bullet15.visible=false
    aline7.y=900
    score+=5
  }

  if (bullet15.isTouching(alien8)) {
    bullet15.visible=false
    aline8.y=900
    score+=5
  }

  if (bullet15.isTouching(alien9)) {
    bullet15.visible=false
    aline9.y=900
    score+=5
  }

  if (bullet15.isTouching(alien10)) {
    bullet15.visible=false
    aline10.y=900
    score+=5
  }
  
}

function aliensTouching () {

 if (alien1.isTouching(touch)) {
  console.log("Game Over")
  alien1.visible=false
  gameOver()
 }
 if (alien2.isTouching(touch)) {
  console.log("Game Over")
  alien2.visible=false
  gameOver()
 }
 if (alien3.isTouching(touch)) {
  console.log("Game Over")
  alien3.visible=false
  gameOver()
 }
 if (alien4.isTouching(touch)) {
  console.log("Game Over")
  alien4.visible=false
  gameOver()
 }
 if (alien5.isTouching(touch)) {
  console.log("Game Over")
  alien5.visible=false
  gameOver()
 }
 if (alien6.isTouching(touch)) {
  console.log("Game Over")
  alien6.visible=false
  gameOver()
 }
 if (alien7.isTouching(touch)) {
  console.log("Game Over")
  alien7.visible=false
  gameOver()
 }
 if (alien8.isTouching(touch)) {
  console.log("Game Over")
  alien8.visible=false
  gameOver()
 }
 if (alien9.isTouching(touch)) {
  console.log("Game Over")
  alien9.visible=false
  gameOver()
 }
 if (alien10.isTouching(touch)) {
  console.log("Game Over")
  alien10.visible=false
  gameOver()
 }
}

function gameOver() {
    textSize(20)
    text("Game Over! You Lose",400,275)
}