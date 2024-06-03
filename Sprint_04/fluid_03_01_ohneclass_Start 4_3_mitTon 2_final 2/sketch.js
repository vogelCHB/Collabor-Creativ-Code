

let numRects1 = 100;
let numRects2 = 50;
let numRects3 = 100;
let rectWidth1 = 50;
let rectWidth2 = 200;
let rectWidth3 = 2000;
let rectHeight = 1;
let spacing = 10;
let spacing2 = 20
let sound1;
let fft1;
let sound2;
let fft2;
let sound3;
let fft3;




let rects = [];
let numRects = 10;
let rectWidth = 1;
let rectHeight1 = 30;
let amplitude = 400; // Amplitude der Bewegung

let rectHeight2 = 500;




function preload() {
  sound1 = loadSound("Tonpaft.mp4"); //schwarz
  sound2 = loadSound("Breathe (In The Air).mp3"); //weiss
  sound3 = loadSound("Hearbeat_89.mp4")//grau
  //sound2 = loadSound("Hearbeat_89.mp4"); //weiss
  //sound3 = loadSound("Breathe (In The Air).mp3"); //grau
}

function setup() {
  let cnv = createCanvas(600, 800);
  //let cnv = createCanvas(innerWidth, innerHeight - 10);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();

  sound1.play();
  sound2.play();
  sound3.play();

  fft1 = new p5.FFT(0.8, 128); //0.8 = easing, 128
  fft1.setInput(sound1);
  fft2 = new p5.FFT(0.8, 128); //0.8 = easing, 128
  fft2.setInput(sound2);
  fft3 = new p5.FFT(0.8, 128); //0.8 = easing, 128
  fft3.setInput(sound3);


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
  background(220, 40);

  let spectrum1 = fft1.analyze();
  let spectrum2 = fft2.analyze();
  let spectrum3 = fft3.analyze();

  // //SVG speichern bei jedem 10. Frame
  // if (frameCount % 10 === 0 && sound1.isPlaying() && sound2.isPlaying()) {
  //   save(`frame_${frameCount}.svg`);
  // }

  for (let i = 0; i < numRects1; i++) {
    push()
    noFill();
    stroke(0);

    translate(width / 2 + (i + 1) * spacing, height / 2 + 50);
    rotate(radians(spectrum1[i] % 360 * 50));
    rect(0, 0, rectWidth3, rectHeight);
    pop();


    for (let i = 0; i < numRects2; i++) {
      push()
      noFill();
      stroke(255);
      translate(width / 2 + (i + 1) * spacing2, height / 2);
      rotate(radians(frameCount % 360 * 20));
      rect(0, 0, spectrum2[i], rectHeight);
      pop()

    }

    for (let i = 0; i < numRects3; i++) {
      push()
      rectMode(CORNER);
      noFill();
      stroke(150, 150, 150);
      translate(width / 2, height / 2 + (i + 1) * spacing2);
      rotate(radians(frameCount % 360 * 0.1));
      rect(spectrum3[i], spectrum3[i], spectrum3[i], rectHeight);
      //rect(0, 0, spectrum3[i], rectHeight);
      pop()
    }





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

