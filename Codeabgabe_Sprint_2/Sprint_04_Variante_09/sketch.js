let rows = 40;
let cols = 40;
let grid = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100); // HSB Farbmodus mit 360 Farbton, 100 Sättigung, 100 Helligkeit

  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      let x = j * 10;
      let y = i * 10;
      grid[i][j] = new PointObject(x, y);
    }
  }
}

function draw() {
  background(0);

  // Anzeigen jedes Punkt-Objekts
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].display();
    }
  }
}

class PointObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    noStroke(); // Keine Umrandung

    let noiselevel1 = 100;
    let noiselevel2 = 1;

    let p = map(this.x, 0, 400, noiselevel1, noiselevel2);
    let q = map(this.y, 0, 400, noiselevel1, noiselevel2);

    // Verwenden von HSB-Farbwerten
    let hue = map(this.x, 100, 400, 100, 200); // Farbton basierend auf x-Koordinate
    let saturation = map(this.x, 0, 400, 0, 100); // Sättigung basierend auf y-Koordinate
    let brightness = map(this.x, 0, 50, 50, 100); // Helligkeit basierend auf Perlin-Rauschen

    fill(hue, saturation, brightness); // Setze die Füllfarbe

    let s = noise(frameCount * 0.01) * p * q;
    textSize(s);
    text("ei", this.x, this.y); // Punkt zeichnen
  }
}
