var scl=20;
var pomme;
var crane;
var bombe;
var b = [] ;
var frate=10;
var isdead = false;

function preload() {
  pomme = loadImage('images/pomme.png');
  crane = loadImage('images/crane.png');
  bombe = loadImage('images/bombe.png');
}

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  s.reset();
  f = new Food();
  b[0] = new Bombe();
  frameRate(frate);
}

function keyPressed() {
  if ( keyCode == UP_ARROW) {
    s.dir(0,-1);
  } else if (keyCode == DOWN_ARROW) {
    s.dir(0,1);
  } else if (keyCode == LEFT_ARROW) {
    s.dir(-1,0);
  }  else if (keyCode == RIGHT_ARROW) {
    s.dir(1,0);
  }
}

function newBombe(){
  b.push(new Bombe);
}

function draw() {
  background(50);
  if (isdead){
    image(crane,width/2-125,height/2-125,250,250);
    textSize(35);
    text('Clique pour restart', width/2-150, height/2  + 150 );
    fill(255);
    if (mouseIsPressed || keyCode == ENTER) {
        s.reset();
        frate = 10;
        frameRate(frate);
        b= [];
        isdead = false;
      }
  }else{
    s.death();
    s.move();
    f.update(s);
    for (var i = 0; i < b.length; i++) {
      b[i].update(s);
      b[i].show();
    }
    s.show();
    f.show();
  }
}
