var but = document.querySelector("#perfil") // #perfil-->boton

  but.onclick= function (){
  alert("¡Se ha iniciado sesión con éxito!")
}


///////////////////////////GUARDO PERFIL///////////////////////////////////////

$(document).ready(function(){
    $('#perfil').click(function(){
        /*Captura de datos escrito en los inputs*/
        var coment = document.getElementById("Nom").value;//nom --> id input
        var em = document.getElementById("email").value;





        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nom", coment); //coment --> variable
        localStorage.setItem("email", em);




        /*Limpiando los campos o inputs*/
        document.getElementById("Nom").value = "";
        document.getElementById("email").value = "";






    });
});

/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){
    $('#perfil').click(function(){
        /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("Nom");
        var em = localStorage.getItem("email");






        /*Mostrar datos almacenados*/
        document.getElementById("Nom").innerHTML = nombre;
        document.getElementById("email").innerHTML = em;






    });
});