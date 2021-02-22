const crossBtns = document.querySelectorAll(".fa-times");
const downBtns = document.querySelectorAll(".fa-chevron-down");
const faq = document.querySelectorAll(".faq");

crossBtns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		faq[idx].classList.toggle("active");
	});
});

downBtns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		faq[idx].classList.toggle("active");
	});
});
