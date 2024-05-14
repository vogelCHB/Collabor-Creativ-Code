function setup() {
  createCanvas(400, 400);
  strokeWeight(3);
  background(255);
  //colorMode(HSB);
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

    if (xreihe > 20) {
      let strichdicke = (sin(i / 20 + frameCount / 50) + 1) * 4;

      strokeWeight(strichdicke);
      let hue = map(sin(i / 20 + frameCount / 100), -1, 1, 0, 250);
      stroke(hue, 10, 100);
    } else if (yreihe < 20) {
      let strichdicke = (sin(i / -20 + frameCount / 300) + 1) * 4;

      strokeWeight(strichdicke);
      let hue = map(sin(i / 20 + frameCount / 100), -1, 1, 0, 360);
      stroke(hue, 200, 200);
    } else if (xreihe < 5) {
      let strichdicke = (sin(i / -20 + frameCount / 300) + 1) * 4;

      strokeWeight(strichdicke);
      let hue = map(sin(i / 20 + frameCount / 100), -1, 1, 0, 200);
      stroke(hue, 100, 200);
    } else {
      let strichdicke = (sin(i / 20 + frameCount / 20) + 1) * 4;

      strokeWeight(strichdicke);
      let hue = map(sin(i / 20 + frameCount / 400), -1, 1, 0, 100);
      stroke(hue, 10, 200);
    }

    line(xpos, ypos, xpos + 20, ypos);
  }
}
