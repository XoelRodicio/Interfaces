import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './inicio.css'
import Tarxeta from './Tarxeta'

const Pistas = [
    {
      id:1,
      nome: "Pista 1",
      imagen: "foto.jpg",
      tipo: "Cuberta",
      disponible: true,
      deporte: "Padel",
      lugar: "Tel Aviv",
      superficie: "Cracka Pack Chris Griffin",
      distancia: "a 900 m"
    },
    {   
      id:2,
      nome: "Pista 2",
      imagen: "unnamed.jpg",
      tipo: "Exterior",
      disponible: false,
      deporte: "Tenis",
      lugar: "Big Yahu spot",
      superficie: "Yo teach whats for lunch",
      distancia: "a 1.2 km"
    }
]

export default function Inicio() {
  return (
    <div className="contenedor-pistas">
      <h1>Reserva de Pistas</h1>
      {Pistas.map(pista => (
        <div key={pista.id}>
          <Tarxeta 
            key={pista.id}
            pista={pista}
          /><br></br>
          </div>
      ))}
    </div>
  )
}




// export default function Inicio() { 
//   return (
//     <div className="contenedor-pistas">
//       <h1>Reserva de Pistas</h1>
      
//         <Tarxeta 
//         nome="Pista 1"
//         tipo="Cuberta"
//         estado="Libre"
//         deporte="Padel"
//         lugar="Tel Aviv"
//         superficie="Cracka Pack Chris Griffin"
//         distancia="a 900 m"
//       />
//       <br></br>
//       <Tarxeta 
//         nome="Pista 2"
//         tipo="Exterior"
//         estado="Ocupada"
//         deporte="Tenis"
//         lugar="Big Yahu spot"
//         superficie="Yo teach whats for lunch"
//         distancia="a 1.2 km"
//       />
//     </div>
//   )
// }






// function formatDate(date) {
//   return new Intl.DateTimeFormat (
//     'es-ES',
//     { weekday: 'long' }
//   ).format(date)
// }

// const today = new Date(); 
// const etiqueta = "h3"

// const ies = {nome: "IES San Mamede", direccion: "O castelo"}

// export default function Tablero() {
//   const ciclos = "DAM, SMR, FPB"
  
//   return (
//     <>
//       <h1>Gonzalo Perez Jacome</h1>
//       <img src="/1738147431483.jpg" className="photo" alt="Jacome"></img>
      
//       <ul style={{backgroundColor: 'black', color: 'pink'}}>
//         <li>Salir de una alcantarilla</li>
//         <li>Pegar a una vieja</li>
//         <li>Estafar a Omar Montes {ciclos}</li>
//       </ul>
      
//       <h2>{ies.nome} en {ies.direccion}</h2>

//       <h3>Hoy es {formatDate(today)}</h3>
//     </>
//   )
// }

// import Lucia from './Perfil.jsx'

// export default function Taboleiro() {
//   return (
//     <Lucia>
//     </Lucia>
//   )
// }


//Ejercicio 4
//1- la funcion Tenda en mayuscula
//2- {} es para atributos y {{}} es para objetos

// function Cadrado() {
//   for(let i = 1; i < 9; i++) {
//    <button className="square"> {i} </button>
//   }
// }

// export default function Taboleiro() {
//   return (
//   <>
//     <div className="board-row">
//         <Cadrado />
//         <Cadrado />
//         <Cadrado />
//     </div>
//     <div className="board-row">    
//         <Cadrado />
//         <Cadrado />
//         <Cadrado /> 
//     </div>
//     <div className="board-row">
//         <Cadrado />
//         <Cadrado />
//         <Cadrado />
//     </div>        
//    </>
//   )
// }

// function Cadrado({valor}) {
//     return <button className="square">{valor}</button>
//   }

// export default function Taboleiro() {
//   const cuadrado = []

//   for (let i = 1; i <= 9; i++) {
//     cuadrado.push(<Cadrado valor={i}/>)
//   }

//   return (
//     <>
//       <div className="board-row">
//         {cuadrado.slice(0,3)}
//       </div>
//       <div className="board-row">
//         {cuadrado.slice(3,6)}
//       </div>
//       <div className="board-row">
//         {cuadrado.slice(6,9)}
//       </div>
//     </>
//   )
// }

// const deportes = [
//   { nome: "Padel", icono: "🎾" },
//   { nome: "Fútbol 7", icono: "⚽" },
//   { nome: "Baloncesto", icono: "🏀" },
// ];

// const pistas = [
//   {
//     id: 1,
//     titulo: "Pista 1 — Cuberta",
//     tipo: "padel",
//     icono: "🎾",
//     lugar: "Padel · Pavillón Municipal A",
//     detalle: "Chan de céspede sintético · a 900 m",
//   },
//   {
//     id: 2,
//     titulo: "Pista 2 — Exterior",
//     tipo: "padel",
//     icono: "🎾",
//     lugar: "Padel · Pavillón Municipal A",
//     detalle: "Iluminación nocturna · a 900 m",
//   },
//   {
//     id: 3,
//     titulo: "Campo Fútbol 7",
//     tipo: "futbol",
//     icono: "⚽",
//     lugar: "Fútbol 7 · Pavillón Municipal A",
//     detalle: "Céspede artificial · a 900 m",
//   },
//   {
//     id: 4,
//     titulo: "Pista Baloncesto",
//     tipo: "baloncesto",
//     icono: "🏀",
//     lugar: "Baloncesto · Polideportivo do Couto",
//     detalle: "Parqué cuberto · a 1,4 km",
//   },
// ];

// const navItems = [
//   { label: "Inicio", icono: "🏠", activo: true },
//   { label: "Reservas", icono: "📅", activo: false },
//   { label: "Perfil", icono: "👤", activo: false },
// ];


