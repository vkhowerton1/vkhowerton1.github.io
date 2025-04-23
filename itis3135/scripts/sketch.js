let symmetry = 6;
let angle;
let strokeColor;

function setup() {
  createCanvas(600, 600);
  angle = TWO_PI / symmetry;
  background(0);
  strokeWeight(2);
  stroke(255);
}

function draw() {
  translate(width / 2, height / 2); //origin -> center of screen

  if (mouseIsPressed) {
    strokeColor = color(random(255), random(255), random(255), 100); //random color when mouse is clicked
    stroke(strokeColor);

    //mouse coordinates relative to the center
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    for (let i = 0; i < symmetry; i++) {
      rotate(angle); //rotate for each section
      //draw line from previous to current mouse position
      line(mx, my, pmx, pmy);
      //flip to create mirrored symmetry
      push();
      scale(1, -1);
      line(mx, my, pmx, pmy);
      pop();
    }
  }
}

//when 'c' is pressed, black background resets and drawing clears
function keyPressed() {
  if (key === 'c') {
    background(0);
  }
}