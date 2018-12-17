var acumPar = 0, acumInpar = 0;

document.getElementById('mostar').addEventListener("click", function() {
	for (var i = 1; i <= 100; i++) {
		if (i%2 == 0) {
			acumPar += i;
		}else{
			acumInpar += i;
		}
	}
	document.getElementById('sumaPar').innerHTML = acumPar;
	document.getElementById('sumaInpar').innerHTML = acumInpar;
	if (acumPar > acumInpar) {
		document.getElementById('sumaMay').innerHTML = acumPar+" es mayor que "+acumInpar;
	}else{
		document.getElementById('sumaMay').innerHTML = acumInpar+" es mayor que "+acumPar;
	}
})