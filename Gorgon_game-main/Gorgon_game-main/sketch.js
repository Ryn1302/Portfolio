let gameState = "center";  // Tracks the current state of the game (center, left, or right)
let message = "You are in a room with two paths. Go Left (L) or Right (R).";
let hasSword = false;      // Tracks if the player has the sword
let gameEnded = false;     // Tracks if the game has ended (win or lose)
let hasStaff = false;      // Tracks if the player has staff

function setup() {
  createCanvas(800, 400);
  textSize(16);
}

function draw() {
  background(220);
  
  // Display the message to the player
  fill(0);
  textAlign(CENTER);
  text(message, width / 2, height / 2);

  // Handle game states
  if (gameState === "center") {
    message = "You are in the center of a cavern. Go Left (L) to explore, or Right (R) to face the unknown.";
  } else if (gameState === "left") {
    if (!hasSword) {
      message = "You discover an old rusted sword lying on the ground. \nGo Right (R) to return to the center. (P) to pick up sword";
      //hasSword = true;  // Player picks up the sword
      console.log("in sword condition");
  // Sword handle
  fill(139, 69, 19); // Brown color for the handle
  rect(110, 300, 20, 50); // Further adjusted handle position
  
  // Sword blade
  fill(192, 192, 192); // Silver color for the blade
  beginShape();
  vertex(120, 300); // Start at the bottom of the blade
  vertex(100, 100); // Left tip of the blade
  vertex(140, 100); // Right tip of the blade
  endShape(CLOSE); // Close the shape to form the blade
  
  // Sword guard
  fill(139, 69, 19); // Brown color for the guard
  rect(100, 290, 40, 10); // Further adjusted guard position
      
    } else {
      message = "there's also a staff, press (S) to pick it up. Go Right (R) to return to the center.";
      //hasStaff = true;
      console.log("in staff condition");
        // Staff body
  fill(139, 69, 19); // Brown color for the staff
  rect(90, 150, 20, 200); // Staff dimensions (x, y, width, height)

  // Staff top (sphere)
  fill(255, 215, 0); // Gold color for the top sphere
  ellipse(100, 150, 40, 40); // Top sphere dimensions (x, y, width, height)

      
    }
  } else if (gameState === "right") {
    if (hasSword && hasStaff) {
      message = "Armed with the sword, you bravely face the gorgon and emerge victorious, receiving it's guarded treasure! ";
      gameEnded = true;  // Game ends with a victory
    } else if(hasSword && !hasStaff) {
      message = "You encounter a terrifying gorgon, but you are poorly armed. The gorgon turns you to stone.";
      gameEnded = true;  // Game ends with a loss
    } else {
      message = "You encounter a terrifying gorgon, but you are unarmed. The gorgon eats you.";
      gameEnded = true;  // Game ends with a loss
    }
  }

  // If the game has ended, wait for space to restart
  if (gameEnded) {
    message += "\nPress Space to restart.";
  }
}

// Detect key presses for L, R, and Space
function keyPressed() {
  if (gameEnded && key === ' ') {
    restartGame();  // Restart the game if it's over and the player presses Space
  } else if (!gameEnded) {
    // Move between rooms based on current gameState
    if (gameState === "center") {
      if (key === 'L' || key === 'l') {
        gameState = "left";   // Go left to find the sword
      } else if (key === 'R' || key === 'r') {
        gameState = "right";  // Go right to fight the dragon
      }
    } else if (gameState === "left" && (key === 'R' || key === 'r')) {
      gameState = "center";   // Return to the center from the left room
    } else if (gameState === "left" && (key === 'P' || key === 'p')) {
      hasSword = true;   // Return to the center from the left room
    } else if (gameState === "left" && (key === 'S' || key === 's')) {
      hasStaff = true;   // Return to the center from the left room
    }else if (gameState === "right" && (key === 'L' || key === 'l')) {
      gameState = "center";   // Return to the center from the right room
    }
  }
}

// Restart the game
function restartGame() {
  gameState = "center";   // Reset to the center room
  message = "You are in a room with two paths. Go Left (L) or Right (R).";
  hasSword = false;       // Reset sword status
  gameEnded = false;      // Reset the game ended status
  hasStaff = false;
}