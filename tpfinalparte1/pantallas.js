function inicio() {
  if (imagenes[Empieza]) {

    image(imagenes[Empieza], 0, 0, 640, 480);
    if (Empieza === 0) {
      fill(0);
      rect(428, 14, 190, 70);
      fill(250);
      textSize(25);
      textAlign(CENTER, CENTER);
      text(boton[3], 525, 50);
    }
  }
}
function Todo() {

  if (Empieza === 1) {
    texto();
    continuar();
  }

  if (Empieza === 2) { // quedarse o irse

    texto();
    bot();
    text(decision[0], 60, 60);
    text(decision[1], 580, 60);
  }

  if (Empieza === 3) { // esconderse o pelear
    bot();
    text(decision[3], 60, 60);
    text(decision[2], 580, 60);
    texto();
  }

  if (Empieza === 4) {
    // continuar arriba
    continuar();
    texto();
  }

  if (Empieza === 5) { // final muerte
    fin();
    texto();
    text(ult[1], 320, 432);
  }

  if (Empieza === 6) { // aceptar o rechazar
    texto();
    bot();
    textSize(14);
    text(decision[4], 57, 58);
    text(decision[5], 580, 58);
  }

  if (Empieza === 7) {   //final vuelta a casa
    fin();

    texto();
    text(ult[2], 320, 432);
  }

  if (Empieza === 8) { // final eolo muere
    fin();
    texto()
      text(ult[3], 320, 432);
  }

  if (Empieza === 9) { // calmar o pelear
    texto();

    bot();
    text(decision[6], 60, 60);
    text(decision[7], 580, 60);
  }

  if (Empieza === 10) {
    texto();
    continuar();
  }

  if (Empieza === 11) { // ignorar o escuchar
    texto();

    bot();
    text(decision[8], 60, 50);
    text(decision[9], 580, 60);
  }

  if (Empieza === 12) {
    texto();
    continuar();
  }

  if (Empieza === 13) { //final victoria
    fin();
    texto();
    text(ult[4], 320, 432);
  }

  if (Empieza === 14) {
    texto();
    continuar();
  }

  if (Empieza === 15) { //final derrota
    fin();

    texto();
    text(ult[5], 320, 432);
  }

  if (Empieza === 16) { //creditos
    fill(250);
    rect(75, 180, 480, 123);
    fill(0);
    textSize(20);
    text(ult[0], 310, 200 );
    textAlign(CENTER);

    fill(250);
    rect(265, 360, 126, 57);
    fill(0);
    textSize(20);
    text(boton[2], 325, 376 );
  }
}
