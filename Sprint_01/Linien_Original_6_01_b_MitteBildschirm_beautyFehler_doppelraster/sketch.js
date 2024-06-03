function setup() {
  createCanvas(600, 600);
  strokeWeight(3);
  background(255);
}

function draw() {
  background(255, 102, 102);
  // let centerX = 600/2;
  // let centerY = 600/2;

  // fill(255, 0, 0); // Setze die Füllfarbe auf Rot (kann geändert werden)
  // rectMode(CENTER); // Ändere den Modus, damit das Rechteck von seiner Mitte aus gezeichnet wird
  // rect(centerX, centerY, 200, 200); // Zeichne ein Rechteck im Mittelpunkt des Bildschirms

  push();
  fill(0); // Setze die Füllfarbe auf Cyan
  noStroke();
  
  let startX = 10; // Start-X-Position des ersten Rechtecks
  let startY = 10; // Start-Y-Position des ersten Rechtecks
  let rectWidth = 100; // Breite der Rechtecke
  let rectHeight = 100; // Höhe der Rechtecke
  let spacing = 5; // Abstand zwischen den Rechtecken

  // Schleife zum Zeichnen der Rechtecke in einer Spalte
  for (let i = 0; i <10; i++) {
    // Berechne die Y-Position des aktuellen Rechtecks
    let y = startY + i * (rectHeight + spacing);
    
    // Schleife zum Zeichnen der Rechtecke in einer Reihe
    for (let j = 0; j < 10; j++) {
      // Berechne die X-Position des aktuellen Rechtecks
      let x = startX + j * (rectWidth + spacing);
      
      rect(x, y, rectWidth, rectHeight);}
  }
  pop();

  let gridX = 30;
  let gridY = 53;
  let abstandX = height / gridX; //min. 13
  let abstandY = width / gridY; // min. 8
  let anzahl = gridX * gridY;

  for (let i = 0; i < anzahl; i++) {
    let yreihe = i % gridY;
    let xreihe = (i - yreihe) / gridY;
    let xpos = xreihe * abstandX;
    let ypos = yreihe * abstandY;

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
