function getnews() {
  fetch('https://cors-anywhere-herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&apikey=e3192073b7d34b98bdf9940b004d9016',{headers: new Headers({"X-Requested-With":"gdygeydgyedg"})})
  .then(a => a.json())
    .then(response => {
        for (var i = 0; i < response.articles.length; i++)
      {
      document.getElementById("output").innerHTML += "<div style='padding-top: 20px;'><img style='float:left; width:150px;' src='"+response.articles[i].urlTolmage+ "'><h1>" + response.articles[i].title + "</h1>" + response.articles[i].source.name + "<br>" + response.articles[i].description + "<a href='" + response.articles[i].url + "' traget='_blank'>" + response.articles[i].url + "</a></div>";
    }
  })
}
