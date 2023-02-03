function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
}

function mouseDragged() {
    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
}

