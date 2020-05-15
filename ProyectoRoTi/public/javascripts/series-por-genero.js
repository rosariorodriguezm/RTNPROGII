
var urlParams = new URLSearchParams(location.search);
var idBuscado = urlParams.get('genero')
var nombreGenero = urlParams.get('name')
var api_key = "60be6317b0012697cb25d6ce427de920"

//Inserto el genero buscado en el titulo
document.querySelector("#titulo-genero").innerText += " "+ nombreGenero
fetch("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=popularity.desc&page=1&with_genres="+idBuscado)
.then(function(response){
  return response.json()
})
.then(function(datos){
  console.log(datos.results);
  var resultados = datos.results;
  var titulo = ""
  var listado = document.querySelector("#lista-series")


  if (resultados.length > 0) {
    for (var i = 0; i < datos.results.length; i++) {
      titulo = resultados[i].name
      var id = resultados[i].id
      var posterURL = "https://image.tmdb.org/t/p/original"+resultados[i].poster_path


    listado.innerHTML += `
    <a href='detalle.html?id=${id}'>
    <img class="serieGen" src="${posterURL}">
    </a>
    `
  if (resultados[i].poster_path === null) {
      listado.innerHTML += `
    <h2>${titulo}</h2>
    <img src='/images/no-disponible.png' width="100">
      `
    }
    }
  }
})
.catch(function(error){
  console.log("Error" + error);
})