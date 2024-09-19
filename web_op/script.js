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

function desaparece(nombre) {
	var button = document.getElementById(nombre);
  button.style.visibility='hidden';
}

function marcar() {

  document.getElementById("favoritas").style.color = "magenta";

  /*
  var favoritas = document.getElementsByClassName(nombre);
  for (var i = 0; i < elementos.length; i++) 
  {
    favoritas.item(i).style.color = "magenta";
  }
    */
}

function esconder(nombre) {
  var button = document.getElementsByClassName(nombre); // guardas en button 
  for (var i = 0; i < button.length; i++) 
  {
    if (button.item(i).style.visibility == 'hidden') 
    {
      button.item(i).style.visibility = 'visible';
    }
    else 
    {
      button.item(i).style.visibility = 'hidden';
    }
  }
}