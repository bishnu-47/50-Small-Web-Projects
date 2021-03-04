const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";

	const updateCounter = () => {
		const target = parseInt(counter.getAttribute("data-target"));
		const increment = target / 300;
		let c = +counter.innerText;

		if (c < target) {
			counter.innerText = `${Math.floor(c + increment)}`;
			setTimeout(updateCounter, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCounter();
});
