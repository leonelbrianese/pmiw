function keyPressed() {
 
  if (keyPressed) {
    if (key === 'w' || key === 'W') {
      if (tamaño > 1) {
        tamaño -= 1;
      }
      if (tamaño > 15) {
        tamaño -= velocidad;
      }
    }

    if (key === 's' || key === 'S') {
      tamaño += velocidad;
    }

    if (tamaño === 10) {
      velocidad += mas;
    }

    if (key === 'r' || key === 'R') {
      tamaño = 20;
    }
  }
}

  function Color(x, y) {
    if (x === 0) {
      fill(y, 100 + y, y);
      stroke(y, 100 + y, y);  // verde
    } else if (x === 1) {
      fill(100 + y, y, y);
      stroke(100 + y, y, y);  // rojo
    } else if (x === 2) {
      fill(130 + y, 80 + y, y);
      stroke(130 + y, 80 + y, y);  // naranja
    } else if (x === 3) {
      fill(70 + y, y, 130 + y);
      stroke(70 + y, y, 130 + y);  // violeta
    }
  }

  function clickizquierdo() {
    return mouseButton === LEFT;
  }
