const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');
let setTime = 1800;

updateTimer();	

setInterval(updateTimer, 1000);

function updateTimer() {
	const minsLeft = Math.floor(setTime / 60);
	const secsLeft = setTime % 60;

	minutes.innerText = minsLeft < 10 ? '0' + minsLeft : minsLeft;
	seconds.innerText = secsLeft < 10 ? '0' + secsLeft : secsLeft;
	setTime -= setTime > 0 ? 1 : 0;	
} 
