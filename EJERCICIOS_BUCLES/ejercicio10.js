//################################################################################
// ReservaYa necesita calcular cuántas combinaciones únicas de partidos se pueden
// formar en la fase final de un torneo con N equipos participantes (factorial de N).
// Crea un programa que pida el número de equipos (entero positivo) y calcule el total
// de combinaciones posibles.
//################################################################################
// Escribe tu código aquí

let equipos = parseInt(prompt("Cuantos equipos hay en la competición: "))

let factorial = 1

for (let i = 1; i <= equipos; i++) {
    factorial *= i;
    }

console.log("Hay un total de: " + factorial + " combinaciones posibles")