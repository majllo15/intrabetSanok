const sliderBox = document.querySelector(".header__slider-box")
const leftBtn = document.querySelector(".header__btn-left")
const rightBtn = document.querySelector(".header__btn-right")
const carouselImages = document.querySelectorAll(".header__slider-img")
const firstImg = document.querySelector(".first")
const secondImg = document.querySelector(".second")
const thirdImg = document.querySelector(".third")
const fourthImg = document.querySelector(".fourth")
let carouselWidth = 1905
const carouselSpeed = 3000

let index = 0

const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselImages.length - 1
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`
}

const handleRightArrow = () => {
	index++
	resetInterval()
}

const handleLeftArrow = () => {
	index--
	resetInterval()
}

const resetInterval = () => {
	changeImage()
	clearInterval(startCarousel)
	startCarousel = setInterval(handleCarousel, carouselSpeed)
}

const changeImages = () => {
	if (window.innerWidth > 992) {
		firstImg.setAttribute("src", "../dist/img/gruz-betonowy.jpg")
		secondImg.setAttribute("src", "../dist/img/grys-zwirowy.jpg")
		thirdImg.setAttribute("src", "../dist/img/mieszanka-lamana.jpg")
		fourthImg.setAttribute("src", "../dist/img/produkcja.jpg")
		carouselWidth = 1905
	}
	if (window.innerWidth < 992) {
		firstImg.setAttribute("src", "../dist/img/mini-gruz-betonowy.jpg")
		secondImg.setAttribute("src", "../dist/img/mini-grys-zwirowy.jpg")
		thirdImg.setAttribute("src", "../dist/img/mini-mieszanka-lamana.jpg")
		fourthImg.setAttribute("src", "../dist/img/mini-produkcja.jpg")
		carouselWidth = 992
	}
	if (window.innerWidth < 576) {
		firstImg.setAttribute("src", "../dist/img/576-gruz-betonowy.jpg")
		secondImg.setAttribute("src", "../dist/img/576-grys-zwirowy.jpg")
		thirdImg.setAttribute("src", "../dist/img/576-mieszanka-lamana.jpg")
		fourthImg.setAttribute("src", "../dist/img/576-produkcja.jpg")
		carouselWidth = 576
	}
}

changeImages()
rightBtn.addEventListener("click", handleRightArrow)
leftBtn.addEventListener("click", handleLeftArrow)

