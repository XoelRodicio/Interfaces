import './App.css'
import { useState } from "react"
import Button from './Button.jsx'
import { sculptureList } from './data.jsx'

export default function Galeria() {

  const [index, setIndex] = useState(0)

  function onSeguinteClick() {
    if (index < sculptureList.length -1) {
      setIndex (index + 1) 
    } else {
      setIndex(0)
    } 
  }

  const [mostrar, setBool] = useState(false)

  function onDetalles() {
    if (mostrar == false) {
      setBool(true)
    } else {
      setBool(false)
    }
  }

    let escultura = sculptureList[index]

    return (
      <>
        <Button onClick={onSeguinteClick}> Seguinte </Button>
        <h2>{escultura.name}</h2>
        <Button onClick={onDetalles}>Mostrar detalles</Button>
        {mostrar && <p>{escultura.description} </p>}
        <img src={escultura.url} alt={escultura.alt}/>
        <br></br>
        <h4>Imaxe {index + 1} de {sculptureList.length}</h4>
      </>
    )
}