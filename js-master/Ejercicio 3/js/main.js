var dia;

function pedirDia() {
	dia = parseFloat(document.getElementById('nmbDia').value);
};

document.getElementById('mostar').addEventListener("click", function() {
	pedirDia();
	switch(dia){
		case 1:
			document.getElementById('dia').innerHTML = "Lunes";
			break;
		case 2:
			document.getElementById('dia').innerHTML = "Martes";
			break;
		case 3:
			document.getElementById('dia').innerHTML = "Miercoles";
			break;
		case 4:
			document.getElementById('dia').innerHTML = "Jueves";
			break;
		case 5:
			document.getElementById('dia').innerHTML = "Viernes";
			break;
		case 6:
			document.getElementById('dia').innerHTML = "Sabado";
			break;
		case 7:
			document.getElementById('dia').innerHTML = "Domingo";
			break;
		default:
			alert("número de dìa no valido");
			break;
	}
})