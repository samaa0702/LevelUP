const name = document.querySelector("#name");
const nameWrapper = document.querySelector("#name-wrapper");
const tel = document.querySelector("#tel"); 
const telWrapper = document.querySelector("#tel-wrapper"); 

name.onfocus = function() {
	nameWrapper.classList.add('hint');
}
name.onkeypress = function() {
	nameWrapper.classList.remove('hint')
}

name.onblur = function() {
	nameWrapper.classList.remove('hint');
}

tel.onfocus = function() {
	telWrapper.classList.add('hint');
}

tel.onkeypress = function() {
	telWrapper.classList.remove('hint')
}

tel.onblur = function() {
	telWrapper.classList.remove('hint');
}