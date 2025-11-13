class juego {
  constructor(img_prot, img_viento) {
    this.prot = new Protagonista(307, 375, 115, 115, img_prot);
    this.viento = [];
    for (let i = 0; i < 20; i++) {
      this.viento[i] = new viento(random(width), random(-100, -1000), 30, 25, img_viento);
    }
    this.golpes = 0;
    this.perdiste = false;
    this.ganaste = false;
    this.tiempoInicio = 0;
    this.tiempoTranscurrido = 0;
    this.tiempoLimite = 30;
    this.vidasParaMostrar = 5;
    this.tiempoParaMostrar = 30;
    this.ultimoSegundo = 0;
  }

  dibujar() {
    this.prot.mostrar();
    for (let i = 0; i < 20; i++) {
      this.viento[i].mostrarViento();
      this.viento[i].Cae();
      fill(255, 200, 0);
      textSize(24);
      textAlign(LEFT, TOP);
      text("Tiempo: " + this.tiempoParaMostrar + "s", 10, 10);
      text("Vidas: " + this.vidasParaMostrar, width - 150, 10);
    }
  }
  iniciarJuego() {
    if (this.sonido && !this.sonido.isPlaying()) {
      this.sonido.loop();
    }
  }

  moverProtagonista(tecla) {
    this.tec = tecla;
    if (this.tec === LEFT_ARROW) {
      this.prot.moverI();
    } else if (this.tec === RIGHT_ARROW) {
      this.prot.moverD();
    }
  }

  detectarColision() {
    if (this.tiempoInicio === 0) {
      this.tiempoInicio = millis();
    }

    this.tiempoTranscurrido = (millis() - this.tiempoInicio) / 1000;
    if (millis() - this.ultimoSegundo > 1000) {
      if (this.tiempoParaMostrar > 0) {
        this.tiempoParaMostrar--;
      }
      this.ultimoSegundo = millis();
    }
    for (let i = 0; i < 20; i++) {
      if (this.viento[i].golpea) { //
        if (this.prot.colisiona(this.viento[i])) {

          background(0, 200, 25);

          this.viento[i].reiniciar();
          this.golpes++;

          this.vidasParaMostrar = 5 - this.golpes;
        }
        if (this.golpes >= 5) {
          this.perdiste = true;
        }
        if (this.tiempoTranscurrido >= this.tiempoLimite && !this.perdiste) {
          this.ganaste = true;
        }
      }
    }
  }
}
