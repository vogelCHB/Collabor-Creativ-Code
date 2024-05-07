function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100, 0, 200,2);

  let dd = sin(frameCount / 100); //sinus Werte zwischen 1 und minus -1
  let nv = map(dd, -0.5, 0.5, 150, 300);

  noFill();
  stroke(0, 200, 0, 10);

  for (let i = 0; i < 5; i++) {
    ellipse(width / 2, nv, nv, 80);
  }

  // let dd2 = sin(frameCount / 50); //sinus Werte zwischen 1 und minus -1
  // let nv2 = map(dd2, 0.5, 1, -100, -200);

  // noFill();
  // stroke(200, 200, 0, 10);

  // for (let i = 0; i < 5; i++) {
  //   ellipse(width / 2, nv2, nv2, 100);
  // }
}
