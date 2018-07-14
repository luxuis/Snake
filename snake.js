function Snake() {

  this.reset = function() {
    this.x=width/2;
    this.y=height/2;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  }

  this.dir = function (x,y) {
    if (x != -this.xspeed) {
      this.xspeed=x;
      this.yspeed=y;
    }
  }

  this.eat = function () {
    this.total ++;
  }

  this.death = function(pomme) {
    for (var i = 0; i < this.tail.length ; i++) {
      d = dist(this.x,this.y,this.tail[i].x,this.tail[i].y)
      if (d<2) {
        isdead = true;
        }
      }

  }
  this.move = function () {
    if (this.total === this.tail.length ) {
      for (var i = 0; i < this.tail.length-1 ; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1]= createVector(this.x,this.y);
    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;
    if (this.x < 0) {
      this.x = width;
    }else if (this.x >= width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height ;
    } else if ( this.y >= height) {
      this.y = 0 ;
    }
  }

  this.show = function () {
    fill(255)
    for (var i = 0; i < this.tail.length ; i++) {
      rect(this.tail[i].x,this.tail[i].y,scl,scl);
    }
    rect(this.x,this.y,scl,scl)
  }
}
