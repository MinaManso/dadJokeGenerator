const btnEL = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "gOQpRBy4iYxU8Nw/FqFj+w==pzuXBRiHaoxsK2rz";


const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke(){


    try {
    jokeEl.innerText = "Fetching Dad Joke...";
    btnEL.disabled = true;
    btnEL.innerText = "Loading...";
    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnEL.disabled = false;
    btnEL.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happend, try again later";
        btnEL.disabled = false;
        btnEL.innerText = "Tell me a joke";
        console.log(error);
    
    }
}
        





btnEL.addEventListener("click", getJoke);

