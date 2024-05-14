function setup() {
  createCanvas(400, 400);
  strokeWeight(3);
  background(255);
}

function draw() {
  background(220);

  let abstand = 20;

  /*for (let y = 0; y < height; y += abstand) {
    for (let x = 0 ; x < width ; x += abstand) {

      let strickdicke=(sin(y+x) + 1) * 4;
      strokeWeight(strickdicke);
       line(x, y, x+20, y);
  }
}*/

  let gridX = 20;
  let gridY = 53;

  let abstandX = height / gridX;
  let abstandY = width / gridY;

  let anzahl = gridX * gridY;

  for (let i = 0; i < anzahl; i++) {
    let yreihe = i % gridY;

    let xreihe = (i - yreihe) / gridY;

    let xpos = xreihe * abstandX;
    let ypos = yreihe * abstandY;

    let strickdicke = (sin(i / 20 + frameCount / 20) + 1) * 4;
    strokeWeight(strickdicke);

    line(xpos, ypos, xpos + gridX, ypos);
  }
}
