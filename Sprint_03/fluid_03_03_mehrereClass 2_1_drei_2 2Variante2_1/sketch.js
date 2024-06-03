let midi_out;
let midi_enabled = false;
let sound1, sound2, sound3;
let visualizer, visualizer2, visualizer3;
let delayTime = 5000; // Verzögerungszeit in Millisekunden (hier 5 Sekunden)
let delayTime2 = 15000; // Verzögerungszeit für den dritten Visualizer

function preload() {

  sound1 = loadSound("Breathe (In The Air).mp3");
  sound2 = loadSound("Hearbeat_89.mp4");
  sound3 = loadSound("Tonpaft.mp4");
}

function setup() {
  let cnv = createCanvas(innerWidth, innerHeight - 10);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);

  sound1.setVolume(0.3); // Lautstärke von sound1 auf 50% setzen
  sound2.setVolume(1.0); // Lautstärke von sound2 auf 50% setzen
  sound3.setVolume(0.1);

  visualizer = new Visualizer(sound1, width / 6);
  visualizer2 = new Visualizer2(sound2, width / 2, delayTime);
  visualizer3 = new Visualizer3(sound3, (5 * width) / 6, delayTime2);
}

function draw() {
  background(102, 51, 0, 50); // farbe grau, mit leichtem blau/grünstich
  push()
  // Weißer Rand um die Visualisierungen
  stroke(0); // Weiß
  strokeWeight(100); // Dicke des Rahmens
  noFill();
  rect(width / 2, height / 2, width - 20, height - 20); // Rechteck um den Rand
  pop()

  push();
  translate(width / 6, height / 2 + 50); // Visualizer 1 nach links verschieben
  visualizer.display();
  pop();

  push();
  translate(width / 2, height / 2); // Visualizer 2 in die Mitte verschieben
  visualizer2.display();
  pop();

  push();
  translate((5 * width) / 6, height / 2); // Visualizer 3 nach rechts verschieben
  visualizer3.display();
  pop();
}

// Klasse für den Visualizer
class Visualizer {
  constructor(sound, x) {
    this.sound = sound;
    this.fft = new p5.FFT(0.8, 128);
    this.fft.setInput(this.sound);
    this.sound.play();
    this.x = x;
  }

  display() {
    noFill();
    strokeWeight(0.5);
    stroke(200, 30, 20);

    let spectrum = this.fft.analyze();
    let waves = this.fft.waveform();

    //rotate(frameCount * 0.2);

    for (let i = 0; i < 135; i++) {
      push();
      rotate(sin(frameCount + i) * spectrum[25] * 0.1);
      rect(0, 0, 400 - i * 3, 400 - i / 3, 135 - i);
      pop();
    }
  }
}

class Visualizer2 {
  constructor(sound, x, delay) {
    this.sound = sound;
    this.fft = new p5.FFT(0.8, 256);
    this.fft.setInput(this.sound);
    this.x = x;
    this.delay = delay;
    this.started = false;

    setTimeout(() => {
      this.sound.play();
      this.started = true;
    }, this.delay);
  }

  display() {
    if (!this.started) return; // Warten, bis der Sound gestartet wurde

    noFill();
    stroke(0, 50);//(200, 30, 20);

    let spectrum = this.fft.analyze();
    let waves = this.fft.waveform();

    rotate(frameCount * 0.0001);

    for (let i = 0; i < 200; i++) {
      push();
      rotate(sin(frameCount + i) * spectrum[10] * 0.1);
      rect(0, 0, 1000 - i * 3, 1000 - i * 6, 200 - i);
      pop();
    }
  }
}

class Visualizer3 {
  constructor(sound, x, delay) {
    this.sound = sound;
    this.fft = new p5.FFT(0.8, 256);
    this.fft.setInput(this.sound);
    this.x = x;
    this.delay = delay;
    this.started = false;

    setTimeout(() => {
      this.sound.play();
      this.started = true;
    }, this.delay);
  }

  display() {
    if (!this.started) return; // Warten, bis der Sound gestartet wurde

    noFill();
    strokeWeight(5)
    stroke(153, 255, 204, 10);

    let spectrum = this.fft.analyze();
    let waves = this.fft.waveform();

    for (let i = 0; i < 200; i++) {
      push();
      rotate(sin(frameCount + i) * spectrum[25] * 0.1);
      rect(0, 0, 600 - i * 3, 600 - i / 3, 200 - i);
      pop();
    }
  }
}
