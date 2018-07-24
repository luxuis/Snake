function preload() {

}

function setup() {
  createCanvas(600, 600);
}

function keyPressed() {
  if ( keyCode == UP_ARROW) {
    actions.push("up");
    //s.dir(0,-1);
  } else if (keyCode == DOWN_ARROW) {
    //s.dir(0,1);
    actions.push("down");
  } else if (keyCode == LEFT_ARROW) {
    //s.dir(-1,0);
    actions.push("left");
  }  else if (keyCode == RIGHT_ARROW) {
    //s.dir(1,0);
    actions.push("right");
  } else if (keyCode == 80 && !isdead) {
    pause = !pause;
  } else if (keyCode == 66) {
    newBombe();
  }
}


function draw() {
  background(50);
}
