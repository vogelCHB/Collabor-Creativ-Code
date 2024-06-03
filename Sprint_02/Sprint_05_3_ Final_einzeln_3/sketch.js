//tiramisu:
let Zutaten = ["KAFFEE", "ZUCKER", "AMARETTO", "EIGELB", "SALZ", "MARSCAPONE", "RAHM", "BISQUITS", "KAKAO"];
let kaffeeY = 20; // Y-Position von "Kaffee"
let zuckerY = 20;
let amarettoY = 20;
let eigelbY = 20;
let salzY = 20;
let marscaponeY = 20;
let rahmY = 20;
let buisquisY = 20;
let kakaoY = 20;

let Menge = ["600ML", "2EL", "6EL", "4", "PRISE", "750G", "100G", "250G", "PUDERN"];
let sechshmlY = 460; // Y-Position von "1El" 
let zweielY = 460; // Y-Position von "100g" 
let sechselY = 460;
let vierY = 460;
let priseY = 460;
let siebenfuenfhgY = 460;
let hundergY = 460;
let zwei5gY = 460;
let pudernY = 460;

let targetY = 20; // Ziel-Y-Position von "Kaffee" MENGE
let targetY2 = 460; //ZUTATEN
let targetY3 = 460; //ZUTATEN
let easing = 0.05;




//rüebli:
let Zutaten2 = ["RÜEBLI", "MEHL", "BUTTER", "BACKPULVER", "KARDAMON", "NELKEN", "ZIMT", "MANDELN", "ZITRONE", "EIER"];
let ruebli2Y = 20;
let mehl2Y = 20;
let butter2Y = 20;
let bpulber2Y = 20;
let kardamon2Y = 20;
let nelken2Y = 20;
let zimt2Y = 20;
let mandelnY = 20;
let zitrone2Y = 20;
let eier2Y = 20;

let Menge2 = ["250G", "350G", "200G", "2TL", "0.75TL", "0.5TL", "3TL", "300G", "EINE", "VIER"];

let zweifuenfG2Y = 480;
let dreifuenfG2Y = 480;
let zweihG2Y = 480;
let zweitl2Y = 480;
let nullkommasiebenfuenftl2Y = 480;
let nullkommafuenftl2Y = 480;
let dreitl2Y = 480;
let dreihGG2Y = 480;
let eine2Y = 480;
let vier2Y = 480;


let target2Y = 20; // Ziel-Y-Position von "Kaffee" MENGE
let target2Y2 = 480; //ZUTATEN
let target2Y3 = 480; //ZUTATEN






let drawRect = false; // Variable, um zu überprüfen, ob das Rechteck gezeichnet werden soll
let rectOpacity = 0; // Opazität des Rechtecks

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  let button = createButton('TIRAMISU');
  button.position(180, 310);
  button.style('border', 'none');
  button.style('background', 'transparent');
  button.style('font-size', '24px');
  button.style('color', 'rgb(212, 145, 140)');
  button.mousePressed(moveZutaten);

  let button2 = createButton('RÜEBLICAKE');
  button2.position(180, 280);
  button2.style('border', 'none');
  button2.style('background', 'transparent');
  button2.style('font-size', '24px');
  button2.style('color', 'rgb(235, 125, 52)');
  button2.mousePressed(moveZutaten2);
}

function draw() {
  background(247, 215, 215, 5);

  fill(0);
  textSize(15);

  let x = 80;
  let y = 20;
  for (let i = 0; i < Zutaten.length; i++) {
    let wordWidth = textWidth(Zutaten[i]);
    if (x + wordWidth > width) { // Wenn das Wort den rechten Rand überschreitet
      x = 80; // Setze X-Position zurück
      // y += 20; // Gehe zur nächsten Zeile //benötigt es nicht!
    }

    //text(Zutaten[i], x, y); //benötigt es glaube ich nicht

    if (Zutaten[i] === "KAFFEE") {
      kaffeeY += (targetY - kaffeeY) * easing;
      text(Zutaten[i], x, kaffeeY);

    } else if (Zutaten[i] === "ZUCKER") {
      zuckerY += (targetY - zuckerY) * easing;
      text(Zutaten[i], x, zuckerY);

    }
    else if (Zutaten[i] === "AMARETTO") {
      amarettoY += (targetY - amarettoY) * easing;
      text(Zutaten[i], x, amarettoY);

    }
    else if (Zutaten[i] === "EIGELB") {
      eigelbY += (targetY - eigelbY) * easing;
      text(Zutaten[i], x, eigelbY);
    }
    else if (Zutaten[i] === "SALZ") {
      salzY += (targetY - salzY) * easing;
      fill(0);
      text(Zutaten[i], x, salzY);
    }

    else if (Zutaten[i] === "MARSCAPONE") {
      marscaponeY += (targetY - marscaponeY) * easing;
      text(Zutaten[i], x, marscaponeY + 20);
    }
    else if (Zutaten[i] === "RAHM") {
      rahmY += (targetY - rahmY) * easing;
      text(Zutaten[i], x, rahmY + 20);
    }
    else if (Zutaten[i] === "BISQUITS") {
      buisquisY += (targetY - buisquisY) * easing;
      text(Zutaten[i], x, buisquisY + 20); // es wird bei den if Funktionen das Wort nochmals gezeichnet, damit es überlappend ist +20, wie Y
    }

    else if (Zutaten[i] === "KAKAO") {
      kakaoY += (targetY - kakaoY) * easing;
      text(Zutaten[i], x, kakaoY + 20);

      if (drawRect) { // Wenn drawRect true ist, zeichne das Rechteck
        fill(255, rectOpacity);
        noStroke();
        //rect(0, 0, 400, 100);
        rectOpacity += (255 - rectOpacity) * 0.07;
      }
    }
    else {
      fill(0);
      text(Zutaten[i], x, y);; // Andere Zutaten bleiben auf ihrer ursprünglichen Y-Position
    }
    x += textWidth(Zutaten[i]) + 10; // Abstand zwischen den Wörtern
  }

  let x2 = 80;
  let y2 = 480;

  for (let i = 0; i < Menge.length; i++) {
    let wordWidth = textWidth(Menge[i]);
    if (x2 + wordWidth > width) { // Wenn das Wort den rechten Rand überschreitet
      x2 = 80; // Setze X-Position zurück
      //   // y2 += 20; // Gehe zur nächsten Zeile //benötigt es nicht
    }
    // text(Menge[i], x2, y2); //braucht es glaube ich nicht

    if (Menge[i] === "600ML") {
      sechshmlY += (targetY2 - sechshmlY) * easing;
      text(Menge[i], x2, sechshmlY); // Verwende die angepasste Y-Position für "1El"
    }
    else if (Menge[i] === "2EL") {
      zweielY += (targetY2 - zweielY) * easing;
      text(Menge[i], x2 - 20, zweielY);
    }
    else if (Menge[i] === "6EL") {
      sechselY += (targetY2 - sechselY) * easing;
      text(Menge[i], x2 - 15, sechselY);
    }

    else if (Menge[i] === "4") {
      vierY += (targetY2 - vierY) * easing;
      text(Menge[i], x2 + 10, vierY);
    }
    else if (Menge[i] === "PRISE") {
      priseY += (targetY2 - priseY) * easing;
      text(Menge[i], x2 + 22, priseY);
    }

    else if (Menge[i] === "750G") {
      siebenfuenfhgY += (targetY3 - siebenfuenfhgY) * easing;
      text(Menge[i], x2 - 364, siebenfuenfhgY + 20);
    }

    else if (Menge[i] === "100G") {
      hundergY += (targetY3 - hundergY) * easing;
      text(Menge[i], x2 + 116, hundergY + 20);
    }

    else if (Menge[i] === "250G") {
      zwei5gY += (targetY3 - zwei5gY) * easing;
      text(Menge[i], x2 + 93, zwei5gY + 20);
    }

    else if (Menge[i] === "PUDERN") {

      pudernY += (targetY3 - pudernY) * easing;
      text(Menge[i], x2 + 94, pudernY + 20);

    }

    else {
      text(Menge[i], x2, y2); // Andere Mengen bleiben auf ihrer ursprünglichen Y-Position
    }
    x2 += textWidth(Menge[i]) + 42;

  }


  let xx = 80;
  let yy = 20;
  for (let i = 0; i < Zutaten2.length; i++) {
    let wordWidth = textWidth(Zutaten2[i]);
    if (xx + wordWidth > width) { // Wenn das Wort den rechten Rand überschreitet
      xx = 80; // Setze X-Position zurück
      // y += 20; // Gehe zur nächsten Zeile //benötigt es nicht!
    }

    if (Zutaten2[i] === "RÜEBLI") {
      ruebli2Y += (target2Y - ruebli2Y) * easing;
      fill(0);
      text(Zutaten2[i], xx, ruebli2Y + 40);

    } else if (Zutaten2[i] === "MEHL") {
      mehl2Y += (target2Y - mehl2Y) * easing;
      text(Zutaten2[i], xx, mehl2Y + 40);

    }
    else if (Zutaten2[i] === "BUTTER") {
      butter2Y += (target2Y - butter2Y) * easing;
      text(Zutaten2[i], xx, butter2Y + 40);

    }

    else if (Zutaten2[i] === "BACKPULVER") {
      bpulber2Y += (target2Y - bpulber2Y) * easing;
      text(Zutaten2[i], xx, bpulber2Y + 40);

    }
    else if (Zutaten2[i] === "KARDAMON") {
      kardamon2Y += (target2Y - kardamon2Y) * easing;
      text(Zutaten2[i], xx, kardamon2Y + 40);
    }
    else if (Zutaten2[i] === "NELKEN") {
      nelken2Y += (target2Y - nelken2Y) * easing;
      fill(0);
      text(Zutaten2[i], xx, nelken2Y + 60);
    }
    else if (Zutaten2[i] === "ZIMT") {
      zimt2Y += (target2Y - zimt2Y) * easing;
      fill(0);
      text(Zutaten2[i], xx, zimt2Y + 60);
    }

    else if (Zutaten2[i] === "MANDELN") {
      mandelnY += (target2Y - mandelnY) * easing;
      text(Zutaten2[i], xx, mandelnY + 60);
    }
    else if (Zutaten2[i] === "ZITRONE") {
      zitrone2Y += (target2Y - zitrone2Y) * easing;
      text(Zutaten2[i], xx, zitrone2Y + 60);
    }

    else if (Zutaten2[i] === "EIER") {
      eier2Y += (target2Y - eier2Y) * easing;
      fill(0);
      text(Zutaten2[i], xx, eier2Y + 60);

      if (drawRect) { // Wenn drawRect true ist, zeichne das Rechteck
        fill(255, rectOpacity);
        noStroke();
        // rect(0, 0, 400, 100);
        rectOpacity += (255 - rectOpacity) * 0.07;
      }
    }
    else {
      fill(0);
      text(Zutaten2[i], xx, yy);; // Andere Zutaten bleiben auf ihrer ursprünglichen Y-Position
    }
    xx += textWidth(Zutaten2[i]) + 10; // Abstand zwischen den Wörtern




  }


  // Menge2:
  let xx2 = 80;
  let yy2 = 480;

  for (let i = 0; i < Menge2.length; i++) {
    let wordWidth = textWidth(Menge[i]);
    if (xx2 + wordWidth > width) { // Wenn das Wort den rechten Rand überschreitet
      xx2 = 80; // Setze X-Position zurück

    }


    if (Menge2[i] === "250G") {
      zweifuenfG2Y += (target2Y3 - zweifuenfG2Y) * easing;
      fill(0);
      text(Menge2[i], xx2, zweifuenfG2Y - 40); // Verwende die angepasste Y-Position für "1El"
    }
    else if (Menge2[i] === "350G") {
      dreifuenfG2Y += (target2Y3 - dreifuenfG2Y) * easing;
      text(Menge2[i], xx2 - 15, dreifuenfG2Y - 40);
    }
    else if (Menge2[i] === "200G") {
      zweihG2Y += (target2Y3 - zweihG2Y) * easing;
      text(Menge2[i], xx2 - 42, zweihG2Y - 40);
    }

    else if (Menge2[i] === "2TL") {
      zweitl2Y += (target2Y3 - zweitl2Y) * easing;
      text(Menge2[i], xx2 - 50, zweitl2Y - 40);
    }
    else if (Menge2[i] === "0.75TL") {
      nullkommasiebenfuenftl2Y += (target2Y3 - nullkommasiebenfuenftl2Y) * easing;
      text(Menge2[i], xx2 - 8, nullkommasiebenfuenftl2Y - 40);
    }

    else if (Menge2[i] === "0.5TL") {
      nullkommafuenftl2Y += (target2Y2 - nullkommafuenftl2Y) * easing;
      text(Menge2[i], xx2, nullkommafuenftl2Y - 60);
    }

    else if (Menge2[i] === "3TL") {
      dreitl2Y += (target2Y2 - dreitl2Y) * easing;
      text(Menge2[i], xx2 - 10, dreitl2Y - 60);
    }

    else if (Menge2[i] === "300G") {
      dreihGG2Y += (target2Y2 - dreihGG2Y) * easing;
      text(Menge2[i], xx2 - 34, dreihGG2Y - 60);
    }

    else if (Menge2[i] === "EINE") {
      eine2Y += (target2Y2 - eine2Y) * easing;
      text(Menge2[i], xx2 - 30, eine2Y - 60);

    }

    else if (Menge2[i] === "VIER") {
      vier2Y += (target2Y2 - vier2Y) * easing;
      text(Menge2[i], xx2 - 30, vier2Y - 60);

    }

    else {
      text(Menge2[i], xx2, yy2); // Andere Mengen bleiben auf ihrer ursprünglichen Y-Position
    }
    xx2 += textWidth(Menge2[i]) + 42;

  }
}

function moveZutaten() {
  targetY += 200;
  targetY2 += -260;
  targetY3 += -220;

  setTimeout(() => { // Verzögere die Ausführung des Codes um 2 Sekunden
    drawRect = true; // Setze drawRect auf true, um das Rechteck zu zeichnen
  }, 1000);
}


function moveZutaten2() {
  target2Y += 80;
  target2Y2 += -240;
  target2Y3 += -320;


  setTimeout(() => { // Verzögere die Ausführung des Codes um 2 Sekunden
    drawRect = true; // Setze drawRect auf true, um das Rechteck zu zeichnen
  }, 1000);
}

