var inputTitle = document.querySelector("#input-title"),
    inputGenre = document.querySelector("#input-genre"),
    inputDirector = document.querySelector("#input-director"),
    inputYear = document.querySelector("#input-year"),
    btnAddMovie = document.querySelector("#btn-add"),
    btnClearInputs = document.getElementById("btn-clear-fields"),
    outputArea = document.getElementById("output"),
    index = 1,
    movies = [],
    
    Movie = function movie(title, genre, director, year){
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.year = year;
        this.id = index++;
    };


btnAddMovie.addEventListener("click", function(){
    movies.push(new Movie(inputTitle.value, inputGenre.value, inputDirector.value, inputYear.value));
    console.log(movies);
    renderMovieList();
});

btnClearInputs.addEventListener("click", function(){
    inputDirector.value = "";
    inputTitle.value = "";
    inputGenre.value = "";
    inputYear.value = "";
});

function renderMovieList(){
    var movieList = "";
    for(var i=0; i < movies.length; i++){
        movieList += "<ul><li>" + movies[i].title + "<ul><li>" + movies[i].genre + "</li><li>" + movies[i].director + "</li><li>" + movies[i].year + "</li></ul></li></ul>";
    }
    outputArea.innerHTML = movieList;
};