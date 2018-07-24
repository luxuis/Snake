var scl=20;
var b = [] ;
var isdead = false;
var pause = false;
var speed = 10;

var bomb;

function preload() {
  bomb = loadImage('../images/bombe.png');
}

function setup() {
  createCanvas(600, 600);
  player = new Bomberman();
  console.log(player);
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

    if (b[i].timer ==3*60) {
      b.splice(i,1);
    }
  }
}
