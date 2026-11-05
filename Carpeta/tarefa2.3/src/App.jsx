// // RETO 1 · Dividir unha lista en dúas
// //
// // Agora móstranse todas as linguaxes nunha única lista.
// // Cambia o compoñente para que se vexan dúas listas, unha despois da outra:
// //   1. "Interpretadas": as que teñen tipo === "interpretada".
// //   2. "Outras": todas as demais.
// //
// // Como usalo: copia este código en src/App.jsx.
// // Comproba que non hai avisos na consola do navegador.

// const linguaxes = [
//   { id: 0, nome: "JavaScript", tipo: "interpretada", ano: 1995 },
//   { id: 1, nome: "Java", tipo: "compilada", ano: 1995 },
//   { id: 2, nome: "Python", tipo: "interpretada", ano: 1991 },
//   { id: 3, nome: "C", tipo: "compilada", ano: 1972 },
//   { id: 4, nome: "PHP", tipo: "interpretada", ano: 1995 },
//   { id: 5, nome: "Go", tipo: "compilada", ano: 2009 },
// ];

// export default function App() {
//   const interpretadas = linguaxes
//     .filter(linguaxe => linguaxe.tipo == "interpretada")
//     .map((linguaxe) => (
//       <li key={linguaxe.id}>
//         <b>{linguaxe.nome}</b> ({linguaxe.tipo}, {linguaxe.ano})
//       </li>
//     ));

//   const compiladas = linguaxes
//   .filter(linguaxe => linguaxe.tipo === "compilada")
//   .map((linguaxe) => (
//     <li key={linguaxe.id}>
//       <b>{linguaxe.nome}</b> ({linguaxe.tipo}, {linguaxe.ano})
//     </li>
//   ));

//   return (
//     <article>
//       <h1>Linguaxes de programación</h1>
//       <h2>INTERPRETADAS</h2>
//       <ul>{interpretadas}</ul>
//       <br></br>
//       <h2>COMPILADAS</h2>
//       <ul>{compiladas}</ul>
//     </article>
//   );
// }

// // RETO 2 · Listas aniñadas nun só compoñente

// // Cada playlist ten un array de cancións, pero agora só se mostra o seu nome.
// // Cambia o compoñente para que debaixo de cada nome apareza a lista das súas cancións.

// // Como usalo: copia este código en src/App.jsx.
// // Comproba que non hai avisos na consola do navegador.

// const playlists = [
//   {
//     id: 1,
//     nome: "Para estudar",
//     cancions: ["Mañá de luns", "Bosque de cores", "Cafeteira"],
//   },
//   {
//     id: 2,
//     nome: "Para correr",
//     cancions: ["Tren de medianoite", "Ritmo de présa", "Costa arriba", "Meta"],
//   },
//   {
//     id: 3,
//     nome: "Para cociñar",
//     cancions: ["Sal e pementa", "Lume lento"],
//   },
// ];

// export default function App() {
//   const elementos = playlists.map((playlist) => (
//     <section key={playlist.id}>
//       <h2>{playlist.nome}</h2>
//         <ul>{playlist.cancions.map((cancion) => (
//           <li key={cancion}>{cancion}</li>
//         ))}
//         </ul>
//     </section>
//   ));

//   return (
//     <article>
//       <h1>As miñas playlists</h1>
//       {elementos}
//     </article>
//   );
// }

// // RETO 3 · Extraer un compoñente para cada elemento
// //
// // O código de cada libro está escrito dentro do map().
// // Crea un compoñente Libro que reciba o libro por props e devolva ese mesmo <li>.
// // Despois usa <Libro key={libro.id} libro={libro} /> dentro do map().
// //
// // Como usalo: copia este código en src/App.jsx.
// // Comproba que non hai avisos na consola do navegador.

// function Libro({ libro }) {
//   return (
//       <>
//         <ul key={libro.id}>
//         <h3>{libro.titulo}</h3>
//         <p>{libro.autor}</p>
//         <p>{libro.ano}</p>
//         </ul>
//       </>
//   )
// }

// const libros = [
//   { id: 1, titulo: "Don Quixote", autor: "Miguel de Cervantes", ano: 1605 },
//   { id: 2, titulo: "Cen anos de soidade", autor: "Gabriel García Márquez", ano: 1967 },
//   { id: 3, titulo: "Os Lusíadas", autor: "Luís de Camões", ano: 1572 },
//   { id: 4, titulo: "Memorias dun neno labrego", autor: "Xosé Neira Vilas", ano: 1961 },
// ];
  
// export default function App() {
//   return libros.map((libro) => (
//   <Libro key={libro.id} libro={libro}/>
//   ));
// }

// // RETO 4 · Lista cun separador
// //
// // Agora cada paso móstrase nun <p>. Cambia o compoñente para que haxa unha liña <hr />
// // ENTRE os pasos: non antes do primeiro nin despois do último.
// //
// // Pistas:
// //   - Cada elemento vai ter varios nodos (<hr /> e <p>). A sintaxe curta <>...</> non admite key,
// //     así que usa <Fragment key={...}> importado de "react".
// //   - O map() dá o índice como segundo parámetro: (paso, indice) => ...
// //   - Mostra o <hr /> só cando indice > 0.
// //
// // Como usalo: copia este código en src/App.jsx.
// // Comproba que non hai avisos na consola do navegador.

// import { Fragment } from "react";

// const pasos = [
//   { id: 1, texto: "Executa npm run build." },
//   { id: 2, texto: "Proba a versión final con npm run preview." },
//   { id: 3, texto: "Sube o proxecto a GitHub." },
//   { id: 4, texto: "Publica o sitio no servizo que escollas." },
// ];

// export default function App() {
//   const elementos = pasos.map((paso, indice) => (
//     <Fragment key={paso.id}>
//       {(indice > 0) && <hr/>}
//       <p>{paso.texto}</p>
//     </Fragment>
//   ));

//   return (
//     <article>
//       <h1>Como despregar o proxecto</h1>
//       {elementos}
//     </article>
//   );
// }