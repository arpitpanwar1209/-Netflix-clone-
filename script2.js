  // api key from TMDB

  const api ="api_key=3b7d38dc6cb6822fed848433181f976d";
  // base url of the site
  const base_url ="https://api.themoviedb.org/3";
  
  const banner_url ="'https://image.tmdb.org/t/p/original";
  const img_url ="https://image.tmdb.org/t/p/w185/1E5baAaEse26fej7uHcjOgEE2t2.jpg";//you can change "w185"to your preference
  
  
  //requests for movies data
  const requests ={
  
      fetchTrending:'${base_url}/trending/all/week?${api}&language=en-us',
      fetchNetflixMovies:'${base_url}/discover/tv?${api}&with_network=213',
      fetchActionMovies:'${base_url}/discover/movie?${api}&with_genres=28',
      fetchComedyMovies:'${base_url}/discover/movie?${api}&with_genres=35',
      fetchHorrorMovies:'${base_url}/discover/movie?${api}&with_genres=27',
      fetchRomanceMovies:'${base_url}/discover/movie?${api}&with_genres=10749',
      fetchDocumentariesMovies:'${base_url}/discover/movie?${api}&with_genres=99',
  };
  //used to truncate the 
  
  function truncate(str, n){
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  
  }
   //banner
  
   fetch(requests.fetchNetflixOrignals)
    .then((res)=> res.json())
  
  
    then((data) => {
      
    
  
  
  
   
    const setMovie =
    data.results[Math.floor(Math.random() * data.results.length - 1)];
  
  
  
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");
  
  
    banner.style.backgroundImage =
    "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
  })
  
  // movies row
  fetch(requests.fetchNetflixMovies)
  .then((res) => res.json())
  
  
  .then((data) => {
      const headrow = document.getElementById("headrow");
      const row = document.createElement("div");
  
      row.className = "row";
      row.classList.add("netflixrow");
  
      headrow.appendChild(row);
  
  
      const title = document.createElementNS("div");
  
  
  title.classname = "row__title";
  title.innerText = "NETFLIX ORIGINALS";
  
  
  row.appendchild(title);
  
  const row_posters = document.createElement("div");
  row_posters.className = "row__poster";
  row.appendChild(row_posters);
  
  
  
  data.results.forEach((movie) => {
  
      const poster = document.createElementNS("img");
      poster.className ="row__posterLarge";
  
      var s = movie.name.replace(/\s+/g,"");
  
      poster.id = s;
      poster.src =img_url + movie.poster_path;
      row_posters.appendChild(poster);
  });
  });
  
  //trending
  fetch(requests.fetchpopular)
  .then((res) => res.json())
  //top rated
  fetch(requests.fetchTrending)
  .then((res) => res.json())
  
  .then((data) => {
      const headrow = document.getElementById("headrow");
      const row = document.createElement("div");
      row.className = "row";
      headrow.appendChild(row);
  
  
  
      const title = document.createElement("h2");
      title.className ="row__title";
      title.innerText = "top Rated";
      row.appendChild(title);
      const row_posters =document.createElement("div");
  
      const row_poster = document.createElement("div");
      row_poster.className ="row__posters";
      row.appendChild(row_posters);
  
  
      data.results.forEach((movie) => {
  
          const poster = document.createElement("img");
          poster.className = "row__posterlarge";
          var s2 = movie.id;
  
          poster.id = s2;
          poster.src = img_url + movie.poster_path;
          row-poster.appendChild(poster);
          });
  });
  
  //action
  
  
  fetch(requests.fetchActionMovies)
  .then((res) => res.json())
  
  
  .then((data) =>{
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className ="row";
  
  
  headrow.appendChild(row);
  
  
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Action Movies";
  row.appendChild(title);
  
  
  const row__poster = document.createElement("div");
  row__poster.className = "row_posters";
  row.appendChild(row__poster);
  
  
  data.results.forEach((movie) =>{
      
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row__poster.appendChild(poster);
  });
  });
  //comedy
  fetch(requests.fetchcomedymovies)
  .then((res) => res.json())
  
  
  .then((data) => {
      const headrow = document.getElementById("headrow");
      const row = document.createElement("div");
      row.className = "row";
      headrow.appendChild(row);
  
  
      const title = document.createElement("h2");
      title.className = "row__title";
      title.innerText = "Comedy Movies";
      row.appendChild(title);
  
      const row_poster = document.createElement("div");
      row_poster.className = "row__posters";
      row.appendChild(row_posters);
  
  
  data.results.forEach((movie) => {
  
  const poster = document.createElement("img");
  poster.className = "row__poster";
  
  var s2 = mpvie.id;
  poster.id = s2;
  poster.src = img_url + movie.backdrop_path;
  row_posters.appendChild(poster);
  });
  });
  //horror
  fetch(requests.fetchHorrormovies)
  .then((res) => res.json())
  
  
  .then((data) => {
      const headrow = document.getElementById("headrow");
      const row = document.createElement("div");
      row.className = "row";
      headrow.appendChild(row);
  
  
      const title = document.createElement("h2");
      title.className = "row__title";
      title.innerText = "Horror Movies";
      row.appendChild(title);
  
      const row_poster = document.createElement("div");
      row_poster.className = "row__posters";
      row.appendChild(row_posters);
  
  
  data.results.forEach((movie) => {
  
  const poster = document.createElement("img");
  poster.className = "row__poster";
  var s2 = mpvie.id;
  poster.id = s2;
  poster.src = img_url + movie.backdrop_path;
  row_posters.appendChild(poster);
  });
  });
  //documentary
  fetch(requests.fetchdocumentariesmovies)
  .then((res) => res.json())
  
  
  .then((data) => {
      const headrow = document.getElementById("headrow");
      const row = document.createElement("div");
      row.className = "row";
      headrow.appendChild(row);
  
  
      const title = document.createElement("h2");
      title.className = "row__title";
      title.innerText = "documentaries Movies";
      row.appendChild(title);
  
      const row_poster = document.createElement("div");
      row_poster.className = "row__posters";
      row.appendChild(row_posters);
  
  
  data.results.forEach((movie) => {
  
  const poster = document.createElement("img");
  poster.className = "row__poster";
  var s2 = mpvie.id;
  poster.id = s2;
  poster.src = img_url + movie.backdrop_path;
  row_posters.appendChild(poster);
  });
});