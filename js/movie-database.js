 
// const API_URL = 'https://slash-honorable-moustache.glitch.me';

var form = document.getElementById('form')


form.addEventListener('submit',function(event){
    event.preventDefault()
    var searchMovie = document.getElementById('searchMovie').value

    console.log(searchMovie)
})
var form2 = document.getElementById('container')

form2.addEventListener('submit',function(event){
    event.preventDefault()
    var createMovie = document.getElementById('inputPart').value

    console.log(createMovie)
})
// var button = document.querySelector('#submitSearch');
//
//
//     button.addEventListener('click', function(){
//
//         var movie = document.querySelector('#searchMovie').value
//         if (movie === 'down');
//     },  $("movies.title.down").html("")
//     )



// var movieInfo;
//
// var api = 'https://polyester-able-helium.glitch.me/movies'
// // var movie = ''
// // var url = api + movie
//
//
// var input;
//
// function setup() {
//     createCanvas(400, 200);
//
//     var button = document.querySelector('#submitSearch');
//
//     button.addEventListener('click', function(){
//
//     })
//
//     // var button = select('#submitSearch')
//     button.click(infoAsk);
//
// input = select('#searchMovie');
// }
//
//     function infoAsk() {
//         var url = api + input.value()
//         loadJSON(url, gotData);
// }
//
// function gotData(data) {
//     movieInfo = data;
// }
//
// function draw() {
//     background(0);
//     if (movie) {
//         var Title = "<h1>" + movie.title + "</h1>"
//         var actors = "<p>Actors: " + movie.actors + "</p>"
//         var director = "<p>Director: " + movie.director + "</p>"
//         var genre = "<p>Genre: " + movie.genre + "</p>"
//         var id = "<p>ID: " + movie.id + "</p>"
//         var plot = "<p>Plot: " + movie.plot + "</p>"
//         var poster = "<p>Poster: " + movie.poster + "</p>"
//         var rating = "<p>Rating: " + movie.rating + "</p>"
//         var title = "<p>Title: " + movie.title + "</p>"
//         var year = "<p>Year: " + movie.year + "</p>"
//          $("#movies").append(Title.toUpperCase() + actors + director + genre + id + plot + poster + rating + title + year);
//     }
// }

//
// getMovies(API_URL);
// function getMovies(url){
//     fetch(url).then(res => res.json()).then(data => {
//         showMovies(data.results);
//     })
//
// }
//
//
// function showMovies(data){
//
//     data.forEach(movie =>{
//         const movieEl = document.createElement('div');
//         movieEl.classList.add('movie');
//         movieEl.innerHTML = `
//         <img src="" alt="image">
// <div class="movie-info">
//     <h3>Movie Title</h3>
//     <span class="green">9.8</span>
// </div>
// <div class="overview">
//     <h3>Overview</h3>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur cum eos, fuga neque nulla perspiciatis sunt tempora. Aliquam consequuntur deleniti esse natus possimus quasi repellat rerum veniam veritatis voluptas.
// </div>`
//     })
// }
const API_URL = 'https://slash-honorable-moustache.glitch.me/movies';
//get request


let getAllMovies = () => {
    return fetch(API_URL).then(resp => resp.json());
}

getAllMovies().then(data => console.log(data)).catch(error => console.error(error));
$(window).load(function() {
    $('#loading').hide();
});
(function() {

    $.get('https://slash-honorable-moustache.glitch.me/movies').done(function (movies) {
        $("#insertMovies").html("");
        movies.forEach(function(movie) {
            var h1 = "<h1>" + movie.title + "</h1>"
            var p = "<p>Actors: " + movie.actors + "</p>"
            var p1 = "<p>Director: " + movie.director + "</p>"
            var c = "<p>Genre: " + movie.genre + "</p>"
            var c1 = "<p>ID: " + movie.id + "</p>"
            var span = "<p>Plot: " + movie.plot + "</p>"
            var span1 = "<p>Poster: " + movie.poster + "</p>"
            var span2 = "<p>Rating: " + movie.rating + "</p>"
            var span3 = "<p>Title: " + movie.title + "</p>"
            var span4 = "<p>Year: " + movie.year + "</p>"
            $("#movies").append(h1.toUpperCase() + p + p1 + c + c1+ span + span1 + span2 + span3 + span4);
        });
    });
    console.log(movies)
})();

 
const textInput = document.querySelector("#search");
const textOutput = document.querySelector("#showOutPut");
const btn = document.querySelector("#submitInput");
 

btn.addEventListener("click", fetchHandler);

const loader = document.querySelector("#loading");

function displayLoading(){
    loader.classList.add("display");
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}
function hideLoading(){
    loader.classList.remove("display");
}

var url = "https://slash-honorable-moustache.glitch.me/movies"

function fetchHandler(event){
    displayLoading()

    var input = textInput.value;
    var finalURL = buildURL(input);

    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            hideLoading()
            textOuput.innerText = json.contents.translated;
        })
}

function buildURL(inputData){
    return `${url}?text=${inputData}`;
}