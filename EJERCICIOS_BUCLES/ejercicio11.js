//################################################################################
// ¡Promoción ReservaYa! Si adivinas el número de la Pista Mágica (del 1 al 100)
// obtienes una reserva gratuita. Tienes un máximo de 10 intentos.
// Tras cada intento, el sistema te indicará si el número buscado es mayor o menor.
// El programa termina cuando acertaste o al agotar los 10 intentos.
//################################################################################
// Escribe tu código aquí

let numero = Math.floor(Math.random() * 100) + 1;
let contador = 1;

do {
    let adivina = parseInt(prompt("Que numero crees que es: "))
    if (adivina == numero) {
        console.log("Felicidades, acertaste el numero")
        break
    } else if (adivina < numero) {
        console.log("Incorrecto, el numero es mayor")
    } else {
        console.log("Incorrecto, el numero es menor")
    }
    contador++
} while (contador <= 10) {
    console.log("No acertarte nigga muy mal")
}
