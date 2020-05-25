// Capturamos el formulario y sus campos y evitamos que se mande vacio
var elFormulario = document.querySelector('.perfil_usuarios');
var campoNombre = document.querySelector('#nombre_buscado');
var campoMail = document.querySelector('#mail_buscado');
var campoSeguidoresSerie = document.querySelector('#serie_seguida');

elFormulario.onsubmit = function (event) {
  if (campoNombre.value == "" || campoMail.value == "") {
    event.preventDefault();
    alert("Llenar el campo Nombre o Mail");
  }
}

 // Capturamos lo que vino en la query string
 let searchParams = new URLSearchParams(window.location.search);
 let name = searchParams.get('name')
 // var withoutG = searchParams.get('withoutGenres')
 let email = searchParams.get('mail')
 let seguidorSerie = searchParams.get('seguidor')

 botonBuscar = document.getElementById('#search_user')

 // Si vinieron cosas en la query string me armo la URL
 if (name != null && email != null) {
    botonBuscar.innerHTML += `
    <a href="/pages/perfil-usuario?nombre=${name}&mail=${email}"></a>
    `}