var x = 1;

function addCell() {
	if(x < 10){
		x = x + 1;
		document.getElementById("cellNum").innerHTML = x;
	}
	if (x >= 10) {
		document.getElementById("winning").innerHTML = "You won, you glorious ten-celled bastard!";
	}
}

function reset() {
	x = 1;
	document.getElementById("cellNum").innerHTML = x;
	document.getElementById("winning").innerHTML = "Keep pushing";
}