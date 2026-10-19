//################################################################################
// EJERCICIO A
// Generar un vector "temperaturas" de 7 valores aleatorios entre -5 y 35 grados.
// Mostrar cada temperatura junto con su equivalente en Fahrenheit y si es
// "Fría", "Templada" o "Calurosa".
//################################################################################

const temperaturas = [];

for (let i = 0; i < 7; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 41) - 5;
  temperaturas.push(numeroAleatorio);
}
temperaturas.forEach(celsius => {
    const fahrenheit = (celsius * 1.8) + 32;
    let tipo = "";

    if (celsius < 15) {
        tipo = "Fría";
    } else if (celsius <= 25) {
        tipo = "Templada";
    } else {
        tipo = "Calurosa";
    }

    console.log("Celsius: " + celsius + "ºC | Fahrenheit: " + fahrenheit + " ºF | Tipo: " + tipo)
});

//OTRA FORMA
const temperaturas2 = Array.from({length: 7}, () => Math.floor(Math.random()*41)-5)

temperaturas2.forEach(t => {
    const fahrenheit = (t * 9/5 + 32).toFixed(1)
    const categoria = t < 10 ? "Fria" : t <= 25 ? "Templada" : "Calurosa"
    console.log(`Temperaturas: ${t}ºC, Fahrenheit: ${fahrenheit}ºF. Categoria: ${categoria}`)
})

//################################################################################
// EJERCICIO B
// Crear un vector de 5 cadenas leídas por teclado. Copiarlas en otro vector
// pero invertidas letra a letra, y mostrar ambos vectores.
//################################################################################

const cadena = []
const invertido = []
let palabraInv

for(let i = 0; i < 5; i++) {
    let palabra = prompt("Introduce una palabra: ")
    cadena.push(palabra)
    palabraInv = palabra.split("").reverse().join("")
    invertido.push(palabraInv)
}

console.log("Cadena normal: ", cadena)
console.log("Cadena invertida: ", invertido)

//OTRA FORMA
const cadena2 = Array.from({length: 7}, (_, i) => prompt(`Introduce la ${i+1} cadena: `))
const invertido2 = cadena.map((cad) => cad.split("").reverse().join())

console.log("Cadena normal: ", cadena2)
console.log("Cadena invertida: ", invertido2)

//################################################################################
// EJERCICIO C
// Leer 6 notas (0-10). Mostrar todas, la media, la más alta, la más baja
// y cuántas son aprobado (>=5).
//################################################################################

const notas = []

for (let i = 0; i < 6; i++) {
  let notasRandom = Math.floor(Math.random() * 11);
  notas.push(notasRandom);
}
const notaMedia2 = (x, y) => x + y;

console.log(notas)
console.log("Nota media: ", notas.reduce(notaMedia2) / notas.length)
console.log("Nota mas alta: ", notaAlta(notas))
console.log("Nota mas baja: ", notaBaja(notas))
console.log("Aprobados: ", notas.filter(esAprobado).length) 

function notaMedia(total, value) {
    return (total + value)
}

function notaAlta(nota) {
    return Math.max.apply(null, nota)
}

function notaBaja(nota) {
    return Math.min.apply(null, nota)
}

function esAprobado(nota) {
    return nota >= 5;
}


//################################################################################
// EJERCICIO D
// Vector de hasta 7 elementos. Pedir números hasta llenarlo o hasta que se
// introduzca un 0. Mostrar los elementos introducidos y su suma.
//################################################################################

const numeros = []

const sumaTotal = (x,y) => x + y
let num

do {
     num = parseInt(prompt("Introduce un numero (0 para acabar): "))
    numeros.push(num)
} while (numeros.length != 7 && num != 0)

console.log(numeros)
console.log("Suma total: ", numeros.reduce(sumaTotal))


//################################################################################
// EJERCICIO E
// Vector de 7 números aleatorios (0-50). Ordenar de mayor a menor y calcular
// la mediana.
//################################################################################

const aleatorio = []

for (let i = 0; i < 7; i++) {
  let notasRandom = Math.floor(Math.random() * 51);
  aleatorio.push(notasRandom);
}

let numMayor = aleatorio.sort(function(a, b){return b - a});

console.log("Orden mayor a menor: ", numMayor)
console.log("Mediana: ", numMayor[Math.floor(aleatorio.length - 1) / 2])

//################################################################################
// EJERCICIO F
// Pedir un número de día (1-7) y mostrar su nombre y si es fin de semana
// o día laborable, usando un vector.
//################################################################################

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let numDia = parseInt(prompt("Introduce un número de día (1-7): "));

if (numDia < 1 || numDia > 7) {
    console.log("Número de día no disponible");
} else {
    let nombreDia = dias[numDia - 1];
    let tipoDia = "";

    if (numDia === 6 || numDia === 7) {
        tipoDia = "fin de semana";
    } else {
        tipoDia = "día laborable";
    }

    let mensaje = `El día ${numDia} es ${nombreDia} y es un ${tipoDia}`;
    console.log(mensaje);
}


//################################################################################
// EJERCICIO G
// Declarar dos vectores de 5 enteros, pedir sus valores y calcular:
// vector3 = producto elemento a elemento, y la suma total (producto escalar).
//################################################################################

let a = Array.from({length:5}, () => parseInt(prompt("Introduce un numero para el vector 1: ")))
let b = Array.from({length:5}, () => parseInt(prompt("Introduce un numero para el vector 2: ")))

const c = a.map((valor, total) => valor * b[total])

const productoEscalar = c.reduce((acumulador, actual) => acumulador + actual, 0)

console.log("Vector 1: " + a)
console.log("Vector 2: " + b)
console.log("Vector 3: " + c)
console.log("Producto escalar: " + productoEscalar)


//################################################################################
// EJERCICIO H
// Matriz 4x4 con valores aleatorios (1-9). Calcular la suma de la diagonal
// principal y de la diagonal secundaria.
//################################################################################

let matriz = Array.from({length: 4}, () => 
             Array.from({length: 4}, () => Math.floor(Math.random() * 9) + 1))

let diagonalPrincipal = matriz.reduce((suma, fila, i) => suma + fila[i], 0)
let diagonalSecundaria = matriz.reduce((suma, fila, i) => suma + fila[fila.length - 1 - i], 0)

console.log(matriz)
console.log(`Diagrama principal: ${diagonalPrincipal}. Diagonal secundaria: ${diagonalSecundaria}`)