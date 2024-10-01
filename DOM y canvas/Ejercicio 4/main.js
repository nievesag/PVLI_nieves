// ---- Ej 4: Estado de la Party ----

// datos de la party
var party = [
  {name: 'Bat', id: 'bat1'},
  {name: 'Slime', id: 'slime'},
  {name: 'Bat', id: 'bat2'}
];

// onload ->
window.onload = function () {
// ----
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
  party.forEach(function (character) {
      var option = document.createElement('option');
      option.innerHTML = character.name; // nombre -> texto que se muestra
      option.value = character.id;       // id -> valor a devolver por selección
      select.appendChild(option);
  });
  
  // intercepta el evento submit del formulario y lo cancela para que el navegador no realice una nueva request al servidor
  var form = document.querySelector('form[name=killing-machine]');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      var charaID = form.querySelector('[name=chara]').value; // ahora accede al id el pj
      var li = list.querySelector('[data-charaid=' + charaID + ']');
      li.classList.add('dead');
  });
// ----
};