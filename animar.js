inlets = 1; 
outlets = 1; 

var diferencia; 
var puntoDestino; 
var puntoActual = 0;
var pasoActual = 0;
var cantDePasos = 0; 

function anim(val){
	puntoDestino =  arguments[0];
	cantDePasos = arguments[1];
	diferencia = puntoDestino - puntoActual;
	paso = diferencia/cantDePasos;
		}
		
function frame(){
			if(diferencia>0){
	if(puntoActual<puntoDestino){
		puntoActual = puntoActual+paso;
	}else{
		puntoActual = puntoDestino;
		}
	}else if(diferencia<=0){
	if(puntoActual>puntoDestino){
		puntoActual = puntoActual+paso;
	}else{
		puntoActual = puntoDestino;
		}
		}
		
	outlet(0, puntoActual);
	
		}