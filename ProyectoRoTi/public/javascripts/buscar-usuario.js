// Capturamos el formulario y sus campos y evitamos que se mande vacio
var elFormulario = document.querySelector('.perfil_usuarios');
var campoNombre = document.querySelector('#nombre_buscado');
var campoMail = document.querySelector('#mail_buscado');

elFormulario.onsubmit = function (event) {
if (campoNombre.value == "" || campoMail.value == "") {
    event.preventDefault();
    alert("Llenar el campo Nombre o Mail");
  }
}

