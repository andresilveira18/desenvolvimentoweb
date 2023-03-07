
let paragraph = document.getElementById("paragrafo");
let opacity = 0;

function fadeIn() {
	opacity += 0.01;
	paragraph.style.opacity = opacity;
	if (opacity < 1) {
		requestAnimationFrame(fadeIn);
	}
}

setTimeout(fadeIn, 10);