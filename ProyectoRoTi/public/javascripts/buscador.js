window.addEventListener('load', function(){
    var formularioBusqueda = document.querySelector("#buscador");
    var campoBusqueda = document.querySelector("#buscador_input");
  
    formularioBusqueda.onsubmit = function (e) {
      if (campoBusqueda.value.length == 0) {
        e.preventDefault();
        alert("Campo necesario")
      }
    }
  })
  