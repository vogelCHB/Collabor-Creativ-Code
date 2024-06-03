

let rects = [];
let numRects = 100;
let rectWidth = 1;
let rectHeight = 30;
let amplitude = 400; // Amplitude der Bewegung

let rectHeight2 = 500;

function preload() {
  // img = loadImage("img.png");

  sound = loadSound("jazz.mp3");
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
}



function draw() {
  background(0, 0, 250); //farbe grau, mit leichtem blau/grünstich
  noFill();
  stroke(200, 30, 20);


  let spectrum = fft.analyze();



  for (let i = 0; i < numRects; i++) {
    let r = rects[i];

    // Bewege das Rechteck leicht auf und ab um die Basis-Y-Position
    r.y = r.baseY + sin(spectrum[i] * 0.1 + i) * amplitude;

    // Zeichne das Rechteck
    push();
    translate(r.x, r.y);
    rect(0, 0, rectWidth, rectHeight);
    pop();
  }





  for (let i = 0; i < numRects; i++) {
    let r = rects[i];

    // Bewege das Rechteck leicht auf und ab um die Basis-Y-Position
    r.y = r.baseY + sin(frameCount * 0.1 + i) * amplitude;

    // Zeichne das Rechteck
    push();
    translate(r.x, r.y);
    rect(4, 0, rectWidth, rectHeight2);
    pop();
  }
}
