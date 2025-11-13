class Boton {
  constructor(bx, by, ancho, alto ) {
    this.bx = 240;
    this.by = 215;
    this.ancho = 160;
    this.alto = 50;
  }

  presionarBoton() {
    return mouseX > this.bx && mouseX < this.bx + this.ancho && mouseY > this.by && mouseY < this.by + this.alto;
  }
}
