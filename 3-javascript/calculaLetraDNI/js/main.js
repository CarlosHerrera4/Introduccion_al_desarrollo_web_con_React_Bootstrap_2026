
const button = document.getElementById('btnCalcular')
const dni = document.getElementById('valorDni')
const letraUsurario = document.getElementById('letraUsuario')

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

button.addEventListener('click', calculaLetraDNI)

function calculaLetraDNI() {
    const resto = dni.value % 23
    const letra = letras[resto]
    
    letraUsurario.innerText = "La letra es : " + letra
}

