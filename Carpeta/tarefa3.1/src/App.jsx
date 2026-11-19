import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BarraBusca from './BarraBusca'
import ListaProductos from './ListaProductos'

const PRODUCTOS = [
  'Teclado mecánico',
  'Rato sen fíos',
  'Monitor 4K',
  'Auriculares bluetooth',
  'Alfombrilla RGB',
  'Cámara web HD'
];

export default function App() {
  const [textoBuscar, setTextoBuscar] = useState('')

  const filtrar = PRODUCTOS.filter(p => (
    p.toLowerCase().includes(textoBuscar.toLowerCase())
  ))

  return (
    <>
     <h1>BUSCADOR DE PRODUCTOS</h1>
      <BarraBusca 
        textoBuscar={textoBuscar}
        setTextoBuscar={setTextoBuscar}
      />

      <ListaProductos 
        productos={filtrar}
        textoBuscar={textoBuscar}
      />
    </>
  )
}
