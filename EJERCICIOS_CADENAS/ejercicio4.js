//################################################################################
// Un cliente introduce las observaciones o requisitos especiales para su reserva en una frase.
// Realiza un programa que cuente e imprima cuántas palabras contiene dicha frase.
//################################################################################
// Escribe tu código aquí

let frase = prompt("Introduce las observaciones o requisitos especiales de su reserva: ")
let palabras = frase.split(" ")
console.log(palabras.length)