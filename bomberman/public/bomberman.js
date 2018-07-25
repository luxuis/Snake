function Bomberman() {

  this.x=floor(width/scl/2)*scl;
  this.y=floor(height/scl/2)*scl;
  this.xSpeed = 0;
  this.ySpeed = 0;

  this.show = function () {
    fill(255);
    rect(this.x, this.y, scl, scl);
  }

  this.dir = function (x,y) {
    this.xSpeed+=x;
    this.ySpeed+=y;
  }

  this.dropBomb = function () {
    dropped = new Bomb(this.x, this.y);
    b.push(dropped);
  }

  this.move = function () {
    this.x += this.xSpeed*speed;
    this.y += this.ySpeed*speed;
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }
}
