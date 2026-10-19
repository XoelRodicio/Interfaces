// ============================================================================
// DESAFÍO: PROCESADOR DE INVENTARIO - TIENDA ESPACIAL (COMPLETO)
// Conceptos a trabajar:
// 1. Funciones Flecha (Arrow Functions)
// 2. Métodos .map(), .filter(), .sort() y .reduce()
// 3. Desestructuración de Objetos y Arrays
// 4. Operador Spread (...)
// ============================================================================

// DATOS INICIALES DE PRUEBA
const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];


// ----------------------------------------------------------------------------
// INSTRUCCIÓN 1: Aplicar Descuento a 'Equipamiento'
// Crea una función flecha `aplicarDescuento` que reciba un array de productos.
// Usa `.map()` para devolver un NUEVO array donde los productos de categoría 
// 'Equipamiento' tengan un 10% de descuento en el precio.
// PISTA: Usa el Spread Operator (`...`) dentro de `.map()` para no mutar los objetos originales.
// ----------------------------------------------------------------------------

const aplicarDescuento = (lista) => {
  return lista.map(p => {
    if (p.categoria === 'Equipamiento') {
      return {
        ...p,
        precio: p.precio * 0.9
      }
    }

    return p
  })
}

console.log("INSTRUCCION 1")
console.log(aplicarDescuento(productos))

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 2: Formatear Mensajes
// Crea una función flecha `generarEtiquetas` que tome un array de productos.
// Usa `.map()` desestructurando los parámetros de la función flecha ({ nombre, precio })
// para devolver un array de strings con formato: "Producto: [nombre] - Precio: \$[precio]"
// ----------------------------------------------------------------------------

const generarEtiquetas = (lista) => {
  return lista.map(({nombre, precio}) => {
    return `Producto: ${nombre} || Precio: ${precio}`
  })
}

console.log("\nINSTRUCCION 2")
console.log(generarEtiquetas(productos))

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 3: Reorganizar Elementos de Arrays
// Dada la siguiente lista con los más vendidos:
const topVentas = ['Traje Espacial', 'Módulo de Oxígeno', 'Ración de Comida']

// Usa DESESTRUCTURACIÓN DE ARRAYS para extraer:
// - `top1`: El primer elemento ('Traje Espacial')
// - `top3`: El tercer elemento ('Ración de Comida')
// PISTA: Omite el segundo elemento usando comas.
// ----------------------------------------------------------------------------

const [top1, , top3] = topVentas;

console.log("\nINSTRUCCION 3")
console.log(`Top 1: ${top1}`)
console.log(`Top 3: ${top3}`)


// ----------------------------------------------------------------------------
// INSTRUCCIÓN 4: Combinar Listas con Spread Operator
// Llegan nuevos productos:
const nuevosProductos = [
  { id: 5, nombre: 'Batería de Plasma', precio: 800, categoria: 'Equipamiento', stock: 8 }
];

// Usa el Spread Operator (`...`) para fusionar `productos` y `nuevosProductos` 
// en una constante llamada `inventarioCompleto`.
// ----------------------------------------------------------------------------

const inventarioCompleto = [...productos, ...nuevosProductos]

console.log("\nINSTRUCCION 4")
console.log(inventarioCompleto)


// ----------------------------------------------------------------------------
// INSTRUCCIÓN 5: Propiedad Calculada (enStock)
// Crea una función flecha `agregarEstadoStock` que reciba el array de productos.
// Usa `.map()` para retornar un nuevo array de objetos agregando la propiedad `enStock: true/false`
// según si el `stock` es mayor a 0 (usa retorno implícito o explícito + spread operator).
// ----------------------------------------------------------------------------

const agregarEstadoStock = (lista) => {
  return lista.map(producto => {
    return {
      ...producto,
      enStock: producto.stock > 0
    }
  })
}

console.log("\nINSTRUCCION 5")
console.log(agregarEstadoStock(productos))

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 6: Filtrar Disponibles
// Crea una función flecha `obtenerDisponibles` que reciba un array de productos.
// Usa `.filter()` desestructurando la propiedad `stock` en los parámetros
// para devolver solo los productos que tengan stock disponible (stock > 0).
// ----------------------------------------------------------------------------

const obtenerDisponibles = (lista) => {
  return lista.filter(({stock}) => stock > 0)
};

console.log("\nINSTRUCCION 6")
console.log(obtenerDisponibles(productos))

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 7: Ordenar por Precio
// Crea una función flecha `ordenarPorPrecioDesc` que ordene los productos de mayor a menor precio.
// PISTA IMPORTANTE: `.sort()` MUTA (modifica) el array original.
// Usa el Spread Operator (`[...lista]`) primero para hacer una copia y luego aplicar `.sort()`.
// ----------------------------------------------------------------------------

const ordenarPorPrecioDesc = (lista) => {
    return [...lista].sort((a, b) => b.precio - a.precio)
}

console.log("\nINSTRUCCION 7")
console.log(ordenarPorPrecioDesc(productos))

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 8: Calcular Valor Total del Inventario (NUEVO)
// Crea una función flecha `calcularValorTotalInventario` que tome un array de productos.
// Usa `.reduce()` desestructurando `{ precio, stock }` en cada iteración
// para multiplicar el precio por el stock de cada producto y acumular el total general.
// PISTA: Recuerda pasar `0` como valor inicial del acumulador.
// ----------------------------------------------------------------------------

const calcularValorTotalInventario = (lista) => {
  return productos.reduce((total,{precio, stock}) => total + precio * stock, 0)
}



// ==========================================
// 📥 MÉTODOS DE ARRAYS
// ==========================================

// array.push(elemento)
const frutas = ["manzana", "plátano"];
frutas.push("naranja"); // ["manzana", "plátano", "naranja"]

// array.forEach(callback)
frutas.forEach(fruta => console.log("Fruta:", fruta));

// array.map(callback)
const numeros = 0
const dobles = numeros.map(num => num * 2); // [2, 4, 6]

// array.reduce(callback, valorInicial)
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0); // 6

// array.filter(callback)
const mayoresQueUno = numeros.filter(num => num > 1); // [2, 3]

// array.sort(callback)
const desordenados =
desordenados.sort((a, b) => b - a); // Ordena de mayor a menor: [5, 3, 1]


// ==========================================
// 🎲 GENERACIÓN ALEATORIA
// ==========================================

// Math.floor(Math.random() * (y - x + 1)) + x
const min = 1;
const max = 10;
const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; // Número entre 1 y 10


// ==========================================
// 🛠️ CREACIÓN Y ESTRUCTURA DE ARRAYS
// ==========================================

// Array.from({length: x}, callback)
const cincoUnos = Array.from({ length: 5 }, () => 1); // [1, 1, 1, 1, 1]

const cincoUnos2 = [];

for (let i = 0; i < 5; i++) {
  cincoUnos2.push(1);
}


// array.length
const cantidad = frutas.length; // 3


// ==========================================
// 🔤 MANIPULACIÓN DE TEXTOS (STRINGS)
// ==========================================

const texto = "hola";

// texto.split("")
const letras = texto.split(""); // ["h", "o", "l", "a"]

// array.reverse()
const letrasInvertidas = letras.reverse(); // ["a", "l", "o", "h"]

// array.join("")
const textoInvertido = letrasInvertidas.join(""); // "aloh"


// ==========================================
// 🔢 MATEMÁTICAS Y CONSOLA
// ==========================================

// Math.max(...array) - Forma moderna del .apply
const elMasAlto = Math.max(...numeros); // 3

// Math.min(...array) - Forma moderna del .apply
const elMasBajo = Math.min(...numeros); // 1

// numero.toFixed(x)
const pi = 3.14159;
const piCorto = pi.toFixed(2); // "3.14" (en formato texto)

// parseInt(texto)
const numeroConvertido = parseInt("42"); // 42 (en formato número)

// prompt(mensaje)
// let respuesta = prompt("Introduce tu nombre:"); // Abre ventana en el navegador
