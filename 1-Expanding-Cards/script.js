const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		// remove active from other classes
		panels.forEach((p) => {
			p.classList.remove("active");
		});

		panel.classList.add("active");
	});
});
