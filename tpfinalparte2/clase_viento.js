class viento {
  constructor(lx, ly, lancho, lalto, img) {
    this.lx = lx;
    this.ly = random (-500, -1000);
    this.lancho = 30;
    this.lalto = 25;
    this.vel = random(1, 3);
    this.golpea = true;
    this.imagen = img;
  }


  reiniciar() {
    this.ly = -this.lalto;
    this.golpea = true;
    this.lx = random(width);
  }


  mostrarViento() {
    image(this.imagen, this.lx, this.ly, this.lancho, this.lalto);
  }


  Cae() {
    this.ly += this.vel;
    if (this.ly > height) {
      this.reiniciar();
    }
  }
}
