// ---- Ej 4: Estado de la Party ----

// datos de la party
var party = [
  {name: 'Bat', id: 'bat1', hp: 10, maxHp: 20},
  {name: 'Slime', id: 'slime', hp: 50, maxHp: 50},
  {name: 'Bat', id: 'bat2', hp: 5, maxHp: 20}
];

// onload ->
window.onload = function () {
// ----

  // renderizado
  var lastRender = 0;
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');

  function render() {
    requestAnimationFrame(function (t) {
      // Borra todo...
      context.clearRect(0, 0, 800, 600);
      // ...y repinta.
      renderParty(t);

      // mucho ojo con utilizar console.log dentro de las funciones de render. 
      // Hacer esto 60 veces por segundo puede degradar el rendimiento de vuestra aplicación 
      // si tenéis las herramientas de desarrollador abiertas.
        // console.log('Delta time:', t - lastRender);

      lastRender = t;
      render();
    });
  }

  function renderParty(t) {
    console.log('Pintando la party en tiempo', t);
    renderBackground();
    renderCharacters(t); // pásale t a la función que pinta los enemigos.
    renderUI();
  }

  var bgImage = document.getElementById('background');
  function renderBackground() {
    context.drawImage(bgImage, 0, 0)
  }

  function renderCharacters(t) {
    var charaSpace = 800 / party.length;
    var centerOffset = charaSpace / 2;
    party.forEach(function (char, index) {
      var x = index * charaSpace + centerOffset;
      var y;
      if (char.hp === 0) {
        context.fillStyle = 'grey';
        y = 500; // en el suelo porque está muerto.
      } else if (char.name === 'Bat') {
        context.fillStyle = 'blue';
        y = 50 * Math.sin(t/100) + 300; // flotando en el aire.
      } else if (char.name === 'Slime') {
        context.fillStyle = 'green';
        y = 400; // en el suelo pero no en la tumba.
      }
      context.beginPath();
      context.arc(x, y, 50, 0, 2 * Math.PI);
      context.fill();
    });
  }

  function renderUI() {
    var width = 100;
    var semiWidth = width / 2;
    var height = 20;
    var semiHeight = height / 2;
    var charaSpace = 800 / party.length;
    var centerOffset = charaSpace / 2;
    party.forEach(function (char, index) {
      var x = index * charaSpace + centerOffset;
      var y = 500;
      if (char.hp > 0) {
        var lifeArea = Math.floor(char.hp / char.maxHp * width);
        context.fillStyle = 'red';
        context.fillRect(x - semiWidth, y - semiHeight, lifeArea, height);
        context.lineWidth = 3;
        context.strokeStyle = 'black';
        context.strokeRect(x - semiWidth, y - semiHeight, width, height);
      }
    });
  }

  render();

  // rellenar la lista ul
  var list = document.getElementById('party-monsters');
  party.forEach(function (character) {
      // meter este atributo cuando rellenemos la lista, y guardar ahí la id del pj
      var li = document.createElement('li');
      li.innerHTML = character.name + ' (<code>' + character.id + '</code>)';
      li.dataset.charaid = character.id;
      list.appendChild(li);
  }); 

  // genera un select para los pjs de la party
  var select = document.querySelector('select[name=chara]');
  let buttonChange = document.getElementById('boton');

  // para cambiar el button
  select.addEventListener('change', function (event) {
      event.preventDefault();
      var charaID = form.querySelector('[name=chara]').value;
      var li = list.querySelector('[data-charaid=' + charaID + ']');
      if (li.classList.contains('dead')) buttonChange.disabled = true; // si el <li> del personaje correspondiente tiene la clase dead -> desactiva
      else buttonChange.disabled = false; // -> mantiene activo
  });

  party.forEach(function (character) {
      var option = document.createElement('option');
      option.innerHTML = character.name; // nombre -> texto que se muestra
      option.value = character.id;       // id -> valor a devolver por selección
      select.appendChild(option);
  });
  
  function findCharById(charaID) {
    return party.filter(function (char) { return char.id === charaID; })[0];
 }

  // intercepta el evento submit del formulario y lo cancela para que el navegador no realice una nueva request al servidor
  var form = document.querySelector('form[name=killing-machine]');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      var charaID = form.querySelector('[name=chara]').value; // ahora accede al id el pj
      var character = findCharById(charID);
      character.hp -= 5;
      if(character.hp <= 0) {
        character.hp = 0; // corrige el valor en caso de que sea negativo.
        var li = list.querySelector('[data-charaid=' + charaID + ']');
        li.classList.add('dead');
        buttonChange.disabled = true; // desactiva el button
      }
  });
// ----
};