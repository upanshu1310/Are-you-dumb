let dumb = false;
let yes, no;

function setup() {
  createCanvas(windowWidth, windowHeight);

  yes = new Button("YES", width / 5, height / 2 + height/8);
  no = new Button("NO", 3 * width / 5, height / 2 + height/8);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  textSize(32);
  noStroke();
  fill(0);

  if (dumb) {
    text("I knew it :) ", width / 2, height / 2);
    noLoop();
  } else {
    text("Are you dumb?", width / 2, height / 2 - 50);
    yes.show();
    no.show();
  }
}

function mousePressed() {
  if (
    mouseX > no.x &&
    mouseX < no.x + no.width &&
    mouseY > no.y &&
    mouseY < no.y + no.height
  ) {
    no.x = random(0, width - no.width);
    no.y = random(0, height - no.height);
  } else if (
    mouseX > yes.x &&
    mouseX < yes.x + yes.width &&
    mouseY > yes.y &&
    mouseY < yes.y + yes.height
  ) {
    dumb = true;
  }
}
