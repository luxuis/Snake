function Food(){
  temp = randomFreeLocation();
  this.cols= temp.x;
  this.rows= temp.y;

  this.show = function() {
    fill(255,0,100);
    image(pomme,this.cols*scl,this.rows*scl,scl,scl);
}

  this.update = function(s) {
    d = dist(this.cols*scl, this.rows*scl , s.x,s.y);
    if (d < 2) {
      temp = randomFreeLocation();
      this.cols= temp.x;
      this.rows= temp.y;
      s.eat();
      newBombe();
      frate += 1;

      //Ca c'est pour si tu veux vomir par les oreilles.
      //music.rate(music.rate()+0.04);

      frameRate(frate);
      counter ++;
    }
  }
}
