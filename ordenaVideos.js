inlets = 1;
outlets = 2; 

var ancho = 0.08;
var alto = 0.098 ;
var cols = 6;
var fils = 5;

var anchoTotal;
var altoTotal;
var anchoCada;
var altoCada;

function escalar(){
	for(i = 0; i<30; i++){
			outlet(0, "target",  i );
			outlet(0, "scale",  ancho,  alto);
			}
			
		
		}
		
function ubicar(){
		for(i = 0; i<30; i++){
			outlet(0, "target",  i+1 );
			var columna = i%cols;
			var  tempFila = i/cols;
			var fila = ~~tempFila;
			
		outlet(0, "position", columna*((1./cols)-0.), fila*((1/fils)-0.), 0, 2);
		outlet(0, "rotar", 0, 0, 0, 2);
		}
	}
	
	
function desubicar(){
		for(i = 0; i<30; i++){
			outlet(0, "target",  i+1 );
			var columna = i%cols;
			var  tempFila = i/cols;
			var fila = ~~tempFila;
			
		outlet(0, "position", 3*(Math.random()-0.5), 3*(Math.random()-0.5), -6*Math.random(), 10);
		outlet(0, "rotar", 360*Math.random(), 360*Math.random(), 360*Math.random(), 10);
		}
	}
	
function desubicar2(){
		for(i = 0; i<30; i++){
			outlet(0, "target",  i+1 );
			var columna = i%cols;
			var  tempFila = i/cols;
			var fila = ~~tempFila;
			
		outlet(0, "position", 3*(Math.random()-0.5), 3*(Math.random()-0.5), -6*Math.random(), 200);
		outlet(0, "rotar", 360*Math.random(), 360*Math.random(), 360*Math.random(), 200);
		}
	}
		
function setAnchoAlto( a,  al){
	ancho = a; 
	alto = al;
	}	
	
	
function getdim(){
		outlet(1, "getdim");
}	

function dim(dimensiones){
		
		 anchoTotal = arguments[0];
		 altoTotal = arguments[1];
		 anchoCada = anchoTotal/cols;
		 altoCada = altoTotal/fils;
		
		for(i = 0; i<30; i++){
			outlet(0, "target",  i+1 );
		outlet(0, "tamanio", anchoCada, altoCada);
		}
		
				for(i = 0; i<30; i++){
			outlet(0, "target",  i+1 );
			var columna = i%cols;
			var  tempFila = i/cols;
			var fila = (~~tempFila)+1;
			
		outlet(0, "ubicacion", anchoTotal*columna*((1./cols)), altoTotal-(altoTotal*fila*((1/fils)-0.)));
		}
		
	}
	
function same(){
			for(i = 0; i<30; i++){
			outlet(0, "target",  i+1 );
			outlet(0, "ubicacion", anchoCada, altoCada);
		}
	}