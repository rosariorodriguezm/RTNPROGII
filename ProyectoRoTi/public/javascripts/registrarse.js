
////////////////////////GUARDO NUEVO USUARIO//////////////////////////

$(document).ready(function(){
    $('#regis').click(function(){
        /*Captura de datos escrito en los inputs*/
        var nombreNuevo = document.getElementById("nuevoNom").value;//2do --> id input
        var emailNuevo = document.getElementById("nuevoEmail").value;





        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("nuevoNom", nombreNuevo); //2do --> variable
        localStorage.setItem("nuevoEmail", emailNuevo);




        /*Limpiando los campos o inputs*/
        document.getElementById("nuevoNom").value = "";
        document.getElementById("nuevoEmail").value = "";



    });
});

