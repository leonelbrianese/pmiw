function controlarSonido(accion) { //funcion con parametros
  if (accion === 'iniciar' && !clickSonido) {
    sonido.loop();
    clickSonido = true;
  } else if (accion === 'detener' && clickSonido) {
    sonido.stop();
    clickSonido = false;
  }
}

function creditos() { // variable creditos
  Empieza = 16;
}

function seguir() {
  Empieza += 1;
}

function continuar() {
  fill(0);
  rect(255, 20, 100, 30);
  fill(250);
  textSize(20);
  text(boton[0], 305, 35 );
}

function bot() { //decisiones
  fill(0, 255, 0);
  rect(10, 40, 100, 40); // izq

  fill(255, 0, 0);
  rect(530, 40, 100, 40); // derecha

  textSize(15);
  fill(0);
}

function texto() {
  textAlign(CENTER, LEFT);
  textSize(14);
  fill(0);
  rect(70, 405, 500, 55);
  textSize(13);
  fill(250);
  text(textos[Empieza], 110, 425, 420, 110)
}

function fin() {

  fill(0, 255, 0);
  rect(241, 15, 128, 60);
  fill(0);
  textSize(25);
  text(boton[1], 305, 45);
}


function mousePressed() {

  if (Empieza === 0 && mouseX > 428 && mouseX < 618 && mouseY > 14 && mouseY < 84) {
    controlarSonido('iniciar');
    Empieza = 1;
  }


  else if (Empieza === 2 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80) {
    Empieza = 6; 
  }


  else if (Empieza === 3 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80) { 
    Empieza = 5; 
  }

  else if (Empieza === 4 && mouseX >255 && mouseX <356 && mouseY >20 && mouseY < 50) {
    Empieza = 6;
  } else if (Empieza === 6 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 85 ) {
    Empieza = 9 ;
  } else if (Empieza === 9 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 8; 
  } else if (Empieza === 11 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 14 ;
  }


  if ((Empieza == 1 || Empieza == 10 || Empieza == 12 || Empieza == 14) &&
    (mouseX > 255 && mouseX < 356 && mouseY > 20 && mouseY < 50) ||
    (Empieza == 2 || Empieza == 3 || Empieza == 6 || Empieza == 9 || Empieza == 11) &&
    (mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80)) {
    seguir();
  }


  //pantallas finales

  else if (Empieza == 5 || Empieza == 7 || Empieza == 8  || Empieza == 13 || Empieza == 15) {
    if (mouseX > 240 && mouseX < 370 && mouseY > 15 && mouseY < 75) {
      creditos();
    }
  }
}

function keyPressed() { //reiniciar
  if (Empieza === 16) {
    if (key === 'r' || key === 'R') {
      controlarSonido('detener');
      Empieza = 0;
    }
  }
}
