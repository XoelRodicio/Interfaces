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
 
function Cadrado() {

    const [valor, setValor] = useState(null)

function onClick() {
    setValor('X')
}
    return (
        <button 
            className="square"
            onClick={onClick}>
                { valor }
        </button>
    )
}

export default function Taboleiro() {
    return (
    <>
        <div className="board-row">
            <Cadrado />
            <Cadrado />
            <Cadrado />
        </div>
        <div className="board-row">
            <Cadrado />
            <Cadrado />
            <Cadrado />
        </div>
        <div className="board-row">
            <Cadrado />
            <Cadrado />
            <Cadrado />
        </div>
    </>
    )
}