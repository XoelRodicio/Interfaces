//################################################################################
// Tienes un array con los importes recaudados por cada reserva durante una jornada:
// const ingresos = [15, 20, 15, 30, 25, 15, 40];
// Utiliza un bucle para calcular la recaudación total del día y la media de ingresos.
//################################################################################
// Escribe tu código aquí

const ingresos = [15, 20, 15, 30, 25, 15, 40];

let ingresosTotales = 0;

    for(let ingreso of ingresos) {
        ingresosTotales += ingreso
 }

console.log("Ingresos totales del día: " + ingresosTotales)
console.log("Media de ingresos del día: " + (ingresosTotales / ingresos.length))