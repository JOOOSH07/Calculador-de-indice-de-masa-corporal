function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value); 
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('resultado').innerText = ' ingrese los valores correctos de su altura y peso.';
        return;
    }

    const imc = peso / (altura * altura);
    let resultadoIMC = '';

    if (imc < 18.5) {
        resultadoIMC = 'Esta bajo de peso.';
    } else if (imc >= 18.5 && imc < 25) {
        resultadoIMC = 'su peso es ideal.';
    } else if (imc >= 25 && imc < 30) {
        resultadoIMC = 'tiene sobrepeso.';
    } else {
        resultadoIMC = 'Tiene obesidad.';
    }

    document.getElementById('resultado').innerText = `Tu IMC es ${imc.toFixed(2)}. ${resultadoIMC}`;
}

function calcularPesoIdeal() {
    const altura = parseFloat(document.getElementById('altura').value); 
    const genero = document.getElementById('genero').value;

    if (isNaN(altura) || altura <= 0 || !genero) {
        document.getElementById('pesoIdeal').innerText = 'complete todos los campos sugeridos.';
        return;
    }

    const alturaEnCm = altura * 100;
    let pesoIdeal;

    if (genero === 'hombre') {
        pesoIdeal = 50 + 0.91 * (alturaEnCm - 152.4);
    } else if (genero === 'mujer') {
        pesoIdeal = 45.5 + 0.91 * (alturaEnCm - 152.4);
    }

    document.getElementById('pesoIdeal').innerText = `El peso ideal para su altura es aproximadamente ${pesoIdeal.toFixed(2)} kg.`;
}