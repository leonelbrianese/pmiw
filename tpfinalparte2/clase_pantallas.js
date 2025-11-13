class Pantallas {
  constructor(img_prot, img_viento) {
    this.pantalla = 0;
    this.boton = new Boton(244, 218, 153, 43); // boton
    this.imgProtagonista = img_prot;
    this.imgViento = img_viento;
    this.J = new juego(this.imgProtagonista, this.imgViento);
    this.sonidoReproducido = false;
  }

  reiniciarJuego() {
    if (sonido.isPlaying()) {
      sonido.stop();
    }
    this.pantalla = 0;
    this.J = new juego(this.imgProtagonista, this.imgViento);
    this.sonidoReproducido = false;
  }

  dibujar() {
    image(p[this.pantalla], 0, 0, 640, 480);
    if (this.pantalla === 3) {
      this.J.dibujar();
      this.J.detectarColision();
      this.ganar();
      this.perder();
    }
  }

  ganar() {
    if (this.J.ganaste && this.pantalla === 3) {
      this.pantalla = 5;
    }
  }

  perder() {
    if (this.J.perdiste && this.pantalla === 3) {
      this.pantalla = 6;
    }
  }

  AcBotones() {
    if (this.pantalla === 3) {
      return;
    }

    if (this.boton.presionarBoton()) {

      if (this.pantalla === 0 && !this.sonidoReproducido) {
        sonido.play();
        this.sonidoReproducido = true;
      }

      if (this.pantalla === 4) {
        this.reiniciarJuego();
      } else if (this.pantalla === 5 || this.pantalla === 6) {
        this.pantalla = 4;
      } else {
        this.pantalla = (this.pantalla + 1);
      }
    }
  }
}
