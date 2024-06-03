let numRings = 10;
let centerX;
let centerYs = [];

function setup() {
  createCanvas(500, 500);


  // Initialisiere die y-Positionen für jeden Kreis
  for (let i = 0; i < numRings; i++) {
    centerYs.push(noise(height)); // Zufällige y-Position für jeden Kreis
  }

  centerX = width / 2;
}

function draw() {
  background(248,192,172,10);

  // Berechne die y-Positionen für jeden Kreis basierend auf dem Sinuswert
  for (let i = 0; i < numRings; i++) {
    let dd = sin(frameCount / (100 + i * 10)); // Verwende eine eindeutige Frequenz für jeden Kreis
    let nv = map(dd, -1, 1, 100, height-200);

    let centerY = centerYs[i]; // Verwende die gespeicherte y-Position für diesen Kreis
    let radius = 150 - i * 10; // Ändere den Radius entsprechend des Kreisindexes

    noFill();
    strokeWeight(2);
    stroke(200);
    ellipse(centerX, centerY + nv, radius * 3, radius); // Zeichne den Kreis
  }
}