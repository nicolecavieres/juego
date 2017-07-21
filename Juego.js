var piedra = document.getElementById("piedra");
var tijera = document.getElementById("tijera");
var papel = document.getElementById("papel");
var respuesta = document.getElementById("respuesta");
var suEleccion;

piedra.onclick = function(){
 	respuesta.innerText="Elegiste piedra";
 	respuesta.style.color="#C5E022";
 	suEleccion="piedra";
 	b();
}

tijera.onclick = function(){
 	respuesta.innerText="Elegiste tijera";
 	respuesta.style.color="#FF8AA3";
 	suEleccion="tijera";
 	b();
}

papel.onclick = function(){
 	respuesta.innerText="Elegiste papel";
 	respuesta.style.color="#1DBBCC";
 	suEleccion="papel";
 	b();
}


function b (){
	var miEleccion= document.getElementById("miEleccion");
	var numeroRandom= Math.floor((Math.random() * 100) + 1);
	var solucion= document.getElementById("solucion");
	var op;

	if(numeroRandom>0 && numeroRandom<=33.3){
		op="piedra";
		miEleccion.innerText="Yo eligo piedra";
	 	miEleccion.style.color="#C5E022";
	}
	else if(numeroRandom>33.3 && numeroRandom<=66.6){
		op="tijera";
		miEleccion.innerText="Yo elijo tijera";
	 	miEleccion.style.color="#FF8AA3";
	}
	else{
		op="papel";
		miEleccion.innerText="Yo eligo papel";
	 	miEleccion.style.color="#1DBBCC";
	}

	if(suEleccion== "piedra" && op=="piedra"){
		solucion.innerText="Empate"
	}
	else if(suEleccion== "piedra" && op=="papel"){
		solucion.innerText="Perdiste..."
	}
	else if(suEleccion== "piedra" && op=="tijera"){
		solucion.innerText="¡¡Ganaste!!"
	}

	if(suEleccion== "papel" && op=="papel"){
		solucion.innerText="Empate"
	}
	else if(suEleccion== "papel" && op=="tijera"){
		solucion.innerText="Perdiste..."
	}
	else if(suEleccion== "papel" && op=="piedra"){
		solucion.innerText="¡¡Ganaste!!"
	}

	if(suEleccion== "tijera" && op=="tijera"){
		solucion.innerText="Empate"
	}
	else if(suEleccion== "tijera" && op=="piedra"){
		solucion.innerText="Perdiste..."
	}
	else if(suEleccion== "tijera" && op=="papel"){
		solucion.innerText="¡¡Ganaste!!"
	}

}

