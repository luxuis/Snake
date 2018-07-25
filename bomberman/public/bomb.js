function Bomb(x, y) {
  this.x = x;
  this.y = y;
  this.timer = 0;

  this.explode = function() {

  }

  this.show = function() {
    image(bomb, this.x, this.y, scl, scl)
  }

  this.update = function() {
    if (timer == 3) {
      this.explode();
    }
  }
}
