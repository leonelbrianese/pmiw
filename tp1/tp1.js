// Leonel Brianese 93490/3 Comision 3
// https://youtu.be/wAIHjHldyp0
let foto;
let colormouse = 0;
let cuadrado = 0;
let tamaño = 20;
let velocidad = 1;
let mas = 6;

function preload() {
  foto = loadImage('data/programacion.jpg');
}

function setup() {
 createCanvas(800, 400);
}

function draw() {
image(foto, 0, 0);

  // bordes y centrar cuadrados
  strokeWeight(10);
  rectMode(CENTER);

  // for principal
  for (let i = 0; i < 4; i++) {
    push();
    if (i === 1) {
      translate(700, 100);
    } else if (i === 2) {
      translate(500, 300);
    } else if (i === 3) {
      translate(700, 300);
    } else {
      translate(500, 100);
    }

    // cuadrados
    for (let l = 190; l > 0; l -= tamaño) {
      // color
      let f = dist(0, 0, l, l);
      cuadrado = map(f, 0, 190, 235, 50); // oscurecer los cuadrados

      // funcion mouse color
      colormouse = map(mouseY, 0, height, 0, 255);
      if (clickizquierdo()) {
        cuadrado -= colormouse;
      }
      Color(i, int(cuadrado));
      rect(0, 0, l, l);
    }
    pop();
  }
}
