class Protagonista {
  constructor(x, y, ancho, alto, img) {
    this.x = 303;
    this.y = 375;
    this.ancho = 115;
    this.alto = 115;
    this.imagen = img;
  }
  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  moverD() {
    if (this.x < width - 80) {
      this.x += 15;
    }
  }
  moverI() {
    if (this.x > -50) {
      this.x -= 15;
    }
  }
  colisiona(viento) {
    let izquierdaReal = this.x + 45;
    let derechaReal = this.x + 70;
    let arribaReal = this.y + 10;
    let abajoReal = this.y + 90;

    if (derechaReal >= viento.lx &&
      izquierdaReal <= viento.lx + viento.lancho &&
      abajoReal >= viento.ly &&
      arribaReal <= viento.ly + viento.lalto) {

      return true;
    }

    return false;
  }
}
