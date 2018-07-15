function Bombe(s){
  var infront = new Boolean(true);
  while (infront == true) {
    infront = false;
    this.cols=floor(random(floor(width/scl)));
    this.rows=floor(random(floor(height/scl)));
    if ((this.cols*scl == s.x && s.yspeed != 0)
        || (this.rows*scl == s.y && s.xspeed !=0)) {
      infront = true;
    }
  }



  this.show = function() {
    fill(255,0,100);
    image(bombe,this.cols*scl,this.rows*scl,scl,scl);
  }
  this.update = function(s) {
    d = dist(this.cols*scl, this.rows*scl , s.x,s.y);
    if (d < 2) {
      isdead = true;
    }
  }
}
