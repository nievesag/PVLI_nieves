// ---- Ej 1: Hola mundo ----

/*
console.log("Hola, mundo!");

//document.body.innerHTML = '<h1>Hola, mundo!</h1>'; // Esto no saca nada en pantalla

window.onload = function ()  // Esto si
{
  document.body.innerHTML = '<h1>Hola, mundo!</h1>';
};
*/

// ---- Ej 2: Horda de gatos ----
window.onload = function () 
{
  var button = document.getElementById('summon');
  button.addEventListener('click', 
                          function () 
                          {
                            var img = new Image(); 
                            img.src = 'https://placekitten.com/g/200/200/', alt="GATO";
                            document.getElementById('kittens').appendChild(img);
                          });
};