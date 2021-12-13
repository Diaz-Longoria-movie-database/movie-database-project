const url = 'https://slash-honorable-moustache.glitch.me/movies';


// let getAllMovies = () => {
//     return fetch(url).then(resp => resp.json());
// }
//
// getAllMovies().then(data => console.log(data)).catch(error => console.error(error));
// $(window).load(function() {
//     $('#loading').hide();
// });

function getMovieData(){
    function appendAllMovieData(data) {
        
    }

    fetch("https://slash-honorable-moustache.glitch.me/movies")
        .then(response => {
            response.json()
                .then(data =>{
                    $(".movie-container")
                        .empty()
                    appendAllMovieData(data)
                    console.log(data)
                })
        })
}
$(window).on("load", function(){
    $(".loader-wrapper")
    //    .fadeIn('slow');
    getMovieData();
});

function addMovies(){
    let movieTitle = $('#title').val()
    let movieRating = $('#rating').val()
    let movieYear = $('#year').val()
    let movieDirector = $('#director').val()
    let movieGenre = $('#genre').val()
    let movieActors = $('#Actors').val()
    let moviePoster = $('#poster').val()
 }
    let newMovie = {
       title: movieTitle,
        rating: movieRating,
        year: movieYear,
        genre: movieGenre,
        director: movieDirector,
        actors: movieActors,
        poster: moviePoster
    }
 const options = {
    method: 'POST',
     headers: {
        'Content-Type': 'application/json',
     },
     body: JSON.stringify(newMovie),
         }
     fetch(url, options)
        .then(res => getMovieData())
         .catch(error => console.error(error));

$('#submitInput').on('click', function(e){
    e.preventDefault()
    addMovies()
})

    function editMovie(id) {
        let title = $(`.movie-card[data-id=${id}] > .editTitle`).val();
        let rating = $(`.movie-card[data-id=${id}] > .editRating`).val();
        let newMovie = {
            title,
            rating
        }
        let entries = Object.entries(newMovie)
        let filteredMovieEntries = entries.filter(([k, v]) => !!v)

        newMovie = Object.fromEntries(filteredMovieEntries)
        let options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                newMovie),
        }
        return fetch(url + `/${id}`, options)
            .then(res => getMovieData())
    }
    function deleteMovie(id){
    let options = {
        method: 'DELETE',
    }
    fetch(url + `/${id}`, options)
        .then(res => getMovieData())
    }
