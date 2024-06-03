let rows = 40;
let cols = 40;
let grid = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      let x = j * 10
      let y = i * 10
      grid[i][j] = new PointObject(x, y);
    }
  }
}

function draw() {
  background(220);

  // Anzeigen jedes Punkt-Objekts
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].display();
    }
  }
}

class PointObject {
  constructor(x, y) {
    this.x = x
    this.y = y;
  }

  display() {

    fill(0); // Farbe des Punkts (schwarz)
    noStroke(); // Keine Umrandung

    let noiselevel1 = 50
    let noiselevel2 = 1

    let p = (map(this.x, 0, 400, noiselevel1, noiselevel2));
    let q = (map(this.y, 0, 400, noiselevel1, noiselevel2));

    let s = (noise(frameCount * 0.01)) * p;
    textSize(s);
    text("ei", this.x, this.y + random(4, 10)); // Punkt zeichnen


    //  let s =  (noise(frameCount * 0.01) *p *q);
    //   textSize(s);
    //   text("ei", this.x, this.y); // Punkt zeichnen







  }
}
