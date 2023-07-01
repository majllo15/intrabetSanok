const burgerBtn = document.querySelector(".navbar__burger-btn")
const menu = document.querySelector(".navbar__list")
const allNavItems = document.querySelectorAll(".navbar__link")

const showMenu = () => {
	burgerBtn.classList.toggle("is-active")
	menu.classList.toggle("show-menu")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			menu.classList.remove("show-menu")
			burgerBtn.classList.remove("is-active")
		})
	})
}

const deleteClassOnDesktop = function () {
	if (992 < window.innerWidth) {
		menu.classList.remove("show-menu")
		burgerBtn.classList.remove("is-active")
	}
}

window.addEventListener("resize", deleteClassOnDesktop)
burgerBtn.addEventListener("click", showMenu)
