window.addEventListener('load',function(){
    //
  var api_key = "60be6317b0012697cb25d6ce427de920"
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key="+api_key+"&language=es-AR&page=1")
  .then(function(response) {
   return response.json()
  })
  .then(function(information) {
    var urlFija = "https://image.tmdb.org/t/p/original"
    var titulo = ""
    var posterURL = ""
    var serie = ""
    var ul = document.querySelector('ul#mayorPuntaje')
    for (var i = 0; i < information.results.length; i++) {
      titulo = information.results[i].name
      var id = information.results[i].id
      console.log(id);
      console.log(information.results[i].poster_path);
      posterURL = urlFija + information.results[i].poster_path
  
      serie = '<li  class="uk-animation-toggle" tabindex="0" >'
      serie += '<a href="/pages/detalle?id=' + id + '">'
      serie +=   '<img class="uk-animation-fade" src="'+posterURL+'" alt="">'
      serie +=   '<div class="uk-position-center uk-panel"><h2 class="">'+'</h2></div>'
      serie += '</a>'
      serie += '</li>'
  
      console.log(serie);
      ul.innerHTML += serie
    }
  })
  .catch(function(error) {
   console.log("Error: " + error);
  })
  
  
  
  })
  