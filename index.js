const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "gOQpRBy4iYxU8Nw/FqFj+w==pzuXBRiHaoxsK2rz";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
    try {
        jokeEl.innerText = "Fetching Dad Joke...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        if (data.length > 0 && data[0].joke) {
            jokeEl.innerText = data[0].joke;
        } else {
            jokeEl.innerText = "No joke found, try again later.";
        }
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later.";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.error("Fetch error: ", error);
    }
}

btnEl.addEventListener("click", getJoke);
