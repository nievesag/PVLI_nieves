// ---- Ej 2: Horda de gatos ----
/*
// Creando el objeto Image
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
*/

// Insertar HTML directamente como contenido del párrafo con id kittens
window.onload = function () 
{
  var button = document.getElementById('summon');
  button.addEventListener('click', 
                          function () 
                          {
                            var el = document.getElementById('kittens');
                            el.innerHTML="<img src=\"https://placekitten.com/g/200/200/\">";
                          });
};