//################################################################################
// Simula el proceso de verificación de pago de una reserva. Mediante un bucle while,
// simula una petición en la que se comprueba el estado de la reserva.
// El bucle debe continuar pidiendo confirmación hasta que el estado cambie a "confirmada".
//################################################################################
// Escribe tu código aquí

let contador = 1
let reservado = false

while (!reservado) {
  console.log('Intento ' + contador + ': Comprobando pago...')
  
  if (contador === 3) {
    reservado = true
  } else {
    contador++
  }
}

console.log("Reserva confirmada")




