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

  this.death = function() {
    for (var i = 0; i < this.tail.length ; i++) {
      d = dist(this.x,this.y,this.tail[i].pos.x,this.tail[i].pos.y)
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
    var direction;
    if (this.xspeed < 0){
      direction = "L";
    }
    else if (this.xspeed > 0){
      direction = "R";
    }
    else if (this.yspeed < 0){
      direction = "Up";
    }
    else if (this.yspeed > 0){
      direction = "Down";
    }
    this.tail[this.total-1]= new Body(this.x ,this.y, direction);
    //this.tail[this.total-1]=createVector(this.x ,this.y);

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
      var type = this.tail[i].type;
      var sprite;
      if (i == 0) {
        switch (type) {
          case "Up" : sprite = tailUp;
          break;
          case "Down" : sprite = tailDown;
          break;
          case "L" : sprite = tailL;
          break;
          case "R" : sprite = tailR;
          break;
        }
      }
      else {
        if (type == 'R'|| type == 'L') {
             sprite = bodyH;
           }
         else {
           sprite = bodyV;
         }

      if (this.tail[i-1]!=null && this.tail[i+1] != null){
        if (this.tail[i-1].type == "R" && this.tail[i+1].type == "Down"
            || this.tail[i-1].type == "Down" && this.tail[i+1].type == "R"){
          sprite = turnRightDown;
        }
        else if (this.tail[i-1].type == "L" && this.tail[i+1].type == "Down"
            || this.tail[i-1].type == "Down" && this.tail[i+1].type == "L"){
          sprite = turnLeftDown;
        }
        else if (this.tail[i-1].type == "R" && this.tail[i+1].type == "Up"
            || this.tail[i-1].type == "Up" && this.tail[i+1].type == "R"){
          sprite = turnRightUp;
        }
        else if (this.tail[i-1].type == "L" && this.tail[i+1].type == "L"
            || this.tail[i-1].type == "Up" && this.tail[i+1].type == "Up"){
          sprite = turnLeftUp;
        }
      }
    }

    //rect(this.tail[i].pos.x,this.tail[i].pos.y,scl,scl);
    image(sprite,this.tail[i].pos.x,this.tail[i].pos.y,scl,scl);
  }



    if (this.yspeed < 0) {
      image(headUp,this.x,this.y,scl,scl);
    }
    else if (this.yspeed > 0) {
      image(headDown,this.x,this.y,scl,scl);
    }
    else if (this.xspeed > 0) {
      image(headR,this.x,this.y,scl,scl);
    }
    else if (this.xspeed < 0) {
      image(headL,this.x,this.y,scl,scl);
    }
    else {
      rect(this.x,this.y,scl,scl);
    }
  }
}
