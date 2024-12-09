
let documentActions = (e) => {
	const targetElements = e.target

	if (targetElements.closest(".button-action")) {
		document.documentElement.classList.toggle("open-menu")
	}
}

document.addEventListener("click", documentActions);