window.addEventListener('load',function(){
    var urlParams = new URLSearchParams(location.search);
  
    var id = urlParams.get('id');
  
    console.log(id);

  // FUNCION DE INFORMACION
    var api_key = "60be6317b0012697cb25d6ce427de920"
    fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key="+api_key+"&language=en-US")
    .then(function(response) {
     return response.json()
    })
  
    .then(function(information) {
        console.log(information);
       var detalleSerie = document.querySelector("#detalle-serie");
       var urlImg =  "https://image.tmdb.org/t/p/original" + information.poster_path;
       var titulo = information.name
       var descripcion = information.overview;
       var lenguaje = information.original_language
       var fechaEstreno = information.first_air_date
       var genero= information.genres
       var listaGenero = ""
 
       for (var i = 0; i < genero.length; i++) {
         listaGenero+= ' <a href="/pages/series-por-genero?genero='+ genero[i].id + '&name=' + genero[i].name + ' " >' + genero[i].name + '</a> ,'
       }
       detalleSerie.innerHTML = `
          <h2>${titulo}</h2>
          <div id="foto_info">
          <section class="info_serie">
            <img src="${urlImg}" width="250">
          </section>
          <section class="info_serie">
            <p>Lenguaje original: ${lenguaje} </p>
            <p>Fecha de estreno: ${fechaEstreno} </p>
            <p>Género: ${listaGenero}</p>
  
            <p>${descripcion}</p>
          </section>
          </div>
      `
          // FUNCION TEMPORADAS
  
      var temporadasSerie = document.querySelector(".temporadas");
     var temporadas = information.seasons
      var listaTemporadas = ""
      var fechaEstrenoTemp = ""
      var cantEpisodios = ""
  
  
      for (var i = 0; i < temporadas.length; i++) {
       listaTemporadas=  temporadas[i].name
       fechaEstrenoTemp = temporadas[i].air_date
       cantEpisodios = temporadas[i].episode_count
      console.log(listaTemporadas);
  
      temporadasSerie.innerHTML += `<li><a class="uk-accordion-title nombreTemp" href="#"> ${listaTemporadas}</a>
      <div class="uk-accordion-content">
      <section>
      <p class="infoTemp">Fecha de estreno: ${fechaEstrenoTemp}</p>
      <p class="infoTemp">Cantidad de episodios: ${cantEpisodios}</p>
      </section>
      </div>
      </li>
      `
     }
  
    })
  
    .catch(function(error) {
     console.log("Error: " + error);
    })
  
    // FUNCION DE TRAILER
  
    var apiVideo = "https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=60be6317b0012697cb25d6ce427de920&language=en-US";
  
    fetch(apiVideo)
      .then(function(response) {
       return response.json()
      })
      .then(function(information) {
        console.log("=======");
        
        if (information.results.length > 0) {
        var contTrailer = document.querySelector("#trailers");
  
        for (var i = 0; i < information.results.length; i++) {
  
        var iframe = '<iframe src="https://www.youtube.com/embed/' + information.results[i].key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        var urlVideo = 'https://www.youtube.com/watch?v=' + information.results[i].key;
  
        contTrailer.innerHTML += `
          <section id="videoTrailer">${iframe}</section>
        `
      }
    } else {
      var contTrailer = document.querySelector("#trailers")
      contTrailer.innerHTML += `
      <p id="sin_trailer">Este trailer no se encuentra disponible</p>
      `
    }
      })
  
      .catch(function(error) {
       console.log("Error: " + error);
      })

      //  COMENTARIOS
 //     var api_key = "60be6317b0012697cb25d6ce427de920"
 //    var urlParams = new URLSearchParams(location.search);
 //     var id = urlParams.get('id');
//    var reviewSerie = "https://api.themoviedb.org/3/tv/"+ id +"/reviews?api_key="+api_key+"&language=en-US&page=1"
  
 //     fetch(reviewSerie)
 //     .then(function(response){
 //       return response.json()
 //     })
 //     .then(function(respuesta){
 //       console.log(respuesta);
  
  //      if (respuesta.results.length > 0) {
  
//          var comentarios = document.querySelector("#reviews")
  
 //         for (var i = 0; i < respuesta.results.length; i++) {
  
   //       var contenido = respuesta.results[i].content
     //     var autor = respuesta.results[i].author
       //   comentarios.innerHTML += `
         //     <h3>Opiniones de otros usuarios</h3>
          //      <p> "${contenido}"</p>
  //              <p>Por ${autor}</p>
  
      //    `
        //  }
       // }
     //   else {
    //      var comentarios = document.querySelector("#reviews")
 //         comentarios.innerHTML = `
 //         <form>
   //       <label id="comentario_1"> ¡Sé el primero en dejar un comentario! </label>
 //           <textarea id="primer_comentario"></textarea>
    //        <button type="button" name="button" id="but_comment">Enviar</button>
      //    </form>
       //   `
     //     var coment = document.querySelector("#primer_comentario")
      //    var but = document.querySelector("#but_comment")
  
//            but.onclick= function (){
 //           alert("Gracias por tu comentario");
  
 //           }
  
  ///////////////////////////GUARDO COMENTARIOS///////////////////////////////////////
  
 // $(document).ready(function(){
  //    $('#but_comment').click(function(){
          /*Captura de datos escrito en los inputs*/
   //       var coment = document.getElementById("primer_comentario").value;
  
          /*Guardando los datos en el LocalStorage*/
    //      localStorage.setItem("primer_comentario", coment);
  
          /*Pongo comentario en pagina*/
     //     document.querySelector("#reviews").innerHTML =`
      //    <form>
       //   <label id="comentario_1"> ¡Dejá tu comentario! </label>
        //    <textarea id="primer_comentario"></textarea>
        //    <button type="button" name="button" id="but_comment">Enviar</button>
     //     </form>
   //       <h3>Opiniones de usuarios</h3>
    //      <p>${coment}</p>
    //      `
          /*Limpiando los campos o inputs*/
 //         document.getElementById("primer_comentario").value = "";
  
  //    });
  //});
  
  
  /////////////////////////////////////////////////////////////////////
  
  
 //       }
  //    })
  
      // FUNCION DE RECOMENDACION
  
     var apiRecomendaciones = "https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=60be6317b0012697cb25d6ce427de920&language=en-US&page=1"
  
     fetch(apiRecomendaciones)
       .then(function(response) {
        return response.json()
       })
       .then(function(information) {
         console.log(information);
         var opciones= ""
         var reco = document.querySelector('#recomendaciones')
         
         for (var i = 10; i < information.results.length; i++) {
           var id =  information.results[i].id
           opciones= "https://image.tmdb.org/t/p/original" + information.results[i].poster_path
           
          
           reco.innerHTML +=
           `<a href="/pages/detalle?id=${id}">
           <img class= "recomm" src="${opciones}" width="250">
           </a>`
          
          var sectionReco = document.querySelector("#contenedor-carrusel")
          var abracadabra = document.querySelector("#abracadabra")
  
            abracadabra.onclick= function (){
              if (sectionReco.style.display == "none") {
  
                sectionReco.style.display = "block";

              }else {
                sectionReco.style.display = "none";
  
              }
            }
  
         }
       })
  
       .catch(function(error) {
        console.log("Error: " + error);
       })
  
  
  
  
  })
  