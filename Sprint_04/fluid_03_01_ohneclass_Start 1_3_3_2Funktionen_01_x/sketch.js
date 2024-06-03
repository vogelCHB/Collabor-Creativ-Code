let rects1 = [];
let rects2 = [];
let numRects = 100;
let rectHeight = 500;
let sound1, sound2;
let fft1, fft2;

function preload() {
  sound1 = loadSound("Hearbeat_89.mp4");
  sound2 = loadSound("jazz.mp3"); // Lade den zweiten Sound
}

function setup() {
  //let cnv = createCanvas(innerWidth, innerHeight - 10, SVG);
  let cnv = createCanvas(600, 800, SVG);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  sound1.play();
  sound2.play();

  fft1 = new p5.FFT(0.8, 128); // 0.8 = easing, 128 bins
  fft1.setInput(sound1);

  fft2 = new p5.FFT(0.8, 128); // Zweiter FFT für den zweiten Sound
  fft2.setInput(sound2);

  rectMode(CENTER);

  initializeRects(rects1, 10, 1, 100); // Rechtecke für Sound 1 mit Breiten zwischen 5 und 20
  initializeRects(rects2, 30, 1, 500); // Rechtecke für Sound 2 mit Breiten zwischen 10 und 30
}

function draw() {
  background(220);
  noFill();
  stroke(0);

  let spectrum1 = fft1.analyze();
  let spectrum2 = fft2.analyze();

  updateAndDisplayRects(rects1, spectrum1);
  updateAndDisplayRects(rects2, spectrum2, true); // Zweite Reihe Rechtecke mit anderer Farbe

  // SVG speichern bei jedem 10. Frame
  // if (frameCount % 10 === 0 && sound1.isPlaying() && sound2.isPlaying()) {
  //   save(`frame_${frameCount}.svg`);
  // }
}

function keyTyped() {
  if (key == 's') {
    let d = new Date();
    save(d + ".svg");
    noLoop();
  }
}

function initializeRects(rects, xSpacing, Width, Height) {
  for (let i = 0; i < numRects; i++) {
    rects.push({
      x: ((i + 1) * xSpacing),
      y: height / 2,
      rwidth: Width,
      rheight: Height
    });
  }
}

function updateAndDisplayRects(rects, spectrum, differentColor = false) {
  for (let i = 0; i < numRects; i++) {
    let r = rects[i];
    let freqIndex = floor(map(i, 0, 128, 0, spectrum.length));
    let amplitude = spectrum[freqIndex];
    r.y = map(amplitude, 0, 255, height, 0); // Skaliere die Amplitude auf die Höhe des Fensters

    // Zeichne das Rechteck
    push();
    translate(r.x, r.y);
    if (differentColor) {
      stroke(244, 252, 3); // Andere Farbe für die zweite Reihe
    }
    rect(0, 0, r.rwidth, r.rheight); // Verwendung der individuellen Breite
    pop();
  }
}
