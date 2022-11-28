const footer = document.querySelector("footer");
const header = document.querySelector("header");
const switcher = document.querySelector("#switcher");
const firstScreen = document.querySelector("#screen1");

switcher.onclick = function() {
	footer.classList.toggle('none');
	header.classList.toggle('none');
	firstScreen.classList.toggle('margin-none');
}