function setup() {
    createCanvas(760, 380);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
        ellipse(mouseX, mouseY, 5, 5);
    }
}
