function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  background(255);
}

function draw() {
  background(255);
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;

  fill(255,0,0); // Setze die Füllfarbe auf Schwarz
  rectMode(CENTER); // Ändere den Modus, damit das Rechteck von seiner Mitte aus gezeichnet wird
  rect(centerX, centerY, windowWidth, windowHeight); // Zeichne ein Rechteck im Mittelpunkt des Bildschirms

  let startX = 200;
  let startY = 200;
  let endX = windowWidth - 200;
  let endY = windowHeight - 200;

  let gridX = 30;
  let gridY = 53;
  let abstandX = (endX - startX) / gridX; // Berechne den Abstand zwischen den Linien in X-Richtung
  let abstandY = (endY - startY) / gridY; // Berechne den Abstand zwischen den Linien in Y-Richtung
  let anzahl = gridX * gridY;

  for (let i = 0; i < anzahl; i++) {
    let yreihe = i % gridY;
    let xreihe = (i - yreihe) / gridY;
    let xpos = startX + xreihe * abstandX;
    let ypos = startY + yreihe * abstandY;

    //teil ganz rechts
    if (xreihe > 20) {
      let strichdicke = (sin(i / 20 + frameCount / 50) + 1) * 4;
      let hue = map(sin(i / 20 + frameCount / 100), -1, 1, 0, 250);
      drawLineWithParameters(xpos, ypos, strichdicke, hue, 10, 100);
    }
    // oben links
    else if (yreihe < 20) {
      let strichdicke = sin(i / -40 + frameCount / 300) * 8;
      let hue = map(sin(i / 20 + frameCount / 100), -1, 1, 0, 360);
      drawLineWithParameters(xpos, ypos, strichdicke, hue, 200, 200);
    }
    //unten links
    else if (xreihe < 5) {
      let strichdicke = (sin(i / -20 + frameCount / 300) + 1) * 1;
      let hue = map(sin(i / 20 + frameCount / 10), -1, 1, 0, 360);
      drawLineWithParameters(xpos, ypos, strichdicke, hue, 120, 100);
    }
    //unten mitte
    else {
      let strichdicke = (sin(i / 100 + frameCount / 20) + 1) * 4;
      let hue = map(sin(i / 20 + frameCount / 400), -1, 1, 0, 100);
      drawLineWithParameters(xpos, ypos, strichdicke, hue, 10, 200);
    }
  }
}

function drawLineWithParameters(
  xpos,
  ypos,
  strichdicke,
  hue,
  saturation,
  brightness
) {
  strokeWeight(strichdicke);
  stroke(hue, saturation, brightness);
  line(xpos, ypos, xpos + 20, ypos);
}
