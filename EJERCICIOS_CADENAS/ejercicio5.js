//################################################################################
// Un usuario introduce su nombre y dos apellidos para el registro de ReservaYa.
// Crea un programa que extraiga e imprima las iniciales en mayúsculas para generar
// su avatar de perfil.
//################################################################################
// Escribe tu código aquí

let nombre = prompt("Introduce tu nombre: ")
let apellido1 = prompt("Introduce tu primer apellido: ")
let apellido2 = prompt("Introduce tu segundo apellido: ")

let iniciales = nombre.charAt(0) + apellido1.charAt(0) + apellido2.charAt(0);

console.log("Tus iniciales son: " + iniciales.toUpperCase());