window.onload = function() {
    var listaGeneros = document.querySelector('#dropdown');
    
    var api_key = "60be6317b0012697cb25d6ce427de920"
    fetch("https://api.themoviedb.org/3/genre/tv/list?api_key="+api_key+"&page=1")
    .then(function(response){
        return response.json()
    })
    .then(function(informacion){
        var generos = informacion.genres;
        for (var i = 0; i< generos.length; i++){
            listaGeneros.innerHTML += 
           "<option value='"+generos[i].name+"'>"+generos[i].name+"</option>" 
        
        }
    })
}






















////////////////////////GUARDO NUEVO USUARIO////////////////////////// PROG I

//$(document).ready(function(){
  //  $('#regis').click(function(){
    //    /*Captura de datos escrito en los inputs*/
      //  var nombreNuevo = document.getElementById("nuevoNom").value;//2do --> id input
        //var emailNuevo = document.getElementById("nuevoEmail").value;





        /*Guardando los datos en el LocalStorage*/
  //      localStorage.setItem("nuevoNom", nombreNuevo); //2do --> variable
//        localStorage.setItem("nuevoEmail", emailNuevo);




        /*Limpiando los campos o inputs*/
   //     document.getElementById("nuevoNom").value = "";
     //   document.getElementById("nuevoEmail").value = "";



   // });
//});




