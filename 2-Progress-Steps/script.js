const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let stepCounter = 1;

next.addEventListener("click", () => {
	stepCounter++;

	if (stepCounter > circles.length) {
		stepCounter = circles.length;
	}

	update();
});

prev.addEventListener("click", () => {
	stepCounter--;

	if (stepCounter < 1) {
		stepCounter = 1;
	}

	update();
});

function update() {
	circles.forEach((circle, idx) => {
		if (idx < stepCounter) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	progress.style.width = (100 / 3) * (stepCounter - 1) + "%";

	if (stepCounter === 1) {
		prev.disabled = true;
	} else if (stepCounter === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}
