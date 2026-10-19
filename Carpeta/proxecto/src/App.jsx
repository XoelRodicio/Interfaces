import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

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

function Cadrado({valor}) {
    return <button className="square">{valor}</button>
  }

export default function Taboleiro() {
  const cuadrado = []

  for (let i = 1; i <= 9; i++) {
    cuadrado.push(<Cadrado valor={i}/>)
  }

  return (
    <>
      <div className="board-row">
        {cuadrado.slice(0,3)}
      </div>
      <div className="board-row">
        {cuadrado.slice(3,6)}
      </div>
      <div className="board-row">
        {cuadrado.slice(6,9)}
      </div>
    </>
  )
}