//peut changer
var scl=20;
var frate=10;
var tempScale = 20;

//Sprites
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
var turnDownRight_LeftUp;

//Sounds
var music;
var death;
var normalRate;
var volSlider;

//Fonts
var font;

//Variables
var b = [] ;
var actions = [];
var isdead = false;
var counter = 0;
var highscore = 0;
var pause = false;
var buttonScale30;
var buttonScale15;


function preload() {
  music = loadSound('sounds/93 - Menu (Full).mp3');
  death = loadSound('sounds/death.mp3');
  normalRate = music.rate();

  font = loadFont('fonts/font.ttf');

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
  turnDownRight_LeftUp = loadImage('images/turnDownRight_LeftUp.png');
}

function setup() {
  music.loop();
  createCanvas(600, 600);
  s = new Snake();
  s.reset();
  f = null;
  f = new Food();
  newBombe();
  frameRate(frate);
  volSlider = createSlider(0, 255, 100);
  volSlider.position(620,20);
  buttonScale15 = createButton('15*15');
  buttonScale15.position(620,40);
  buttonScale15.mousePressed(function() { setScale(15);});
  buttonScale15 = createButton('30*30');
  buttonScale15.position(620,60);
  buttonScale15.mousePressed(function() { setScale(30);});
}

function setScale(x) {
  tempScale = 600/x;
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

function randomFreeLocation(){
  var freeSpace = false;
  var row;
  var col;
  while (!freeSpace) {
    col =floor(random(floor(height/scl)));
    row =floor(random(floor(width/scl)));
    freeSpace = true;
    for (var i = 0; i < b.length; i++) {
      if (b[i].rows == row && b[i].cols == col){
        freeSpace = false;
      }
    }
    if (f != null && f.cols == col && f.rows == row) {
      freeSpace = false;
    }
  }
  return createVector(col, row);
}

function newBombe(){
  var infront = new Boolean(true);
  var row;
  var col;
  var temp;
  while (infront) {
    infront = false;
    temp = randomFreeLocation();
    col = temp.x;
    row = temp.y;
    if ((row*scl == s.y && s.xspeed != 0)
    || (col*scl == s.x && s.yspeed != 0)) {
      infront = true;
    }

  }
  b.push(new Bombe(col, row));
}

function draw() {
  background(50);
  var vol = volSlider.value()/100;
  music.amp(vol);
  death.amp(vol);
  if (isdead){
    music.rate(normalRate);
    music.stop();
    image(crane,width/2-125,height/2-125,250,250);
    textSize(35);
    fill(255,255,255);
    textAlign(CENTER);
    textFont(font);
    text('CLICK TO RESTART', width/2, height/2  + 150 );
    text('Score: '+ counter,width/2, height/2  + 200);
    if (highscore < counter) {
      highscore = counter;
    }
    text('Highscore: '+ highscore,width/2, height/2  + 250);

    if (mouseIsPressed || keyCode == ENTER) {
      scl = tempScale;
      s.reset();
      frate = 10;
      frameRate(frate);
      music.loop();
      music.playMode('restart');
      b= [];
      newBombe();
      counter = 0;
      isdead = false;
    }
  }
  else{
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
    if (!pause) {
      s.move();
      f.update(s);
    }
    for (var i = 0; i < b.length; i++) {
      b[i].update(s);
      b[i].show();
    }
    s.show();
    f.show();
    textSize(35);
    fill(0, 102, 153);
    text(counter,20,35);

    if (pause) {
      textSize(35);
      fill(255);
      textAlign(CENTER);
      text('PAUSED', width/2, height/2);
      textSize(20);
      text('PRESS P TO RESUME', width/2, height/1.7);
    }
  }
}
