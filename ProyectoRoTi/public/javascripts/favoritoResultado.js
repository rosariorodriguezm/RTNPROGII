window.onload= function () {
    var recuperacionStorage = localStorage.getItem("seriesFavoritas");
    var api_key = "60be6317b0012697cb25d6ce427de920"
  
  
      var seriesFavoritas = JSON.parse (recuperacionStorage);
      console.log(seriesFavoritas);
  
  
      for (var i = 0; i < seriesFavoritas.length; i++) {
        fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritas[i] + "?api_key="+api_key)
  
  
        .then(function(response) {
         return response.json()
        })
  
  
        .then(function(information) {
            console.log(information);
           var favorita = document.querySelector("#favs");
           var urlImg =  "https://image.tmdb.org/t/p/original" + information.poster_path;
           var titulo = information.name
           var id =  information.id
           var descripcion = information.overview;
  
           favorita.innerHTML += `
              <h2>${titulo}</h2>
              <div id="foto_info">
              <section class="info_serie">
                <a href="detalle.html?id=${id}">
                <img src="${urlImg}" width="250">
              </section>
              <section class="info_serie">
                <p>${descripcion}</p>
              </section>
              </div>
                `
  
              })
  
  
        .catch(function(error) {
         console.log("Error: " + error);
        })
      }
  
  
  
  }
  