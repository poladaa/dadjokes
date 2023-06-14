"use strict";
const btn = document.querySelector(".btn");
const jokeText = document.querySelector(".joke");
///
const apiKey = "0z8w3cblyc9VeSEKCjGrmA==Tg2s71uM2MFXtHZu";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeText.textContent = "Updating...";
    btn.disabled = true;
    btn.textContent = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btn.disabled = false;
    btn.textContent = "Tell me a joke";

    jokeText.textContent = data[0].joke;
  } catch (error) {
    jokeText.textContent = "No internet connection";
    btn.disabled = false;
    btn.textContent = "Tell me a joke";
  }
}

//
btn.addEventListener("click", getJoke);
