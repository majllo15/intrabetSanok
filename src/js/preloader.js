const preloader = document.querySelector(".preloader")

const preloaderDisplay = () => {
	preloader.style.display = "none"
}

window.addEventListener("load", preloaderDisplay)
