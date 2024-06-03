
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
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();

  sound.play();

  fft = new p5.FFT(0.8, 128); // 0.8 = easing, 128
  fft.setInput(sound);

  initializeLineVariables();
  noFill();
  background(32);
}

function draw() {
  let spectrum = fft.analyze();
  drawLines(spectrum);
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
