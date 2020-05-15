window.addEventListener('load', function(){

    // 1- leo storage
    var recuperacionStorage = localStorage.getItem("seriesFavoritas");
    
    // si no hay favs todavia
    if (recuperacionStorage == null) {
      seriesFavoritas = []; // creo lista vacia
    } else {
      seriesFavoritas = JSON.parse (recuperacionStorage);
    }
    
    
      var info = new URLSearchParams (location.search);
      var id = info.get("id");
    
      if (seriesFavoritas.includes(id)) {
        document.querySelector("#favoritos").innerHTML = "Eliminar de favoritos";
      }
      document.querySelector("#favoritos").onclick = function() {
        console.log("onclick");
          if (seriesFavoritas.includes(id)) {
            //lo saco
            var index = seriesFavoritas.indexOf(id);
            seriesFavoritas.splice(index,1);
            document.querySelector("#favoritos").innerHTML= "Agregar a favoritos ❤" }
             else {
              //lo agrego
              seriesFavoritas.push(id);
              document.querySelector("#favoritos").innerHTML="Eliminar de favoritos";
            }
    
            // escribir storage
            var infoStorage = JSON.stringify(seriesFavoritas);
            localStorage.setItem("seriesFavoritas", infoStorage)
            console.log(localStorage);
          }
    
    
    
    })