window.addEventListener('load',function(){

    // SELECCION DE GENERO
    var listaGeneros = document.querySelector('#genero-elegido');
    // var listaDeNoGeneros = document.querySelector('#genero-excluido');
  
    var api_key = "60be6317b0012697cb25d6ce427de920"
    fetch("https://api.themoviedb.org/3/genre/tv/list?api_key="+api_key+"&page=1")
    .then(function(response) {
     return response.json()
    })
    .then(function(informacion){
      // console.log(informacion);
       var generos = informacion.genres;
  
       for (var i = 0; i < generos.length ;i++) {
         listaGeneros.innerHTML += `
          <option value="${generos[i].id}">${generos[i].name}</option>
          `
         // listaDeNoGeneros.innerHTML += `
         //  <option value="${generos[i].id}">${generos[i].name}</option>
         //  `
        }
      })
    .catch(function(error){
      console.log("Error: " + error);
    })
  
    // Capturamos el formulario y sus campos y evitamos que se mande vacio
    var elFormulario = document.querySelector('.formulario-interior');
    var campoGenero = document.querySelector('#genero-elegido');
    var campoAnioEstreno = document.querySelector('#anio-estreno');
    var campoOrden = document.querySelector('#orden');
  
    elFormulario.onsubmit = function (event) {
      if (campoGenero.value == "" || campoAnioEstreno.value == "" || campoOrden.value == "") {
        event.preventDefault();
        alert("Llenar los campos");
      }
    }
  
    // Capturamos lo que vino en la query string
    var searchParams = new URLSearchParams(window.location.search);
    var genre = searchParams.get('genre')
    // var withoutG = searchParams.get('withoutGenres')
    var date = searchParams.get('date')
    var order = searchParams.get('orden')
  
    // Si vinieron cosas en la query string me armo la URL
    if (genre != null && date != null && order != null) {
      var api_key= "60be6317b0012697cb25d6ce427de920"
      var url_final = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&page=1`;
      url_final += `&sort_by=${order}`;
      url_final += `&first_air_date_year=${date}`;
      url_final += `&with_genres=${genre}`;
  
      // Con la URL armada vamos a hacer la llamada FETCH
  
      fetch(url_final)
        .then(function (response) {
          return response.json();
        })
        .then(function (informacion) {
          // Guardamos solo el array de resultados
          var arrayDeResultados = informacion.results;
  
          // Capturamos el div donde vamos a insertar los resultados
          var contenedorResultados = document.querySelector('.resultados-buscador-avanzado ul');
  
          // Generamos donde va a ir el contenido HTML
          var contenidoHTML = '';
  
          // Iteramos sobre el array de resultdos
          for (var i = 0; i < arrayDeResultados.length; i++) {
            console.log(`==== Resultado #${i} ====`);
            console.log(arrayDeResultados[i]);
  
            var imgURL = 'img/no-disponible.png';
  
            if (arrayDeResultados[i].poster_path != null) {
              imgURL = `https://image.tmdb.org/t/p/w500/${arrayDeResultados[i].poster_path}`
            }
  
            contenidoHTML += `
              <div id="serie_recomm">
              <section id="img_titulo">
                <h3 class="titulo">${arrayDeResultados[i].name}</h3>
                <img src="${imgURL}" width="40%" id="imagen-busq">
              </section>
              <section id="resumen">
                <p class="descripcion">${arrayDeResultados[i].overview}</p>
                <a href="detalle.html?id=${arrayDeResultados[i].id}">VER MÁS</a>
              </section>
              </div>
            `
          }
  
          if (arrayDeResultados.length == 0) {
            contenidoHTML = `<p>No hay resultados </p>`
          }
  
          // Al div contenedorResultados le vamos a insertar el contenido HTML
          contenedorResultados.innerHTML = contenidoHTML;
        })
        .catch(function (errors) {
          console.log(errors)
        })
    }
  
  
  })