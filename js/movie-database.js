const API_URL = 'https://slash-honorable-moustache.glitch.me';




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
