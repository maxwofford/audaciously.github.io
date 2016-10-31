var NUM_CIRCLES = 12;
var circleDiameter;

function setup() {
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES;
}

function draw() {
    ellipse(width/2,height/2,circleDiameter,circleDiameter);
}