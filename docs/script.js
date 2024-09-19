function quadrAlerta() {
  return "Jimmy: [from the cliff top after deciding not to be a mod, shouts] Me!";
}

function milagroAlerta() {
  return "Marcianito 2: [jugando al póker con las cartas del juego de las familias] Chino, china, chinito, negro, negrito. Full de negros chinos.";
}

function faroAlerta() {
  return "Thomas Wake : DAMN YE! Let Neptune strike ye dead, Winslow! HAAAAAARK!";
}

function brokeAlerta() {
  return "Jack Twist: No more beans.";
}

function luchaAlerta() {
  return "Narrator: [reading] I am Jack's colon.";
}

function clerksAlerta() {
  return "Caged Animal Masturbator: It's important to have a job that makes a difference, boys. That's why I manually masturbate caged animals for artificial insemination.";
}

function marcar() {
  var favoritas = document.getElementsByClassName("favoritas");

  for (var i = 0; i < favoritas.length; i++) 
  {
    favoritas.item(i).style.color = "#e0537e";
  }
  console.log(favoritas);
}

function desmarcar() {
  var favoritas = document.getElementsByClassName("favoritas");

  for (var i = 0; i < favoritas.length; i++) 
  {
    favoritas.item(i).style.color = "#9a78da";
  }
  console.log(favoritas);
}

function mostrar() {
  var ocultas = document.getElementsByClassName("duo");

  for (var i = 0; i < ocultas.length; i++) 
  {
    if (ocultas.item(i).style.visibility == 'hidden') 
    {
      ocultas.item(i).style.visibility = 'visible';
    }
  }
}

function ocultar() {
  var button = document.getElementsByClassName("duo");
  for (var i = 0; i < button.length; i++) 
  {
    if (button.item(i).style.visibility == 'visible') 
    {
      button.item(i).style.visibility = 'hidden';
    }
  }

  desmarcar();
}
