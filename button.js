class Button {
  constructor(name) {
    this.name = name;
    this.width = 75;
    this.height = 50;
    
    if (name == "YES") {
      this.x = width/2-125;
      this.y = height/2+50;
    } else if (name == "NO") {
      this.x = width/2+50;
      this.y = height/2+50;
    }
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