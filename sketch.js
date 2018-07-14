var scl=20;
var pomme;
var crane;
var bombe;
var b = [] ;
var frate=10;
var isdead = false;
var counter = 0;
var highscore = 0;


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
        counter = 0;
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
    textSize(35);
    fill(0, 102, 153);
    text(counter,20,35);

    s.show();
    f.show();
  }
}
