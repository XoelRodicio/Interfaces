// import Tarxeta from "./Tarxeta.jsx";
// import Aviso from "./Aviso.jsx";
// import ProductCard from "./ProductCard.jsx";

// export default function App() {
//   return (
//     <>
//       <Tarxeta />
//       <Aviso />
//       <ProductCard nome={"Zanahoria"} precio={5 + "€"} />
//     </>
//   );
// }

// import './App.css'
// import Toolbar from './Toolbar.jsx'
// import Galeria from './Galeria.jsx'

// export default function App() {
//     return (
//         <>
//         <Toolbar 
//             onPelicula = {() => alert('Reproducindo!')}
//             onImaxe = {() => alert('Yo teach whats for lunch')}
//             />
//         <Galeria></Galeria>
//         </>
//     )
// }

import './App.css'

import { useState } from "react"

function Cadrado({ valor, onCadradoClick }) {
    return (
        <button
            className="square"
            onClick={onCadradoClick}
        >
            {valor}
        </button>
    )
}

export default function Taboleiro() {
    const [xturno, setX] = useState(true)
    const [cadrados, setCadrados] = useState(Array(9).fill(null))
    const [estado, setEstado] = useState("Seguinte xogador: X")

    // Comprueba si hay un ganador
    function calcularGanador(cadrados) {
        const combinaciones = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < combinaciones.length; i++) {
            const [a, b, c] = combinaciones[i]
            const ganador = null

            if (cadrados[a] && cadrados[a] === cadrados[b] && cadrados[a] === cadrados[c]) {
                return cadrados[a]
            }
        }

        return null
    }

    // Gestiona los clics en las casillas
    function handleClick(i) {

        // Comprueba si la casilla está ocupada o hay ganador
        if (cadrados[i] || calcularGanador(cadrados)) {
            return
        }

        const novosCadrados = cadrados.slice()

        // Coloca X u O
        if (xturno) {
            novosCadrados[i] = "X"
        } else {
            novosCadrados[i] = "O"
        }

        setCadrados(novosCadrados)

        // Comprueba si hay ganador
        const ganador = calcularGanador(novosCadrados)

        if (ganador) {
            setEstado("Ganador: " + ganador)
        } else {
            setX(!xturno)
            setEstado("Seguinte xogador: " + (xturno ? "O" : "X"))
        }
    }

    return (
        <>
            <div>{estado}</div>

            <div className="board-row">
                <Cadrado valor={cadrados[0]} onCadradoClick={() => handleClick(0)} />
                <Cadrado valor={cadrados[1]} onCadradoClick={() => handleClick(1)} />
                <Cadrado valor={cadrados[2]} onCadradoClick={() => handleClick(2)} />
            </div>

            <div className="board-row">
                <Cadrado valor={cadrados[3]} onCadradoClick={() => handleClick(3)} />
                <Cadrado valor={cadrados[4]} onCadradoClick={() => handleClick(4)} />
                <Cadrado valor={cadrados[5]} onCadradoClick={() => handleClick(5)} />
            </div>

            <div className="board-row">
                <Cadrado valor={cadrados[6]} onCadradoClick={() => handleClick(6)} />
                <Cadrado valor={cadrados[7]} onCadradoClick={() => handleClick(7)} />
                <Cadrado valor={cadrados[8]} onCadradoClick={() => handleClick(8)} />
            </div>
        </>
    )
}

