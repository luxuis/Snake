var scl=20;
var pomme;
var crane;
var bombe;
var headUp;
var headDown;
var headR;
var headL;
var tailUp;
var tailDown;
var tailR;
var tailL;
var bodyH;
var bodyV;
var turnRightDown_UpLeft;
var turnRightUp_DownLeft;
var turnUpRight_LeftDown;
var turnUpRight_LeftUp;
var b = [] ;
var actions = [];
var frate=10;
var isdead = false;
var counter = 0;
var highscore = 0;


function preload() {
  pomme = loadImage('images/pomme.png');
  crane = loadImage('images/crane.png');
  bombe = loadImage('images/bombe.png');
  headUp = loadImage('images/headUp.png');
  headDown = loadImage('images/headDown.png');
  headR = loadImage('images/headR.png');
  headL = loadImage('images/headL.png');
  bodyH = loadImage('images/bodyH.png');
  bodyV = loadImage('images/bodyV.png');
  tailUp = loadImage('images/tailUp.png');
  tailDown = loadImage('images/tailDown.png');
  tailR = loadImage('images/tailR.png');
  tailL = loadImage('images/tailL.png');
  turnRightDown_UpLeft = loadImage('images/turnRightDown_UpLeft.png');
  turnRightUp_DownLeft = loadImage('images/turnRightUp_DownLeft.png');
  turnUpRight_LeftDown = loadImage('images/turnUpRight_LeftDown.png');
  turnUpRight_LeftUp = loadImage('images/turnUpRight_LeftUp.png');
}

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  s.reset();
  f = new Food();
  b[0] = new Bombe(s);
  frameRate(frate);
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
  }
}

function newBombe(){
  b.push(new Bombe(s));
}

function draw() {
  background(50);
  if (isdead){
    image(crane,width/2-125,height/2-125,250,250);
    textSize(35);
    fill(255,255,255);
    textAlign(CENTER);
    text('Clique pour restart', width/2, height/2  + 150 );
    text('Score: '+ counter,width/2, height/2  + 200);
    if (highscore < counter) {
      highscore = counter;
    }
    text('Highscore: '+ highscore,width/2, height/2  + 250);

    if (mouseIsPressed || keyCode == ENTER) {
        s.reset();
        frate = 10;
        frameRate(frate);
        b= [];
        b[0] = new Bombe(s);
        counter = 0;
        isdead = false;
      }
  }else{
    s.death();
    if (actions.length != 0) {
    switch (actions[0]) {
      case "up":
      s.dir(0,-1);
      break;
      case "down":
      s.dir(0,1);
      break;
      case "left":
      s.dir(-1, 0);
      break;
      case "right":
      s.dir(1, 0);
      break;
      default:
      break;
    }
    actions.shift();
  }
    s.move();
    f.update(s);
    for (var i = 0; i < b.length; i++) {
      b[i].update(s);
      b[i].show();
    }
    textSize(35);
    fill(0, 102, 153);
    text(counter,20,35);

    s.show();
    f.show();
  }
}
