//################################################################################
// Se solicita el código de seguridad de una taquilla y un carácter alfabético
// (debes validar que sea una única letra). El programa debe contar y mostrar
// cuántas veces aparece dicha letra dentro del código sin diferenciar mayúsculas de minúsculas.
//################################################################################
// Escribe tu código aquí

let codigo = prompt("Introduce el código de seguridad: ")
let letra = prompt("Introduce la letra que desees validar: ")

let codigoMin = codigo.toLowerCase()
let letraMin = letra.toLowerCase()

let contador = 0

if (letra.length == 1) {
    for (let i = 0; i < codigoMin.length; i++) {
        if (codigoMin[i] == letraMin) {
        contador++
        }
    }
} else {
    console.log("Debe ser una única letra")
}

console.log("La letra " + letra + " aparece " + contador + " veces")

// Otra forma
let caracter = 'a'
let taqulla = "Codigo"

caracter.match(/^[a-zA-Z]$/)

const expresion = new RegExp(caracter,'gi')
taqulla.match(expresion)
