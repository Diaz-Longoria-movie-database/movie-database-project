 
// const API_URL = 'https://slash-honorable-moustache.glitch.me';


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
//dummy url
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