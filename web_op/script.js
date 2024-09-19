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

// este metodo no va y no se por que :(
function marcar(nombre) {
  var favoritas = document.getElementsByClassName(nombre);
  for (var i = 0; i < elementos.length; i++) 
  {
    favoritas.item(i).style.color = "magenta";
  }
}

function marcar() {
  document.getElementById("fav1").style.color = "magenta";
  document.getElementById("fav2").style.color = "magenta";
  document.getElementById("fav3").style.color = "magenta";
}

function desmarcar() {
  document.getElementById("fav1").style.color = "#9a78da";
  document.getElementById("fav2").style.color = "#9a78da";
  document.getElementById("fav3").style.color = "#9a78da";
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