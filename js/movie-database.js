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


    const textInput = document.querySelector("#inputPart");
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
var url = "loading"

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
