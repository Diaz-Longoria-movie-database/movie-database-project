 
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

const url = 'https://slash-honorable-moustache.glitch.me/movies';
//get request


let getAllMovies = () => {
    return fetch(url).then(resp => resp.json());
}

getAllMovies().then(data => console.log(data)).catch(error => console.error(error));
// $(window).load(function() {
//     $('#loading').hide();
// });
(function() {

    $.get('https://slash-honorable-moustache.glitch.me/movies').done(function (movies) {
        $("#insertMovies").html("");
        movies.forEach(function(movie) {
            let h1 = "<h1>" + movie.title + "</h1>"
            let p = "<p>Actors: " + movie.actors + "</p>"
            let p1 = "<p>Director: " + movie.director + "</p>"
            let c = "<p>Genre: " + movie.genre + "</p>"
            let c1 = "<p>ID: " + movie.id + "</p>"
            let span = "<p>Plot: " + movie.plot + "</p>"
            let span1 = "<p>Poster: " + movie.poster + "</p>"
            let span2 = "<p>Rating: " + movie.rating + "</p>"
            let span3 = "<p>Title: " + movie.title + "</p>"
            let span4 = "<p>Year: " + movie.year + "</p>"
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