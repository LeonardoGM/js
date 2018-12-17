var num1, num2, num3;

function pedirNums() {
	num1 = parseFloat(document.getElementById('primerN').value);
	num2 = parseFloat(document.getElementById('segundoN').value);
	num3 = parseFloat(document.getElementById('tercerN').value);
}

    /*
	 * Procedimiento con conectores
	 */
function conectores() {
	if(num1 > num2 && num1 > num3){
		if(num2 > num3){
			document.getElementById('ordenC').value = num1+" > "+num2+" > "+num3;
		}else{
			document.getElementById('ordenC').value = num1+" > "+num3+" > "+num2;
		}
	}else if(num2 > num3){
		if (num3 > num1){
			document.getElementById('ordenC').value = num2+" > "+num3+" > "+num1;
		}else{
			document.getElementById('ordenC').value = num2+" > "+num1+" > "+num3;
		}
	}else{
		if (num2 > num1){
			document.getElementById('ordenC').value = num3+" > "+num2+" > "+num1;
		}else{
			document.getElementById('ordenC').value = num3+" > "+num1+" > "+num2;
		}
	}
}

	/*
	 * Procedimiento sin conectores
	 */
function sinConectores() {
	if (num1 > num2){
		if (num1 > num3){
			if (num2 > num3){
				document.getElementById('ordenS').value = num1+" > "+num2+" > "+num3;
			}else{
				document.getElementById('ordenS').value = num1+" > "+num3+" > "+num2;
			}
		}else{
			document.getElementById('ordenS').value = num3+" > "+num1+" > "+num2;
		}
	}else if (num2 > num3){
		if (num3 > num1){
			document.getElementById('ordenS').value = num2+" > "+num3+" > "+num1;
		}else{
			document.getElementById('ordenS').value = num2+" > "+num1+" > "+num3;
		}
	}else{
		document.getElementById('ordenS').value = num3+" > "+num2+" > "+num1;
	}
}
// 7-9-6

document.getElementById('mostrarConectores').addEventListener("click", function() {
	pedirNums();
	conectores();
});

document.getElementById('mostrarSinConectores').addEventListener("click", function() {
	pedirNums();
	sinConectores();
});

