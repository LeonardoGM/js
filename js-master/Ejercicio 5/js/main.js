var acum, numFact;
var txt = "";

function leerNum() {
	numFact = parseFloat(document.getElementById('nFactorial').value);
}

function ponerNum() {
	document.getElementById('numFactorial').innerHTML = numFact;
}

function resetVar() {
	acum = 1;
}

document.getElementById('mostrar').addEventListener("click", function() {
	resetVar();
	leerNum();
	ponerNum();
	txt = numFact+"! = ";
	for (var i = numFact; i >= 1; i--) {
		if (i==1){
			acum = acum * i;
			txt += i;
			document.getElementById('factorial').innerHTML = txt;
		}else{
			acum = acum * i;
			txt += i+" * ";
			document.getElementById('factorial').innerHTML = txt;
		}
	}
	txt += " = "+acum;
	document.getElementById('factorial').innerHTML = txt;
	document.getElementById('total').innerHTML = acum;
})