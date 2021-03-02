const tagsEl = document.querySelector("#tags");
const textArea = document.querySelector(".textarea");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
	createTags(e.target.value);

	if (e.code == "Enter") {
		setTimeout(() => (e.target.value = ""), 100);

		selectRandomTag();
	}
});

function createTags(input) {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim() !== "")
		.map((tag) => tag.trim());

	tagsEl.innerHTML = "";

	tags.forEach((tag) => {
		const newTagEl = document.createElement("span");
		newTagEl.classList.add("tag");
		newTagEl.innerText = tag;
		tagsEl.appendChild(newTagEl);
	});
}

function pickRandomTag() {
	const allTags = document.querySelectorAll(".tag");
	return allTags[Math.floor(Math.random() * allTags.length)];
}

function selectRandomTag() {
	const times = 30;
	let interval = setInterval(() => {
		let t = pickRandomTag();

		highlightTag(t);

		setTimeout(() => {
			unhighlightTag(t);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			highlightTag(pickRandomTag());
		}, 100);
	}, times * 100);
}

function highlightTag(tag) {
	tag.classList.add("highlight");
}

function unhighlightTag(tag) {
	tag.classList.remove("highlight");
}
