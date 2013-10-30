inlets = 1; 
outlets = 1; 

var pasosTemp;

function aleatorio(){
	pasosTemp = Math.random()*20;
	var pasos = ~~pasosTemp;
	
	var tRanX = Math.random()*360;
	var tRanY = Math.random()*360;
	var tRanZ = Math.random()*360;
	
	var ranX = ~~tRanX;
	var ranY = ~~tRanY;
	var ranZ = ~~tRanZ;

	outlet(0, ranX, ranY, ranZ, pasos);
	
	}
	
function origen(){
		pasosTemp = Math.random()*20;
	var pasos = ~~pasosTemp;
	
	var ranX = 0;
	var ranY = 0;
	var ranZ = 0;

	outlet(0, ranX, ranY, ranZ, pasos);
	
	}