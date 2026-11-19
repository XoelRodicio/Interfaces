// 1################################################################################
// Supoñendo que unha matrícula antiga ten o formato: OU-XXXX-L, onde X sería un díxito, 
// L unha letra e OU sería un coche de Ourense. 
// Realizar un programa para axudar á DXT de Galicia a identificar a provincia das matrículas dos coches antigos. 
// Deberanse dar as seguintes saídas:
// C -> A Coruña
// LU -> Lugo
// OU -> Ourense
// PO -> Pontevedra
// Estas provincias deberán ser recoñecidas tanto en maiúsculas como en minúsculas.
// Se se introduce outra provincia, ou non a hai, o programa amosará a mensaxe "Matrícula descoñecida".
//################################################################################
// Escribe tu código aquí

// 1################################################################################
// Identificar a provincia das matrículas dos coches antigos (OU-XXXX-L).
const identificarProvincia = (matricula) => {

  const mat = matricula.trim().toUpperCase();

  switch (true) {
    case mat.startsWith('C-'):
      return 'A Coruña';
    case mat.startsWith('LU-'):
      return 'Lugo';
    case mat.startsWith('OU-'):
      return 'Ourense';
    case mat.startsWith('PO-'):
      return 'Pontevedra';
    default:
      return 'Matrícula descoñecida';
  }
};

console.log(identificarProvincia('ou-1234-A')); // Ourense
console.log(identificarProvincia('C-9999-Z'));  // A Coruña
console.log(identificarProvincia('CO-1234-A')); // Matrícula descoñecida (gracias al guion)



// 2################################################################################
// Realizar un programa que lea unha palabra por teclado e indique se é un palíndromo ou non 
// (sen diferenciar entre maiúsculas e minúsculas). 
// Supoñeremos que o usuario só introducirá letras (nin comas, nin puntos, nin acentos etc.) 
// aínda que si poderá introducir maiúsculas e minúsculas. 
// Un palíndromo é un texto que se le igual de esquerda a dereita que de dereita a esquerda. 
// Valorarase que a comprobación sexa nunha soa línea.
// Escribe tu código aquí

// Nota: Se o executas nun navegador podes usar: const palabra = prompt("Introduce unha palabra:");
const prompt = require("prompt-sync")();


let nombre = prompt("¿Cómo te llamas?");
console.log("Hola, " + nombre);

const ePalindromo = (texto) => texto.toLowerCase() === texto.toLowerCase().split('').reverse().join('');

console.log('\n--- Exercicio 2 ---');
console.log(`¿É "${palabra}" un palíndromo?:`, ePalindromo(palabra) ? 'Si, é un palíndromo' : 'Non é un palíndromo');


//################################################################################
const instalacionsIniciais = [
  { id: 1, nome: 'Padel 1', tipo: 'Pádel', prezoHora: 12.00, dispoñible: true },
  { id: 2, nome: 'Campo Coberto', tipo: 'Fútbol Sala', prezoHora: 25.00, dispoñible: false },
  { id: 3, nome: 'Pista Exterior', tipo: 'Tenis', prezoHora: 8.50, dispoñible: true },
  { id: 4, nome: 'Padel 2', tipo: 'Pádel', prezoHora: 12.00, dispoñible: true },
];

const reservaActual = {
  idReserva: 'res-102',
  usuario: 'Sara Gómez',
  pistaId: 1,
  detalles: { data: '2026-10-15', hora: '18:00', pagado: false }
};

// 3################################################################################
// Crear unha función flecha chamada imprimirFichaPista que reciba un obxecto pista. 
// Débese desestruturar os atributos nome, tipo e prezoHora directamente nos argumentos da función.
// Saída: "A pista [nome] ([tipo]) ten un custo de [prezoHora]€/hora."
// Escribe tu código aquí

const imprimirFichaPista = ({ nome, tipo, prezoHora }) => {
  console.log(`A pista ${nome} (${tipo}) ten un custo de ${prezoHora}€/hora.`);
};

console.log('\n--- Exercicio 3 ---');
imprimirFichaPista(instalacionsIniciais[0]);


// 4################################################################################
// Xerar un novo array instalacionsTarifaNoite. 
// Cada pista debe manter todos os seus datos orixinais pero co atributo prezoHora incrementado en 2€.
// Escribe tu código aquí

const instalacionsTarifaNoite = instalacionsIniciais.map((pista) => ({
  ...pista,
  prezoHora: pista.prezoHora + 2
}));

console.log('\n--- Exercicio 4 ---');
console.log(instalacionsTarifaNoite);


// 5################################################################################
// Crear unha función filtrarPistasLibres que reciba o array de pistas e o tipo de deporte.
// Debe devolver un novo array só coas pistas que teñan dispoñible: true e coincidan co tipo.
// Escribe tu código aquí

const filtrarPistasLibres = (pistas, tipoDeporte) => {
  return pistas.filter((pista) => pista.dispoñible && pista.tipo.toLowerCase() === tipoDeporte.toLowerCase());
};

console.log('\n--- Exercicio 5 ---');
console.log(filtrarPistasLibres(instalacionsIniciais, 'Pádel'));


// 6################################################################################
// Temos un array coas reservas confirmadas do día: 
// const reservasDia = ['res-100', 'res-101'];.
// Sen usar .push() crear a función engadirReserva(reservasActuales, idNovaReserva) 
// que devolva un novo array coa nova reserva engadida ao final usando o Spread Operator.
// Escribe tu código aquí

const reservasDia = ['res-100', 'res-101'];

const engadirReserva = (reservasActuales, idNovaReserva) => [...reservasActuales, idNovaReserva];

console.log('\n--- Exercicio 6 ---');
const novasReservasDia = engadirReserva(reservasDia, 'res-102');
console.log(novasReservasDia);


// 7################################################################################
// Crear un novo obxecto reservaPagada sen modificar o obxecto reservaActual orixinal.
// Copiar o obxecto e actualizar a propiedade anidada pagado: true dentro de detalles.
// Escribe tu código aquí

const reservaPagada = {
  ...reservaActual,
  detalles: {
    ...reservaActual.detalles,
    pagado: true
  }
};

console.log('\n--- Exercicio 7 ---');
console.log('Orixinal (pagado):', reservaActual.detalles.pagado); // false
console.log('Copia (pagado):', reservaPagada.detalles.pagado);     // true


// 8################################################################################
// Dada a seguinte matriz de dispoñibilidade (true = libre, false = ocupado):
const cuadranteSemanal = [
  [true,  true,  false, true],  // Luns (0)
  [false, true,  true,  true],  // Martes (1)
  [true,  false, false, true],  // Mércores (2)
  [true,  true,  true,  false], // Xoves (3)
  [false, false, true,  true]   // Venres (4)
];
// Crear a función analizarDispoñibilidadeSemanal(cuadrante) que recorra a matriz con bucles anidados e devolva un obxecto con: 
// totalHorasLibres: Número total de huecos true.
// diaConMáisHuecos: Índice do día (0 a 4) con máis horas libres.
// franxaMáisOcupada: Índice da columna (0 a 3) con máis horas ocupadas (false).
// Escribe tu código aquí

const analizarDispoñibilidadeSemanal = (cuadrante) => {
  let totalHorasLibres = 0;
  let diaConMaisHuecos = 0;
  let maxHuecosDia = -1;

  // Inicializamos un array para contar os ocupados (false) de cada franxa (columna)
  const ocupadosPorFranxa = new Array(cuadrante[0].length).fill(0);

  for (let dia = 0; dia < cuadrante.length; dia++) {
    let huecosNesteDia = 0;

    for (let franxa = 0; franxa < cuadrante[dia].length; franxa++) {
      if (cuadrante[dia][franxa] === true) {
        totalHorasLibres++;
        huecosNesteDia++;
      } else {
        ocupadosPorFranxa[franxa]++;
      }
    }

    if (huecosNesteDia > maxHuecosDia) {
      maxHuecosDia = huecosNesteDia;
      diaConMaisHuecos = dia;
    }
  }

  let franxaMaisOcupada = 0;
  let maxOcupadosFranxa = -1;

  for (let i = 0; i < ocupadosPorFranxa.length; i++) {
    if (ocupadosPorFranxa[i] > maxOcupadosFranxa) {
      maxOcupadosFranxa = ocupadosPorFranxa[i];
      franxaMaisOcupada = i;
    }
  }

  return {
    totalHorasLibres,
    diaConMáisHuecos: diaConMaisHuecos,
    franxaMáisOcupada: franxaMaisOcupada
  };
};

console.log('\n--- Exercicio 8 ---');
console.log(analizarDispoñibilidadeSemanal(cuadranteSemanal));


// 9################################################################################
// Calcular os datos das pistas dispoñibles. Devolve un obxecto con:
// totalPrezoDispoñible: Suma dos prezos por hora.
// mediaPrezoDispoñible: Media do prezo por hora (con 2 decimais).
// Escribe tu código aquí

const calcularDatosDispoñibles = (pistas) => {
  const dispoñibles = pistas.filter((p) => p.dispoñible);
  const total = dispoñibles.reduce((acumulador, p) => acumulador + p.prezoHora, 0);
  const media = dispoñibles.length > 0 ? Number((total / dispoñibles.length).toFixed(2)) : 0;

  return {
    totalPrezoDispoñible: total,
    mediaPrezoDispoñible: media
  };
};

console.log('\n--- Exercicio 9 ---');
console.log(calcularDatosDispoñibles(instalacionsIniciais));
