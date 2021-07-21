var bombimg , Girlimg , Manimg , Playerimg , standingimg, bg
function preload(){

boarimg = loadAnimation("Boar Frames/b1.png","Boar Frames/b2.png","Boar Frames/b3.png","Boar Frames/b4.png","Boar Frames/b5.png")
girlimg = loadAnimation("Girl Frames/g1.png","Girl Frames/g2.png","Girl Frames/g3.png","Girl Frames/g4.png","Girl Frames/g5.png","Girl Frames/g6.png","Girl Frames/g7.png")
Manimg = loadAnimation("Gunner Frames/gunner1.png","Gunner Frames/gunner2.png","Gunner Frames/gunner3.png","Gunner Frames/gunner4.png","Gunner Frames/gunner5.png","Gunner Frames/gunner6.png","Gunner Frames/gunner7.png","Gunner Frames/gunner8.png","Gunner Frames/gunner9.png","Gunner Frames/gunner10.png","Gunner Frames/gunner11.png","Gunner Frames/gunner12.png","Gunner Frames/gunner13.png","Gunner Frames/gunner14.png","Gunner Frames/gunner15.png","Gunner Frames/gunner16.png")
Playerimg = loadAnimation("Player Frames/p1.png","Player Frames/p2.png","Player Frames/p3.png","Player Frames/p4.png","Player Frames/p5.png","Player Frames/p6.png","Player Frames/p7.png","Player Frames/p8.png","Player Frames/p9.png","Player Frames/p10.png","Player Frames/p11.png","Player Frames/p12.png","Player Frames/p13.png","Player Frames/p14.png")
standingimg = loadAnimation("Images/Playerstanding.png")
bg = loadImage("Images/Dungeon Background.png")
}




function setup(){
createCanvas(windowWidth,windowHeight)
background1 = createSprite(width/2,height/2)
background1.addImage(bg)
background1.scale = 3

player = createSprite(100,height-200)
player.addAnimation("p",Playerimg)
player.setCollider("rectangle",0,0,80,100)
edges = createEdgeSprites();
wall1 = createSprite(width/2,height-100,150,20)
wall1.velocityY = -5
wall2 = createSprite(100,height-150,100,20)

wall3 = createSprite(350,height/2,300,20)

wall4 = createSprite(width-300,200,350,20)
wall5 = createSprite(width-300,height-100,350,20)

//wall5 = createSprite(0,0,20,100)

//wall6 = createSprite(0,0,20,100)
}

function draw(){
background("black")
if(keyDown("space")){
    player.velocityY = -13
}

if(keyDown(RIGHT_ARROW)){
    camera.x += 5
}
player.velocityY += 1
background1.x = camera.x
player.x = camera.x-570
camera.y = height/2
wall1.bounceOff(edges)
player.bounceOff(edges[2])
//player.bounceOff(edges[2])
//player.bounceOff(edges[0])
player.collide(wall1)
player.collide(wall2)
player.collide(wall3)
player.collide(wall4)
player.collide(wall5)
drawSprites()
text(mouseX+","+mouseY,width-200,100)
}