// idea 1 - scrapped

// function showHide() {
//     var x = document.getElementById("button");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//       document.querySelector("button").innerText = "Hide";

//     } else {
//       x.style.display = "none";
//       document.querySelector("button").innerText = "Show";

//     }
    
//   }

// function div() {
//     var x = document.getElementById("button");

// Using normal javascript

// document.addEventListener('DOMContentLoaded', function () {
//   const numStars = 70; 
//   const starsContainer = document.querySelector('.stars');

//   for (let i = 0; i < numStars; i++) { // for loop
//       const star = document.createElement('div'); 
//       star.className = 'star'; 
//       const x = Math.random() * window.innerWidth; //generate random x positions within the window screen
//       const y = Math.random() * window.innerHeight;
//       star.style.left = x + 'px'; 
//       star.style.top = y + 'px';
//       starsContainer.appendChild(star);
//   }
// });


let numStars = 50; // Adjust the number of stars
let flickerSpeed = 0.5; // Adjust the flicker speed (lower values make it slower)

function setup() {
  createCanvas(windowWidth, windowHeight); //make canvas throughout the window
  noStroke();
  frameRate(5); // Adjust the frame rate as needed
}

function draw() {
  background(0); // Set the background to black

  // Generate and display flickering stars
  for (let i = 0; i < 100; i++) { // Adjust the number of stars as needed
      const x = random(width); // placed at random
      const y = random(height);
      const starSize = random(2, 5);
      fill(255); // White 
      ellipse(x, y, starSize, starSize);
      numStars;
      flickerSpeed;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



