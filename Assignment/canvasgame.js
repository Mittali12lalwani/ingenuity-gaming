// selector
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
 
const image = document.getElementById("source");
const image2 = document.getElementById("jerry");

const player = {
  w: 50,
  h: 70,
  x: 15,
  y: 420,
  speed: 5,
  dx: 0,
  dy: 0,
};
const player2 = {
  w: 50,
  h: 70,
  x: 15,
  y: 500,
  speed: 5,
  dx: 0,
  dy: 0,
};



function background(){
  ctx.beginPath();
  ctx.moveTo(50, 15);
  ctx.lineTo(550,15);
  ctx.moveTo(550,15);
  ctx.lineTo(550,435);
   ctx.moveTo(50,15);
   ctx.lineTo(50,420);
  ctx.moveTo(50,485);
  ctx.lineTo(550,485);
  ctx.moveTo(100,420);
  ctx.lineTo(150,420);
  ctx.lineTo(150,485);
  ctx.moveTo(100,15);
  ctx.lineTo(100,150);
  ctx.moveTo(150,15);
  ctx.lineTo(150,60);
  ctx.moveTo(200,15);
  ctx.lineTo(200,150);
  ctx.moveTo(100,370);
  ctx.lineTo(100,200);
  ctx.lineTo(200,200);
  ctx.moveTo(150,200);
  ctx.lineTo(150,120);
  ctx.moveTo(100,420);
  ctx.lineTo(100,370);
  ctx.moveTo(200,200);
  ctx.lineTo(400,200);
  ctx.moveTo(400,150);
  ctx.lineTo(400,15);
  ctx.moveTo(250,200);
  ctx.lineTo(250,75);
  ctx.moveTo(300,150);
  ctx.lineTo(300,15);
  ctx.moveTo(350,200);
  ctx.lineTo(350,75);
  ctx.moveTo(450,15);
  ctx.lineTo(450,350);
  ctx.lineTo(150,350);
  ctx.moveTo(450,350);
  ctx.lineTo(450,435);
  ctx.moveTo(100,250);
  ctx.lineTo(400,250);
  ctx.moveTo(450,300);
  ctx.lineTo(150,300);
  ctx.moveTo(150,420);
  ctx.lineTo(350,420);
  ctx.moveTo(500,485);
  ctx.lineTo(500,65);
  ctx.stroke(); 
}

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}
function finalPlayer() {
  ctx.drawImage(image2, player2.x, player2.y, player2.w, player2.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();

}


function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Top wall
  if (player.y <0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }

  if (player.x + player.w > 150 ) {
    player.x = 150 - player.w;
  }
   if(player.x>75){
     if (player.y + player.h <485) {
           player.y = 485;
    } 
   }
if(player.y>435){
 if(player.x>55 && player.y>435){
   player.x=55;
   player.y=435;
 }
 }
 if(player.y<=100)
 {
   player.y=0;
 }
}
// Create Animation
function update() {
  
  clear();
  background();

  drawPlayer();

  newPos();
 
  requestAnimationFrame(update);

}

function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  console.log(e.key);
  if (e.key === "ArrowRight" || e.key === "Right") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" ||
    e.key == "Up" ||
    e.key == "ArrowUp" ||
    e.key == "Down" ||
    e.key == "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
