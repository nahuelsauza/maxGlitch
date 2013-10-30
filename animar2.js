inlets = 1; 
outlets = 1; 

var parametroAModificar;
var diferencia1; 
var diferencia2; 
var diferencia3; 
var puntoDestino1; 
var puntoDestino2; 
var puntoDestino3; 
var puntoActual1 = 0;
var puntoActual2 = 0;
var puntoActual3 = 0;
var paso1 = 0;
var paso2 = 0;
var paso3 = 0;
var cantDePasos = 0; 

function anim(val){
	parametroAModificar = arguments[0];
	
	puntoDestino1 =  arguments[1];
	puntoDestino2 =  arguments[2];
	puntoDestino3 =  arguments[3];


	cantDePasos = arguments[4];
	
	diferencia1 = puntoDestino1 - puntoActual1;
	diferencia2 = puntoDestino2 - puntoActual2;
	diferencia3 = puntoDestino3 - puntoActual3;
	
	
	paso1 = diferencia1/cantDePasos;
	paso2 = diferencia2/cantDePasos;
	paso3 = diferencia3/cantDePasos;
	
	outlet(puntoActual1, puntoDestino1, paso1);
		}
		
function frame(){
	if(diferencia1>0){
	if(puntoActual1<puntoDestino1){
		puntoActual1 = puntoActual1+paso1;
	}else{
		puntoActual1 = puntoDestino1;
		}
	}else if(diferencia1<=0){
	if(puntoActual1>puntoDestino1){
		puntoActual1 = puntoActual1+paso1;
	}else{
		puntoActual1 = puntoDestino1;
		}
		}
	
	
		if(diferencia2>0){
	if(puntoActual2<puntoDestino2){
		puntoActual2 = puntoActual2+paso2;
	}else{
		puntoActual2 = puntoDestino2;
		}
	}else if(diferencia2<=0){
	if(puntoActual2>puntoDestino2){
		puntoActual2 = puntoActual2+paso2;
	}else{
		puntoActual2 = puntoDestino2;
		}
		}
		
		
			if(diferencia3>0){
	if(puntoActual3<puntoDestino3){
		puntoActual3 = puntoActual3+paso3;
	}else{
		puntoActual3 = puntoDestino3;
		}
	}else if(diferencia3<=0){
	if(puntoActual3>puntoDestino3){
		puntoActual3 = puntoActual3+paso3;
	}else{
		puntoActual3 = puntoDestino3;
		}
		}
	

	
	
	
	outlet(0, parametroAModificar, puntoActual1, puntoActual2, puntoActual3);
	
		}