
// all the scenes to draw

let firstScene;
let flowerScene;
let catScene;
let trashScene;
let secondScene;

// stars amount

let numCircles = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  firstScene = createDrawing1();
  flowerScene = createDrawing2();
  catScene = createDrawing3();
  trashScene = createDrawing4();
  secondScene = createDrawing5();
  windowResized();
}

function draw() {
  background(0);
  frameRate(10); // Lower the frame rate for slower flickering
  let opacity = 255; // Initial opacity of stars

  // for loop for stars
  
  
  for (let i = 0; i < numCircles; i++) {
        const x = random(width);
        const y = random(height);
        const circleSize = random(2, 5);
        fill(255); // White color
        ellipse(x, y, circleSize, circleSize)
        
  }

  // blue sky animation

  // fill('#ADD8E6'); //blue
  // rect(0, windowWidth / 2 , windowHeight * 2 ); 


  // green ground - constant

  
    fill('#467827');  // Green color
    rect(0, height - height * 0.35, width, height * 0.5);    // rect(0, windowWidth, windowHeight /2);   // From bottom-left to         bottom-right

    

  
// resize animation with conditions
  
  
  if (windowWidth >= 1200) {
    firstScene.draw();
  } else if (windowWidth >= 1000) {
    flowerScene.draw();
    // fill('#ADD8E6');  // Green color
    // rect(0, height - height * 0.5, width, height * 0.5);
    // fill('#467827');  // Green color
    // rect(0, height - height * 0.35, width, height * 0.5);  
  } else if (windowWidth >= 800) {
    catScene.draw();
  } else if (windowWidth >= 600) {
    trashScene.draw();
  } else if (windowWidth <= 600) {
    secondScene.draw()
  }
}

function windowResized()  {
  resizeCanvas(windowWidth, windowHeight);
}

// first drawing

function createDrawing1() {
  return {
    draw: () => {
// Ellipse Group


// their faces and hair


  push();
  translate(400, 300);
  fill(224, 186, 140);
  rect(-18, 70, 44, 39);
  fill(224, 185, 140);
  ellipse(0, 10, 138, 139);
  fill(121, 82, 76);
  ellipse(0, 0, 155, 119);
  pop();

  // Red Rectangle - clothes
  fill(255, 105, 105);
  rect(310, 405, 184, 180);

  // Overlap Group
  push();
  translate(650, 240);
  // Ellipse
  // fill(224, 185, 140);
  // ellipse(23, 3, 138, 139);
  // Rectangles
  fill(224, 186, 140);
  rect(70, 130, 44, 39);
  fill(255, 105, 105);
  rect(0, 169, 184, 180);
  fill(121, 82, 77);
  rect(23, 0, 138, 206);
  pop();

  // White Ellipse and Text
  push();
  translate(190, 176);
  fill(255);
  ellipse(0, 0, 375, 253);

  // Text
  fill(0);
  textSize(28);
  text("Do you think we’re soulmates in a different life too?", -100, -40, 258);
  pop();

    }
  }
}

function createDrawing2(canvasWidth, canvasHeight) {
  return {
    draw: () => {
//       push();
//       translate(1, 230);
//       fill(0);
//       rect(0, 0, canvasWidth, canvasHeight);

//       // Individual Ellipses and Petals
//       for (let i = 0; i < 28; i++) {
//         let ellipseColor = i % 2 === 0 ? color(74, 66, 66) : color(255, 248, 95);
//         let petalColor = color(255, 0, 0); // Petal color (adjust as needed)
//         let rotateAngle = i % 2 === 0 ? 0 : radians(42.12);
//         let ellipseX = i % 2 === 0 ? 514 : 862;
//         let offset = i % 2 === 0 ? 0 : 368;

//         push();
//         translate(ellipseX, 226 + offset);
//         rotate(rotateAngle);
//         fill(ellipseColor);
//         if (i === 0 || i === 27) {
//           ellipse(0, 0, 26, 61);
//         } else if (i >= 1 && i <= 26) {
//           ellipse(0, 0, 24, 78);

 
          
          
//         }
//         pop();
//       }

//       // Rectangle
//       fill(101, 156, 82);
//       rect(485, 124, 21, 236);
//       rect(839, 124, 21, 236);
      
      

//       // Div
//       fill(69, 119, 39);
//       rect(0, 357, canvasWidth, 697);

//       // Ellipse
//       fill(74, 66, 66);
//       ellipse(493, 90, 90, 66);

//       // Ellipse
//       fill(74, 66, 66);
//       ellipse(850, 90, 90, 66);

//       pop();
//     },
//   };
// }

// function drawPetals(numPetals, petalSize, petalColor) {
//   for (let i = 0; i < numPetals; i++) {
//     let angle = map(i, 0, numPetals, 0, TWO_PI);
//     let x = petalSize * cos(angle);
//     let y = petalSize * sin(angle);
//     fill(petalColor);
//     ellipse(x, y, 10, 30); // Adjust the size of the petal
//   }
// }

// flowers petals and stems
      
        // drawOverlapGroup(0, 0);
        // drawOverlapGroup(434, 438);
        drawRectangle(350, 320, 21, 236, '#659c52');
        // drawDiv(0, 387, 1512, 697, '#457727');
        drawEllipse2(335, 480, 26, 75, '#659c52', -42.12);
        drawEllipse2(360, 245, 87, 112, '#fff73c');
        drawEllipse2(430, 315, 87, 112, '#fff73c', -91.29);
        drawEllipse2(290, 315, 87, 112, '#fff73c', -91.29);
        drawEllipse2(360, 385, 87, 112, '#fff73c', 0.97);
        drawEllipse2(360, 320, 68, 65, '#9a4c4c');
        drawRectangle(680, 320, 21, 236, '#659c52');
        drawEllipse2(660, 480, 26, 75, '#659c52', -42.12);
        drawEllipse2(690, 245, 87, 112, '#fff73c');
        drawEllipse2(760, 315, 87, 112, '#fff73c', -91.29);
        drawEllipse2(620, 320, 87, 112, '#fff73c', -91.29);
        drawEllipse2(690, 385, 87, 112, '#fff73c', 0.97);
        drawEllipse(690, 320, 68, 65, '#9a4c4c');
      }
    
  }
  
}

      function drawOverlapGroup(x, y) {
        push();
        translate(x, y);
        fill(0);
        rect(0, 0, 1512, 1084);
        pop();
      }

      function drawRectangle(x, y, w, h, color) {
        push();
        fill(color);
        rect(x, y, w, h);
        pop();
      }

      function drawDiv(x, y, w, h, color) {
        push();
        fill(color);
        rect(x, y, w, h);
        pop();
      }

      function drawEllipse2(x, y, w, h, color, rotation) {
        push();
        fill(color);
        translate(x, y);
        rotate(radians(rotation));
        ellipse(0, 0, w, h);
        pop();
        
      }


function createDrawing3(canvasWidth, canvasHeight) {
  return {
    draw: () => {
      fill(255, 165, 0); // Rectangle color
      // stroke(239, 150, 85); // Ellipse and rectangle border color

      // Draw main rectangle
      // rect(0, 366, canvasWidth, 697);

      // Draw ellipse
      ellipse(315, 280, 134, 137);

      // Draw div
      ellipse(320, 450, 182, 262);

      // Draw rectangles
      drawRotatedRect(320, 550, 21, 97, -30.69);
      drawRotatedRect(380, 626, 21, 73, -120);
      drawRotatedRect(400, 610, 21, 73, -115.9);
      drawRotatedRect(420, 590, 21, 90, -102.75);
      
      drawRotatedPolygon(270, 190, 48, 40,45);
      drawRotatedPolygon(370,190, 48, 40,45);

      // Draw second set of shapes
      fill(255); // White color for the second set of shapes
      stroke(0); // Black border for the second set of shapes

      // Draw ellipse
      ellipse(700, 280, 134, 137);

      // Draw div
      ellipse(700, 450, 182, 262);

      // Draw rectangles
      drawRotatedRect(480, 570, 21, 97, -70.25);
      drawRotatedRect(520, 580, 21, 73, -67.1);
      drawRotatedRect(580, 610, 21, 60, -90);
      drawRotatedRect(630, 610, 21, 100, -131.52);

      // Draw polygons using p5.js code

      drawRotatedPolygon(650,190, 48, 40,45);
      drawRotatedPolygon(750,190, 48, 40,45);
      

      // Additional calls
      drawRotatedRect(/* provide parameters */);
      drawPolygon(/* provide parameters */);
    }
  };

  function drawRotatedRect(x, y, width, height, angle) {
    push();
    translate(x, y);
    rotate(radians(angle));
    rect(0, 0, width, height);
    pop();
  }
  function drawRotatedPolygon(x, y, sides, radius, rotationAngle) {
    beginShape();
    for (let i = 0; i < sides; i++) {
        let angle = map(i, 0, sides, 0, TWO_PI);
        let px = x + radius * cos(angle + radians(rotationAngle));
        let py = y + radius * sin(angle + radians(rotationAngle));
        vertex(px, py);
    }
    endShape(CLOSE);
}


  function drawPolygon(x, y, width, height) {
    beginShape();
    vertex(x, y);
    vertex(x + width / 2, y + height);
    vertex(x - width / 2, y + height);
    endShape(CLOSE);
  }
  
}

function createDrawing4(canvasWidth, canvasHeight) {
  return {
    draw: () => {

  // Div
  fill(179, 179, 179);
  rect(101, 200, 259, 376);

  // Ellipse 1
  fill(139, 135, 135);
  ellipse(500, 500, 144, 147);

  // Ellipse 2
  fill(146, 138, 138);
  ellipse(620, 600, 144, 147);

  // Lines
  drawLine(127, 200, 5, 376);
  drawLine(162, 200, 3, 376);
  drawLine(195, 200, 3, 376);
  drawLine(228, 200, 2, 376);
  drawLine(257, 200, 11, 376);
  drawLine(294, 200, 11, 376);
  drawLine(331, 200, 11, 376);
      
    
    }
  }
}

function drawLine(x, y, w, h) {
  fill(255);
  rect(x, y, w, h);
}

function createDrawing5(canvasWidth, canvasHeight) {
  return {
    draw: () => {
 // drawDiv();
        // drawRectangle(0, 825, 1512, 697, color(69, 119, 39));
        // drawOverlap(523, 479);
        // drawEllipse(600, 500, 155, 119, color(121, 82, 76));
        // drawRectangle(56, 0, 44, 39, color(224, 186, 140));
        // drawOverlapGroup(819, 476);
      //boy face
        drawEllipse(180, 295, 138, 139, color(224, 185, 140));
      
        drawRectangle(160, 350, 44, 39, color(224, 186, 140)); // neck
        drawRectangle(300, 380, 184, 180, color(255, 105, 105));
        drawRectangle(325, 220, 138, 206, color(121, 82, 77));
      
      //text and speech bubble
        drawOverlapGroup2(300, 500);
      
      //boy

      drawEllipse(180, 280, 155, 119, color(121, 82, 76));
      // drawEllipse(9, 100, 138, 139, color(224, 185, 140));
      drawRectangle(90, 380, 184, 180, color(255, 105, 105));


      }
  }
}


      function drawRectangle(x, y, w, h, col) {
        push();
        fill(col);
        rect(x, y, w, h);
        pop();
      }

      function drawOverlap(x, y) {
        push();
        translate(x, y);
        fill(0);
        rect(0, 0, 155, 166);
        pop();
      }

      function drawEllipse(x, y, w, h, col) {
        push();
        fill(col);
        ellipse(x, y, w, h);
        pop();
      }

      function drawOverlapGroup(x, y) {
        push();
        translate(x, y);
        fill(0);
        rect(0, 0, 184, 349);
        pop();
      }

      function drawOverlapGroup2(x, y) {
        push();
        translate(400, 100);
        fill(0);
        // rect(0, 0, 375, 301);
        drawEllipse(50, 0, 200, 150, color(255));
        // drawPolygon(8, 167);
        drawText("Yes.", 0, -25, color(0), "Helvetica-Regular", 64);
        pop();
      }

      function drawPolygon(x, y) {
        push();
        fill(255);
        beginShape();
        vertex(x, y);
        vertex(x + 120, y);
        vertex(x + 60, y + 134);
        endShape(CLOSE);
        pop();
      }

      function drawText(txt, x, y, col, font, size) {
        push();
        fill(col);
        textFont(font);
        textSize(size);
        text(txt, x, y, 300, 100);
        pop();
      }


      // constant stars animation


function star(x, y, radius1, radius2, npoints) {
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
