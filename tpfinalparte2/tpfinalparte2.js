/*
Leonel Brianese 93490/3 y Eduardo Toranza 122922/3
Comision 3
https://www.youtube.com/watch?v=iUcVR2reDOQ (tuve que poner el video en x1.5 porque pasaba los 5 minutos, por eso cuando muestro el juego no detecta la pantalla verde durante la colision)
*/
let P;
let sonido;
let reproduciendo = false;
let imgProtagonista;
let imgViento;
let p = [];


function preload() {
  soundFormats('mp3');
  sonido = loadSound('data/musica.mp3');
  for (let i = 0; i < 7; i++) {
    p.push(loadImage('data/p' + i + '.png'));
  }
  imgProtagonista = loadImage('data/p7.png');
  imgViento = loadImage('data/p8.png');
}

function setup() {
  createCanvas(640, 480);
  P = new Pantallas(imgProtagonista, imgViento);
  J = new juego();
  sonido.play()
}


function draw() {
  P.dibujar();
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
}

function keyPressed() {
  P.J.moverProtagonista(keyCode);
}

function mousePressed() {
  P.AcBotones();
}
