function Food(){
  this.cols=floor(random(floor(width/scl)));
  this.rows=floor(random(floor(height/scl)));

  this.show = function() {
    fill(255,0,100);
    image(pomme,this.cols*scl,this.rows*scl,scl,scl);
}

  this.update = function(s) {
    d = dist(this.cols*scl, this.rows*scl , s.x,s.y);
    if (d < 2) {
      this.cols=floor(random(floor(width/scl)));
      this.rows=floor(random(floor(height/scl)));
      s.eat();
      newBombe();
      frate += 1;
      frameRate(frate);
    }
  }
}
