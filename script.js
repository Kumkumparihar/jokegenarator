// const jokeContainer = document.getElementById("joke");
// const btn = document.getElementById("btn");

// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political&format=txt&type=single";
// // const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political&type=single";

// // const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// let getJoke = () =>{
//     jokeContainer.classList.remove("fade");
//     fetch(url)
//     .then(data => data.json())
    
//     .then(item => {
//         jokeContainer.textContent = `${item.joke}`;
//         jokeContainer.classList.add("fade");    
        
//     });

// }
// btn.addEventListener("click",getJoke);

// getJoke();


const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political&format=txt&type=single";

// Function to fetch and display the joke
let getJoke = () => {
    jokeContainer.classList.remove("fade"); // Remove fade class for animation

    fetch(url)
        .then(response => response.text()) // Use .text() since the response is plain text
        .then(joke => {
            jokeContainer.textContent = joke; // Set the joke text in the container
            jokeContainer.classList.add("fade"); // Add fade class for animation
        })
        .catch(error => {
            jokeContainer.textContent = "Sorry, something went wrong. Please try again."; // Show error message if fetch fails
            console.error("Error fetching joke:", error);
        });
};

// Fetch an initial joke when the page loads
getJoke();

// Add event listener to the button to fetch a new joke on click
btn.addEventListener("click", getJoke);
