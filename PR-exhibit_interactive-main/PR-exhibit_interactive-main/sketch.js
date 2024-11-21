var showVideo = false;
var myVideo;

let GameState = "start"; // begining of lobby
let message = "Welcome to the Puerto Rico heritage exhibit! \nBoricuas (what Puerto Ricans call themselves) \nare made off of Taínos, Africans and Spaniards. \nHere are a few things that represent each one.";

let button1;
let button2;
let button3;
let button4;
let button5;


function preload()
{
  //load all files
  coquiImage = loadImage ('coqui.jpg');
  vejiganteImage = loadImage ('vejigante.jpg');
  cuatroImage = loadImage ('cuatro.jpg');
  pedroImage = loadImage ('pedro.jpg');
  coquiCall = loadSound ('Coqui Calling.mp3');
  bomba = loadSound ('Bomba.mp3');
  aguinaldo = loadSound ('AGUINALDO JIBARO (CUATRO PUERTORRIQUENO).mp3');
  himno = loadSound ('Himno.mp3');
  //flag = loadImage('pedro.jpg');
  
}
function setup() {
  createCanvas(800, 700);
  textSize (16);
  
  // You can play with the width/height in the embedded code
  myVideo = createDiv('<iframe width="600" height="450" src="https://www.youtube.com/embed/TY7rg3bC_m8?si=zxwXrhqRawbj3W3-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
  
myVideo.position(100, 240);
myVideo.hide(); //Start hidden
  
}

function draw() {
  background('lightgreen');
    // Draw the flag in the bottom left
  
  if(!showVideo){
  fill(0);
  textAlign(CENTER);
  text(message, width / 2, height / 2);
  //image (coquiImage, 0, 0); //load coqui image
  button1 = createImg('coqui.jpg','coqui');
  button1.position(25, 25);
  button1.mousePressed(coqui);
  
  button2 = createImg('vejigante.jpg','vejigante');
  button2.position(200, 25);
  button2.mousePressed(vejigante);
  
  button3 = createImg('cuatro.jpg','cuatro');
  button3.position(375, 20);
  button3.mousePressed(cuatro);
  
  button4 = createImg('pedro.jpg','pedro'); 
  button4.position(550, 20);
  button4.mousePressed(pedro);
  
  button5 = rect(0,595, 100, 100); //createImg('pedro.jpg','pedro'); 
  button5.fill(225,0,0,100);
  //button5.mousePressed(flag);
  }
  drawFlag();

 
}


  // Draw the Puerto Rican flag
function drawFlag() {
  // Draw the red stripes
  fill(206, 17, 38); // Red color
  rect(0, 595, 100, 20); // Top red stripe
  rect(0, 635, 100, 20); // Middle red stripe
  rect(0, 675, 100, 20); // Bottom red stripe

  // Draw the white stripes
  fill(255); // White color
  rect(0, 615, 100, 20); // Middle white stripe
  rect(0, 655, 100, 20); // Middle white stripe

  // Draw the blue triangle
  fill('lightblue'); // Blue color
  beginShape();
  vertex(0, 695);
  vertex(0, 595);
  vertex(40, 645);
  endShape(CLOSE);

  // Draw the white star
  fill(255); // White color
  drawStar(15, 645, 8, 15, 5); // Star position and size
}

// Function to draw a star
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
  
  

function vejigante(){
      if (!bomba.isPlaying()) {
    bomba.play();
  }
  else {bomba.stop();
       }
  
  message = 'Slaves from Africa where later brought in to the Island to work on the plaintations. \nOver time, they created certain activities \nin order to keep their hope up in such a horrible situation. \nOne activity we still practice today is called Bomba.';
}

function coqui() {
    if (!coquiCall.isPlaying()) {
    coquiCall.play();
  }
  else {coquiCall.stop();
       }

  message = 'Coquis have been around since the begining with the Taínos, \nthey are our national animal. The Taínos are a peacefull civilization \nwho have a complex culture and political hiarchy. \nTo this day we still honor them';
}
  
function cuatro() {
  if (!aguinaldo.isPlaying()) {
    aguinaldo.play();
  }
  else {
    aguinaldo.stop();
       }
  message = 'As the years passed, more Spaniards were born on the Island, \nthey were called Criollos. Because they where born on the Island, \nthey were seen as tainted and so treated as lower class citizens. \nThis is also when the term Jibaro started to be used \nas a way to call Puerto Ricans lazy, when in actuality \nwe are harworking people that love to celebrate all the good things \nsince it was a time of turmoil.';
}

function pedro() {
  if(!himno.isPlaying()) {
    himno.play();
  }
  else {
    himno.stop();
  }
  message = '"Si la Tirania es ley, la Revolución es orden", \nIf tiranny is law, revolution is order-Pedro Albizu Campos. \nThose words hold truth to this day as the people are still fighting \nagainst their opressors (the government and the US). \nThe people in power have been trying to silance the independence movement since the beginning, \nbut know we are manny. Puerto Rico deserves their independence, \nwe will not let the US turn us into their private pool, \nwhere the rich can move and kick out the natives. \nHistory will not repeat itself. \nThe Taínos proved the colonizers are mortal, now we will use that knowledge against them. \nPress the flag to learn more.';
}




  


// Detect mouse clicks
function mousePressed() {
  // Check if the click is within the flag's boundaries
  if (mouseX >= 0 && mouseX <= 100 && mouseY >= 595 && mouseY <= 695) {
    toggleVideo();
  }
}

// Show or hide the video
function toggleVideo() {
  if (showVideo) {
    myVideo.hide();
  } else {
    myVideo.show();
  }
  showVideo = !showVideo;
}