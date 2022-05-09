class Button {
  constructor(name, x, y) {
    this.name = name;
    this.width = width/5;
    this.height = height/8;
    this.x = x;
    this.y = y;
  }
  
  show() {
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.width, this.height);
    textAlign(CENTER, CENTER);
    textSize(32);
    noStroke();
    fill(0);
    text(this.name, this.x+this.width/2, this.y+this.height/2);
  }

}
