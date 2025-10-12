// Leonel Brianese 93490/3 y Eduardo Toranza 122922/3
// Comision 3
// https://www.youtube.com/watch?v=K_J6YyzMGoA

let imagenes = [];
let textos = [];
let finales =[];
let decision = [];
let ult = [];
let Empieza = 0;
let font;
let boton = [];
let sonido;
let clickSonido = false;

function preload() {
  let pantallas = [
    "data/aa.jpg", "data/a1.jpg", "data/a2.jpg", "data/a3.jpg", "data/a4.jpg",
    "data/af.jpg", "data/b3.jpg", "data/bf.jpg", "data/bisf.jpg",
    "data/c4.jpg", "data/c5.jpg", "data/c6.jpg", "data/c7.jpg",
    "data/cf.jpg", "data/d7.jpg", "data/df.jpg", "data/zz.jpg"
  ];

  for (let i = 0; i < pantallas.length; i++) {
    let img = loadImage(pantallas[i]);
    imagenes.push(img);
    
    sonido = loadSound('data/musica.mp3');
  }
  textos = loadStrings("data/textos.txt");
  boton = [ "Continuar", "Finalizar", "Pulse R\n para reiniciar", "Comenzar"]
  decision = [ "Quedarse", "Irse", "Enfentar", "Esconderse", "Aceptar", "Rechazar", "Calmarlo", "Desafiarlo", "Taparse\nlos oidos", "Escucharlas" ]
  ult = ["Obra: La Odisea.\nAutor: Homero.\nAlumnos: Leonel Brianese y Eduardo Toranza.\nImagenes: Google Geminis.", ]
}

function setup() {
  createCanvas(640, 480);
  textFont ('Georgia');
}

function draw() {
  background(220);
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY); // mouse

  // Inicio
  inicio();
  Todo();
}
