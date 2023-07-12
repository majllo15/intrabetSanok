const menuItems = document.querySelectorAll(".navbar a")
const scrollSpySections = document.querySelectorAll(".section")

const handleScrollSpy = () => {
	if (window.scrollY > 350) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 300) {
				sections.push(section)

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				)

				menuItems.forEach(item => item.classList.remove("active"))

				activeSection.classList.add("active")
			}
		})
	}

	if (window.scrollY < 350) {
		menuItems.forEach(item => item.classList.remove("active"))
	}
}

window.addEventListener("scroll", handleScrollSpy)
