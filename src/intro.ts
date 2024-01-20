// Click event

const button = document.querySelector("button")!

button.addEventListener("click", () => {
	console.info("Button clicked!")
})

// Resize event

window.addEventListener("resize", () => {
	console.info("Window resized!")
})
