var parametrosURL = new URLSearchParams(location.search);
var palabraBusqueda = parametrosURL.get("palabra_de_busqueda");

console.log(palabraBusqueda);
 //Insertamos en titulo la palabra buscada
 document.querySelector("#titulo-resultados").innerText += " " + palabraBusqueda


var api_key = "60be6317b0012697cb25d6ce427de920";
fetch("https://api.themoviedb.org/3/search/tv?api_key=" + api_key + "&language=en-US&page=1&query=" + palabraBusqueda)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var resultados = data.results;
    var posterURL=""
    var urlFija="https://image.tmdb.org/t/p/original"
    var titulo=""

      var ul = document.querySelector('ul#ResultadosBusqueda')

  //  console.log(resultados);
    if (resultados.length > 0) {
      for (var i = 0; i < resultados.length; i++) {
          var id = resultados[i].id
          titulo = resultados[i].name

      serie = '<li>'
      serie = '<a href="detalle.html?id=' + id + '">'
      if (resultados[i].poster_path === null) {
        serie+="<h2>"+titulo+"</h2>"+ "<img src='/images/no-disponible.png' >"
      } else {
        posterURL= urlFija + resultados[i].poster_path;
        serie +=   '<img src="'+posterURL+'" alt="">'
      }
      serie +=   '<div class="uk-position-center uk-panel"><h2 class="">'+'</h2></div>'
      serie += '</a>'
      serie += '</li>'

      ul.innerHTML += serie
    }
    } else {
        document.querySelector("#titulo-resultados").innerText = "No se encontraron series para: "  +palabraBusqueda
      //alert("No se encontraron series con ese Nombre");
    }
  })
  .catch(function (error) {
    console.log("El ERROR fue" + error);
  })
