// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
	createCanvas(640, 480);
	colorMode(HSB);
	// frameRate(30);
	background(0);
	noStroke();
}

function draw() {
	// fill(0x11000000)
    // rect(0, 0, width, height)
	fill(frameCount % 255, 51, 230);
	ellipse(mouseX, mouseY, 20, 20);
}