

let rects = [];
let numRects = 100;
let rectWidth = 1;
let rectHeight = 00;
let amplitude = 400; // Amplitude der Bewegung

let rectHeight2 = 500;


let numPoints = 100; // Anzahl der Punkte
let points = []; // Array für die Punkte


function preload() {
  // img = loadImage("img.png");

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

  //createCanvas(windowWidth, windowHeight);
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




}



function draw() {
  background(0, 0, 250, 40); //farbe grau, mit leichtem blau/grünstich
  noFill();
  stroke(200, 30, 20);





  let spectrum = fft.analyze();

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

  // Für jeden Punkt
  for (let z = 0; z < numPoints; z++) {
    // Punkt zeichnen
    fill(0);
    strokeWeight(5);
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


