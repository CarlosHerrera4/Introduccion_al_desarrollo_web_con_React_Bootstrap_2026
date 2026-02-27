
const miNombre = "Carlos"
let edad = 22

const asdf = `Mi nombre es ${miNombre} `
console.log(asdf)

const esverdadero = false 

const miArray = [1,2,3,34, "Carro", "noche"]
const miObjeto = {
    nombre: "Carlos",
    apellido: "Herrera"
}

console.log(miArray[2], miArray[4])

console.log("El nombre es: " + miObjeto.nombre)


function sumaNumeros(valor1, valor2) {
    const valorTotal = valor1 + valor2
    return valorTotal
}
// La forma de llamar o invocar a esa función es muestraNombre()

console.log(sumaNumeros(3,5))

for (i=0; i < 10; i++) {
    console.log("Valor de i: " + i)
}

let numero = 25

if (numero != 0 ) {
    console.log("Es verdadero")
}
else {
    console.log("Es falso")
}

