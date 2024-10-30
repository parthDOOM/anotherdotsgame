// var all_circles;
// var num_circles;
// var bgclr;
// var mouse_size; 
// var score;
// var start_safety_time;
// function setup() {
// 	colorMode(HSB)
// 	createCanvas(windowWidth, windowHeight);
// 	background(0);
// 	bgclr = 'black';
// 	mouse_size = 10;
// 	num_circles = 30;
// 	start_safety_time = 3000;
// 	all_circles = []
// 	for (var i = 0; i < num_circles; i++) {
// 		all_circles[i] = createCircle(false)
// 	}
// 	score = 0;
// }

// // gives each circle a random position, velocity and colour and returns it
// function createCircle(mouse) {
// 	var e = {}
// 	e.x = random(0, width) // x pos
// 	e.y = random(0, height) // y pos
// 	e.r = random(0.1, 50) // radius
// 	e.vx = random(-2, 2) // x velocity
// 	e.vy = random(-2, 2) // y velocity
// 	e.h = random(0, 360) // hue
// 	e.s = 40 // saturation
// 	e.eaten = false 
	
// 	if (mouse) { // special arguments for mouse controlled circle
// 		e.x = mouseX
// 		e.y = mouseY
// 		e.r = mouse_size
// 		e.s = 0
// 	}
// 	return e
// }

// //draws circles using arguments created in createCircles()
// function drawCircle(e) {
// 	fill(e.h, e.s, 100, 0.5)
// 	noStroke()
// 	circle(e.x, e.y, e.r * 2)
// }

// //changes the size and colour of circles
// function changeCircle(e) {
// 	e.r = random(0.1, 50)
// 	e.h = random(0, 360)
// 	e.eaten = false
// }

// // makes the circle move
// function updateCircle(e) {
// 	e.x += e.vx
// 	e.y += e.vy

// 	// if the circle touches the edge, changes its size, colour and velocity
// 	// so that it looks like a new circle is coming in
// 	if (e.x <= 0) {
// 		changeCircle(e)
// 		e.x += 10
// 		e.vx *= random(-0.1, -2);
// 	}
// 	if (e.x >= width) {
// 		changeCircle(e)
// 		e.x -= 10
// 		e.vx *= -1;
// 	}
// 	if (e.y <= 0) {
// 		changeCircle(e)
// 		e.y += 10
// 		e.vy *= -1;
// 	}
// 	if (e.y >= height) {
// 		changeCircle(e)
// 		e.y -= 10
// 		e.vy *= -1;
// 	}
// }

// // check if circles are colliding
// function areCirclesColliding(c1, c2) {
// 	let radiusSums = c1.r + c2.r;
// 	let distanceBetweenCircles = dist(c1.x, c1.y, c2.x, c2.y);
// 	return radiusSums > distanceBetweenCircles;
// }

// //checks which circle is eaten
// function isMouseEaten(c1, c2){
// 	if (c1.r > c2.r && isStartSafePeriod()){
// 		eaten = true
// 	}
// 	else {
// 		eaten = false
// 	}
// 	return eaten
// }

// function eatCircle(e){
// 	if (isStartSafePeriod()){
// 		e.r = 0
// 		e.eaten = true
// 		mouse_size += 1
// 		score += 1
// 	}
// }

// function circleHasBeenEaten(e){
// 	if (e.eaten == true){
// 		already_eaten = true
// 	}
// 	else {
// 		already_eaten = false
// 	}
// 	return already_eaten
// }

// function isStartSafePeriod(){
// 	return millis() >= start_safety_time;
// }

// function draw() {
// 	background(bgclr)
// 	mouse_circle = createCircle(true)
// 	drawCircle(mouse_circle)
// 	textSize(100)
// 	text(score, 60, 120)
// 	if (!isStartSafePeriod()){
// 		text('Dodge the big circles', 100, height/2)
// 	}
// 	if (score >= 100){
// 		bgclr = 'green'
// 		text('YOU WON!', width/2, height/2)
// 	}
// 	for (i = 0; i < all_circles.length; i++) {
// 		drawCircle(all_circles[i])
// 		updateCircle(all_circles[i])
// 		if (areCirclesColliding(all_circles[i], mouse_circle)) {
// 			if (isMouseEaten(all_circles[i], mouse_circle)){
// 				if (bgclr == 'black'){
// 					bgclr = 'red'
// 				}
// 			}
// 			else {
// 				if (circleHasBeenEaten(all_circles[i]) == false){
// 					if (bgclr == 'black'){
// 						eatCircle(all_circles[i])
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// function restartGame() {
//     initGame();
// }
// setup();
var all_circles;
var num_circles;
var bgclr;
var mouse_size;
var score;
var start_safety_time;

function setup() {
    colorMode(HSB);
    createCanvas(windowWidth, windowHeight);
    initGame();
}

function initGame() {
    background(0);
    bgclr = 'black';
    mouse_size = 10;
    num_circles = 30;
    start_safety_time = millis() + 3000;
    all_circles = [];
    for (var i = 0; i < num_circles; i++) {
        all_circles[i] = createCircle(false);
    }
    score = 0;
}

// Gives each circle a random position, velocity, and colour and returns it
function createCircle(mouse) {
    var e = {};
    e.x = random(0, width); // x pos
    e.y = random(0, height); // y pos
    e.r = random(0.1, 50); // radius
    e.vx = random(-2, 2); // x velocity
    e.vy = random(-2, 2); // y velocity
    e.h = random(0, 360); // hue
    e.s = 40; // saturation
    e.eaten = false;

    if (mouse) { // special arguments for mouse controlled circle
        e.x = mouseX;
        e.y = mouseY;
        e.r = mouse_size;
        e.s = 0;
    }
    return e;
}

// Draws circles using arguments created in createCircle()
function drawCircle(e) {
    fill(e.h, e.s, 100, 0.5);
    noStroke();
    circle(e.x, e.y, e.r * 2);
}

// Changes the size and colour of circles
function changeCircle(e) {
    e.r = random(0.1, 50);
    e.h = random(0, 360);
    e.eaten = false;
}

// Makes the circle move
function updateCircle(e) {
    e.x += e.vx;
    e.y += e.vy;

    // If the circle touches the edge, changes its size, colour and velocity
    // so that it looks like a new circle is coming in
    if (e.x <= 0) {
        changeCircle(e);
        e.x += 10;
        e.vx *= random(-0.1, -2);
    }
    if (e.x >= width) {
        changeCircle(e);
        e.x -= 10;
        e.vx *= -1;
    }
    if (e.y <= 0) {
        changeCircle(e);
        e.y += 10;
        e.vy *= -1;
    }
    if (e.y >= height) {
        changeCircle(e);
        e.y -= 10;
        e.vy *= -1;
    }
}

// Check if circles are colliding
function areCirclesColliding(c1, c2) {
    let radiusSums = c1.r + c2.r;
    let distanceBetweenCircles = dist(c1.x, c1.y, c2.x, c2.y);
    return radiusSums > distanceBetweenCircles;
}

// Checks which circle is eaten
function isMouseEaten(c1, c2) {
    if (c1.r > c2.r && isStartSafePeriod()) {
        eaten = true;
    } else {
        eaten = false;
    }
    return eaten;
}

function eatCircle(e) {
    if (isStartSafePeriod()) {
        e.r = 0;
        e.eaten = true;
        mouse_size += 1;
        score += 1;
    }
}

function circleHasBeenEaten(e) {
    if (e.eaten == true) {
        already_eaten = true;
    } else {
        already_eaten = false;
    }
    return already_eaten;
}

function isStartSafePeriod() {
    return millis() >= start_safety_time;
}

function draw() {
    background(bgclr);
    mouse_circle = createCircle(true);
    drawCircle(mouse_circle);
    textSize(100);
    text(score, 60, 120);
    if (!isStartSafePeriod()) {
        text('Dodge the big circles', 100, height / 2);
    }
    if (score >= 100) {
        bgclr = 'green';
        text('YOU WON!', width / 2, height / 2);
    }
    for (i = 0; i < all_circles.length; i++) {
        drawCircle(all_circles[i]);
        updateCircle(all_circles[i]);
        if (areCirclesColliding(all_circles[i], mouse_circle)) {
            if (isMouseEaten(all_circles[i], mouse_circle)) {
                if (bgclr == 'black') {
                    bgclr = 'red';
                }
            } else {
                if (circleHasBeenEaten(all_circles[i]) == false) {
                    if (bgclr == 'black') {
                        eatCircle(all_circles[i]);
                    }
                }
            }
        }
    }
}

// Restart game by reinitializing the game state
function restartGame() {
    initGame();
}

// Call setup function to start the game
setup();
