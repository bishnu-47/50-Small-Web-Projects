const jokeElem = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", () => {
	generateJoke();
});

async function generateJoke() {
	const config = {
		headers: {
			accept: "application/json",
		},
	};
	const res = await fetch("https://icanhazdadjoke.com", config);
	const data = await res.json();
	jokeElem.innerText = data.joke;
}
