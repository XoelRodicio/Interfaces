//################################################################################
// El sistema de verificación de cupones simétricos de ReservaYa comprueba si el
// código promocional introducido es un palíndromo (se lee igual de izquierda a
// derecha que de derecha a izquierda).
//################################################################################
// Escribe tu código aquí

let codigo = prompt("Introduce el codigo: ")

codigo = codigo.toLowerCase()
let invertido = codigo.split("").reverse().join("")

if (codigo == invertido) {
    console.log("Es palindromo")
} else {
    console.log("No es palindromo")
}

