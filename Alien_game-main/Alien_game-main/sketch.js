let meteors = [];
let numMeteors = 10; // Number of meteors
let meteorSpeed = 5; // Speed of the meteors
let alienColor;
let alienX, alienY;
let collisionDetected = false;

function setup() {
  createCanvas(800, 600);
  noStroke();
  
  // Initialize meteors with random positions and velocities
  for (let i = 0; i < numMeteors; i++) {
    meteors.push({
      x: random(width),
      y: random(height),
      dx: random(-meteorSpeed, meteorSpeed), // Random horizontal velocity
      dy: random(meteorSpeed / 2, meteorSpeed) // Random vertical velocity
    });
  }
  
  // Initialize the alien
  alienX = width / 2;
  alienY = height / 2;
  changeAlienColor();
}

function draw() {
  background(0); // Black background for space
  
  // Update and draw meteors
  updateMeteors();
  drawMeteors();

  // Check for collision
  checkCollision();

  // Draw the alien
  drawAlien(alienX, alienY);

  // Optionally, display a message if a collision was detected
  if (collisionDetected) {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Collision Detected!", width / 2, height / 2);
  }
}

function updateMeteors() {
  for (let meteor of meteors) {
    meteor.x += meteor.dx; // Move meteor horizontally
    meteor.y += meteor.dy; // Move meteor vertically

    // Wrap around the screen
    if (meteor.x > width || meteor.x < 0 || meteor.y > height || meteor.y < 0) {
      meteor.x = random(width);
      meteor.y = random(height);
      meteor.dx = random(-meteorSpeed, meteorSpeed); // New random velocity
      meteor.dy = random(meteorSpeed / 2, meteorSpeed); // New random vertical velocity
    }
  }
}

function drawMeteors() {
  fill("aqua"); // Meteor color (aqua)
  for (let meteor of meteors) {
    ellipse(meteor.x, meteor.y, 30, 30); // Draw meteors as circles
 
  }
}

function drawAlien (x, y) {
  fill("purple"); //Alien color
  
  //Body
  ellipse(x, y, 60, 80);
  
  //Eyes
  fill(0);
  ellipse(x- 20, y-20, 15, 20);
  ellipse(x+20, y-20, 15, 20);
  
  //Pupils
  fill(255, 0, 0);
  ellipse(x-20, y-20, 7, 20);
  ellipse(x+20, y-20, 7, 20);
  
  //Antennae
  stroke("navy");
  strokeWeight(4);
  line(x-20, y-40, x-30, y-60);
  line(x+20, y-40, x+30, y-60);
  
  //Antennae balls
  fill("navy");
  noStroke();
  ellipse(x-30, y-60, 10, 10);
  ellipse(x+30, y-60, 10, 10);
}

//Function to change the alien's color
function changeAlienColor(){
  alienColor=color(random(255), random(255), random(255));
}

//Function to check for collision between the alien and meteors
function checkCollision(){
  collisionDetected=false;
  for (let meteor of meteors) {
    let d=dist(alienX, alienY, meteor.x, meteor.y);
    if (d<30) {//Check if the distance between the alien and meteor is less than 30 (the radius of the alien)
    collisionDetected=true;
    break;
    }
  }
}

// Move the alien with arrow keys
function keyPressed() {
  const step = 10; // Movement step size
  if (keyCode === LEFT_ARROW) {
    alienX -= step;
  } else if (keyCode === RIGHT_ARROW) {
    alienX += step;
  } else if (keyCode === UP_ARROW) {
    alienY -= step;
  } else if (keyCode === DOWN_ARROW) {
    alienY += step;
  }
}
