var scl=20;
var b = [] ;
var isdead = false;
var pause = false;
var speed = 10;

var frate= 60;

var bomb;

var socket;

function preload() {
  bomb = loadImage('ressources/bombe.png');
}

function setup() {
  socket = io.connect('http://localhost:3010');
  frameRate(frate);
  createCanvas(600, 600);
  player = new Bomberman();
  socket.on('newBomb', newBomb);
}

function newBomb(data){
  b.push(new Bomb(data.x,data.y));
}

function keyReleased() {
  if ( keyCode == UP_ARROW) {
    player.dir(0,1);
  } else if (keyCode == DOWN_ARROW) {
    player.dir(0,-1);
  } else if (keyCode == LEFT_ARROW) {
    player.dir(1,0);
  }  else if (keyCode == RIGHT_ARROW) {
    player.dir(-1,0);
  }
}

function keyPressed() {
  if ( keyCode == UP_ARROW) {
    player.dir(0,-1);
  } else if (keyCode == DOWN_ARROW) {
    player.dir(0,1);
  } else if (keyCode == LEFT_ARROW) {
    player.dir(-1,0);
  }  else if (keyCode == RIGHT_ARROW) {
    player.dir(1,0);
  } else if (keyCode == 13) {
    player.dropBomb();
    console.log('Sending:' + player.x + player.y);
    var data = {
      x: player.x,
      y: player.y
    }
    socket.emit('newBomb', data);

  } else if (keyCode == 66) {
  }
}


function draw() {
  background(50);

  player.move();
  player.show();
  for (var i = b.length-1; i >= 0; i--) {
    b[i].show();
    b[i].timer +=1;

    if (b[i].timer ==3*frate) {
      b.splice(i,1);
    }
  }
}
