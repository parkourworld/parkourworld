//powerups
//doors
//infinite levels
//enemies?

var time = 0
var myVar = setInterval(myTimer, 1000);
let play = false;
let score = 1;
let deaths = 0;
let player;
let grounded = true;

function setup() {
  createCanvas(600, 400);
  generateSprites();
  
}

function draw() {
  
  if (play == false){
    background(55);
    textSize(60);
    textFont('Comic Sans MS');
    fill('orange');
    text('Parkour World', 100,150);
    rect(275,200,50,25);
    fill(55);
    textSize(16);
    text('start', 280,218);
    if (mouseIsPressed && mouseX > 275 && mouseX < 325 && mouseY > 200 && mouseY < 225){
    play = true
    }
  }
  
  
  else{
    background(50);
    drawSprites();
    playerDetect();
    enemyUpdate();

    fill('white');
    textSize(32);
    text('Level: '+ score, 30,50);
    text('Deaths: '+ deaths, 30,80);
    text('Time: '+ time, 30,110);

    if(player.position.y >= height - 20) {
      player.position.y = height - 20;
      player.velocity.y = 0;
      player.position.y = 125;
      player.position.x = 25
      deaths++
    }
    
    checkKey()


  }
}

  function keyPressed(){
    if (key == ' ' && player.velocity.y == 0 && grounded == true){
      player.addSpeed(10, 270);
    }
  }


  //&&
  //||
  //!

  function playerDetect(){
    //We will fix this error next week!
    if(player.overlap(start) == true ||
       player.overlap(end) == true ||
       player.overlap(mapArray[0]) == true ||
       player.overlap(mapArray[1]) == true ||
       player.overlap(mapArray[2]) == true ||
       player.overlap(mapArray[3]) == true ||
       player.overlap(mapArray[4]) == true)
       {
      player.setSpeed(0, 90);
      grounded = true;
      if(player.overlap(start) == true){
        player.collide(start);
      }
      else if(player.overlap(end) == true){
        player.collide(end);
        player.remove();
        start.remove();
        end.remove();
        mapArray[0].remove()
        mapArray[1].remove()
        mapArray[2].remove()
        mapArray[3].remove()
        mapArray[4].remove()
        try{enemy.remove()}
        catch(ReferenceError){}
        generateSprites()
        score++
      }
       
      
      else if(player.overlap(mapArray[0]) == true){
        player.collide(mapArray[0]);
        console.log(key);
      }
      else if(player.overlap(mapArray[1]) == true){
        player.collide(mapArray[1]);
      }
      else if(player.overlap(mapArray[2]) == true){
        player.collide(mapArray[2]);
      }
      else if(player.overlap(mapArray[3]) == true){
        player.collide(mapArray[3]);
      }
      else if(player.overlap(mapArray[4]) == true){
        player.collide(mapArray[4]);
      }
    }
    else if(player.overlap(start) == false){
      player.addSpeed(0.5, 90); //come back to this
      grounded = false;
    } 
  }

  function generateSprites(){
    start = createSprite(25,200,50,10);
    end = createSprite(575,200,50,10);
    player = createSprite(25, 125, 20,30);
    player.shapeColor = color('orange')
    mapArray = makeMap();
    if ((score % 5 == 0)){
      sp = random(2,7)
      jk = random([0,1,2,3,4])
      x = mapArray[jk].position.x
      y = mapArray[jk].position.y - 20
      enemy = createSprite(x, y, 30 , 30);
      enemy.setSpeed(sp, 270)
      
    }
  }

  function checkKey(){
      if (keyIsDown(65) == true){
        player.velocity.x = -2
      }
      if (keyIsDown(68) == true){
        player.velocity.x = 2
          }

    else if (keyIsPressed == false){
      player.velocity.x = 0;
    }
  }

  function enemyUpdate(){
    
    try {
    if (player.overlap(enemy)){
        
        player.position.y = height - 20;
        player.velocity.y = 0;
        player.position.y = 125;
        player.position.x = 25
        deaths++ 
        }
    if (enemy.position.y < mapArray[jk].position.y - 100){
      enemy.setSpeed(sp, 90)
    }
    else if (enemy.position.y > mapArray[jk].position.y + 100){
      enemy.setSpeed(sp, 270)
    }
      // enemy.collide(mapArray[jk]);
  }

catch(TypeError){}
  }

function myTimer(){
  time+= 1;
}
