
let deltaStartX;
let deltaStartY;
let deltaEndX;
let deltaEndY;

let startX;
let startY;
let endX;
let endY;

let r;
let g;
let b;

let rects = [];
let numRects = 100;
let rectWidth = 1;
let rectHeight = 00;
let amplitude = 400; // Amplitude der Bewegung

let rectHeight2 = 500;


let numPoints = 100; // Anzahl der Punkte
let points = []; // Array für die Punkte

function preload() {
  sound = loadSound("Breathe (In The Air).mp3");
}

function setup() {
  let cnv = createCanvas(600, 800);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();

  sound.play();

  fft = new p5.FFT(0.8, 128); // 0.8 = easing, 128
  fft.setInput(sound);

  angleMode(DEGREES);
  rectMode(CENTER);

  for (let i = 0; i < numRects; i++) {
    rects.push({
      x: (i + 1) * (width / (numRects + 1)),
      y: height / 2,
      baseY: height / 2, // Basis-Y-Position
    });
  }

  for (let z = 0; z < numPoints; z++) {
    // Punkte initialisieren
    points.push(createVector(random(width), random(-400, 0)));
  }




  initializeLineVariables();
  noFill();
  background(32);



}

function draw() {
  let spectrum = fft.analyze();
  drawLines(spectrum);


  // //liniegross
  // for (let i = 0; i < numRects; i++) {
  //   let r = rects[i];

  //   // Bewege das Rechteck leicht auf und ab um die Basis-Y-Position
  //   r.y = r.baseY + sin(frameCount * 0.1 + i) * amplitude;

  //   // Berechne die Farbe basierend auf dem Spektrum
  //   let spectrumValue = spectrum[i % spectrum.length];
  //   let rColor = map(spectrumValue, 0, 255, 0, 255);   // Rot von 0 bis 255
  //   let gColor = map(spectrumValue, 0, 255, 255, 0);   // Grün von 255 bis 0
  //   let bColor = map(spectrumValue, 0, 255, 100, 200); // Blau von 100 bis 200

  //   // Setze die Farbe der Linie
  //   stroke(rColor, gColor, bColor);
  //   strokeWeight(2);

  //   // Zeichne das Rechteck
  //   push();
  //   translate(r.x, r.y);
  //   rect(4, 0, rectWidth, rectHeight2);
  //   pop();
  // }

  // linieklein

  for (let i = 0; i < numRects; i++) {
    let r = rects[i];

    // Bewege das Rechteck leicht auf und ab um die Basis-Y-Position
    r.y = r.baseY + sin(spectrum[i] * 0.1 + i) * amplitude;

    // Zeichne das Rechteck
    push();
    strokeWeight(1);
    translate(r.x, r.y - 300);
    rect(0, 0, rectWidth, rectHeight);
    pop();
  }

  // linieklein

  for (let i = 0; i < numRects; i++) {
    let r = rects[i];

    // Bewege das Rechteck leicht auf und ab um die Basis-Y-Position
    r.y = r.baseY + sin(spectrum[i] * 0.1 + i) * amplitude;

    // Zeichne das Rechteck
    push();
    strokeWeight(1);
    color(155);
    translate(r.x + 100, r.y - 270);
    rect(0, 0, rectWidth, rectHeight);
    pop();
  }



  // //liniegross
  // for (let i = 0; i < numRects; i++) {
  //   let r = rects[i];

  //   // Bewege das Rechteck leicht auf und ab um die Basis-Y-Position
  //   r.y = r.baseY + sin(frameCount * 0.2 + i) * amplitude;



  //   // Zeichne das Rechteck
  //   push();
  //   stroke(0, 0, 250, 60)
  //   translate(r.x, r.y);
  //   rect(4, 0, rectWidth, rectHeight2);
  //   pop();
  // }

  // Für jeden Punkt
  for (let z = 0; z < numPoints; z++) {
    // Punkt zeichnen
    fill(0);
    strokeWeight(2);
    point(points[z].x, points[z].y);

    // Punkt nach unten bewegen
    points[z].y += spectrum[z] / 15;

    // // Wenn der Punkt den unteren Rand erreicht, setze ihn wieder nach oben
    // if (points[z].y > height) {
    //   points[z].y = random(-100, 0);
    //   points[z].x = random(width);
    // }
  }

}

function initializeLineVariables() {
  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);

  const range = 5;
  deltaStartX = random(-range, range);
  deltaStartY = random(-range, range);
  deltaEndX = random(-range, range);
  deltaEndY = random(-range, range);

  r = random(255);
  g = random(255);
  b = random(255);
}

function drawLines(spectrum) {
  for (let i = 0; i < spectrum.length; i++) {
    // Bewege die Linien basierend auf dem Spektrum
    startX += map(spectrum[i], 0, 128, -10, 2);
    startY += map(spectrum[i], 0, 128, -10, 2);
    endX += map(spectrum[i], 0, 128, -10, 2);
    endY += map(spectrum[i], 0, 128, -10, 2);

    // Begrenze die Positionen innerhalb des Canvas
    startX = constrain(startX, 0, 300);
    startY = constrain(startY, 0, 300);
    endX = constrain(endX, 0, width);
    endY = constrain(endY, 0, height);

    // Zeichne die Linien
    stroke(r, g, b, 100);
    line(startX, startY, endX, endY);

    // Ändere die Farben zufällig
    r += random(-5, 5);
    g += random(-5, 5);
    b += random(-5, 5);

    // Begrenze die Farbwerte
    r = constrain(r, 100, 255);
    g = constrain(g, 100, 255);
    b = constrain(b, 100, 255);

    // Bewege die Endpunkte der Linie
    startX += deltaStartX;
    startY += deltaStartY;
    endX += deltaEndX;
    endY += deltaEndY;

    // Begrenze die Bewegungen innerhalb des Canvas
    if (startX < 0 || startX > width) {
      deltaStartX *= -1;
    }

    if (startY < 0 || startY > height) {
      deltaStartY *= -1;
    }

    if (endX < 0 || endX > width) {
      deltaEndX *= -1;
    }

    if (endY < 0 || endY > height) {
      deltaEndY *= -1;
    }
  }
}
