
//rechtecke klein
let rects = [];
let numRects = 100;
let rectWidth = 1;
let rectHeight = 00;
let amplitude = 400; // Amplitude der Bewegung

//rechtecke gross
let rectHeight2 = 500;

//Punkte
let numPoints = 100; // Anzahl der Punkte
let points = []; // Array für die Punkte

//einsatz Hintergrundfarbe
let frameCounter = 0; // Zählervariable für die Frames


//ANFANGSLINIEN LAUT
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

function preload() {
  sound = loadSound("Breathe (In The Air).mp3");
}

function setup() {
  let cnv = createCanvas(600, 800);
  //let cnv = createCanvas(innerWidth, innerHeight - 10);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();

  sound.play();

  fft = new p5.FFT(0.8, 128); //0.8 = easing, 128
  fft.setInput(sound);


  //ANFANGSLINIEN LAUT START
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
  //ANFANGSLINIEN LAUT ENDE


  //createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

  //rechtecke
  for (let i = 0; i < numRects; i++) {
    rects.push({
      x: (i + 1) * (width / (numRects + 1)),
      y: height / 2,
      baseY: height / 2, // Basis-Y-Position
    });
  }

  //Punkte
  for (let z = 0; z < numPoints; z++) {
    // Punkte initialisieren
    points.push(createVector(random(width), random(-400, 0)));
  }




}



function draw() {
  //FARBE BACKGROUND START
  push();
  colorMode(HSL);
  // Erhöhe den Zähler für die Frames
  frameCounter++;

  // Überprüfe, ob 20 Frames vergangen sind
  if (frameCounter >= 285) {
    // Setze die Hintergrundfarbe auf Rosa
    background(260, 100, 70, 10); // huewert: farbe,sättigung, helligkeit
  } else {
    // Berechne die durchschnittliche Helligkeit des Spektrums
    let spectrumAvg = calculateSpectrumAverage(fft.analyze());

    // Passe die Hintergrundfarbe basierend auf der durchschnittlichen Helligkeit an
    let hueValue = map(spectrumAvg, 0, 50, 0, 80); // Hue-Wert zwischen 0 und 360
    let backgroundColor = color(10, 100, hueValue); // Sättigung und Helligkeit bleiben konstant
    background(backgroundColor);
  }

  // Funktion zur Berechnung des durchschnittlichen Spektrumwerts
  function calculateSpectrumAverage(spectrum) {
    let sum = 0;
    for (let i = 0; i < spectrum.length; i++) {
      sum += spectrum[i] / 2;
    }
    return sum / spectrum.length;
  }
  pop()
  //FARBE BACKGROUND ENDE

  //SOUND
  let spectrum = fft.analyze();


  //ANFANGSLINIEN LAUT START
  for (let a = 0; a < spectrum.length; a++) {
    // Bewege die Linien basierend auf dem Spektrum
    startX += map(spectrum[a], 0, 128, -10, 2);//20 ist auch no cool
    startY += map(spectrum[a], 0, 128, -10, 2);
    endX += map(spectrum[a], 0, 128, -10, 2);
    endY += map(spectrum[a], 0, 128, -10, 2);

    push();
    // Begrenze die Positionen innerhalb des Canvas
    startX = constrain(startX, 0, 300);
    startY = constrain(startY, 0, 300);
    endX = constrain(endX, 0, width);
    endY = constrain(endY, 0, height);

    push()
    // Zeichne die Linien
    stroke(r, g, b, 100);
    line(startX, startY, endX, endY);

    // pick a new color
    r += random(-5, 5);
    g += random(-5, 5);
    b += random(-5, 5);

    r = constrain(r, 100, 255);//255
    g = constrain(g, 100, 255);
    b = constrain(b, 100, 1255);

    // move a bit
    startX += deltaStartX;
    startY += deltaStartY;
    endX += deltaEndX;
    endY += deltaEndY;

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
    pop();
  }
  //ANFANGSLINIEN LAUT ENDE

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
    stroke("pink");
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
    push();
    fill(0);
    strokeWeight(2);
    point(points[z].x, points[z].y);
    pop();
    // Punkt nach unten bewegen
    points[z].y += spectrum[z] / 15;

    // // Wenn der Punkt den unteren Rand erreicht, setze ihn wieder nach oben
    // if (points[z].y > height) {
    //   points[z].y = random(-100, 0);
    //   points[z].x = random(width);
    // }
  }




}


