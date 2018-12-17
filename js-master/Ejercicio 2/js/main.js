var suma = 0, fin;
var txt = "";

function finSerie() {
	fin = document.getElementById('nmrFin').value;
}

document.getElementById('mostar').addEventListener("click", function() {
	finSerie();
	if (fin == 0) {
		alert("el número no puede ser 0");
	}
	for (var i = 1; i <= fin; i++) {
		suma += 1/i;
		if (i == fin) {
			txt += "(1 / "+i+")";
		}else{
			txt += "(1 / "+i+") + ";
		}
		document.getElementById('textoSuma').innerHTML = txt;
	}
	document.getElementById('sumatoria').innerHTML = suma;
})