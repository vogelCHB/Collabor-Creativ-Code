function setup() {
  createCanvas(400, 400);
  strokeWeight(3);
  background(255);
}

function draw() {
  background(0);

  let gridX = 30;
  let gridY = 53;

  let abstandX = height / gridX; //min. 13
  let abstandY = width / gridY; // min. 8

  let anzahl = gridX * gridY;

  for (let i = 0; i < anzahl; i++) {
    let yreihe = i % gridY;

    //let xreihe = (i % gridX);
    let xreihe = (i - yreihe) / gridY;

    let xpos = xreihe * abstandX;
    let ypos = yreihe * abstandY;

    let strichdicke = (sin(i / 20 + frameCount / 50) + 1) * 4;
    //let strichdicke = (sin(1.3 + frameCount / 50) + 1) * 4;
    strokeWeight(strichdicke);

    let hue = map(sin(i / 20 + frameCount / 100), -1, 1, 0, 250);
    stroke(hue, 10, 100);

    line(xpos, ypos, xpos + 20, ypos);
  }
}
