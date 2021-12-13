
// const API_URL = 'https://slash-honorable-moustache.glitch.me';


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
