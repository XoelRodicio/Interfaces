// Versión estática: solo JSX, map y key (contenido de la unidad)

import { useState } from "react";


function Cadrado({valor, onCadradoClick}) {
  return (
  <button
    className="square"
    onClick={onCadradoClick}>
      {valor}
  </button>
  )
}

function calcularGanador(cadrados) {
  const ganadoras = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  let ganador = null;
  for (let i = 0; i <ganadoras.length; i++){
    const [a,b,c] = ganadoras[i]
    if (cadrados[a] && cadrados[a] == cadrados[b] && cadrados[a] == cadrados[c]){
      ganador=cadrados[a]
    }
  }
  return ganador
}

export default function xogo(){
const [xTurno, setXturno] = useState(true)
const [historial, setHistorial] = useState([Array(9).fill(null)])
const cadradosActuais = historial[historial.length-1]
function handleXogo(novosCadrados){
  setHistorial ([...historial,novosCadrados])
  setXturno (!xTurno)
  console.log(historial)
}
function ClickMovemento(index){
  novosCadrados
}
const movementos = historial.map(
  (movimiento, index) => <button onClick={}>{index == 0 && "Ir al inicio del juego"}{index != 0 && "Ir al movimiento #"+index}</button>
)
  return<>
    <div className="game">
    <div className="game-info">
      <ol>
        {movementos}
      </ol>
    </div>
    <div className="game-board">
      <Taboleiro xTurno={xTurno} cadrados={cadradosActuais} onXogar={handleXogo}/>
    </div>
    </div>
  </>
}
export function Taboleiro({xTurno, cadrados, onXogar}) {
  
  
  let estado;
  const ganador = calcularGanador(cadrados);  

  if (ganador != null){
    estado = "Ganador: " + ganador;
  }else{
    estado = "Siguiente xogador: " + (xTurno? "X" : "O");
  }

  function handleClick(i){
    const novosCadrados = cadrados.slice();
    
    if (xTurno){
    novosCadrados[i] = "X";
    }else{
    novosCadrados[i] = "O";
    }
    onXogar(novosCadrados)
    
  }
  return (
  <>
    
    <div>{estado}</div>
    <div>
      <Cadrado valor={cadrados[0]} onCadradoClick={() => handleClick(0)}/>
      <Cadrado valor={cadrados[1]} onCadradoClick={() => handleClick(1)}/>
      <Cadrado valor={cadrados[2]} onCadradoClick={() => handleClick(2)}/>    
    </div>
    <div>
      <Cadrado valor={cadrados[3]} onCadradoClick={() => handleClick(3)}/>
      <Cadrado valor={cadrados[4]} onCadradoClick={() => handleClick(4)}/>
      <Cadrado valor={cadrados[5]} onCadradoClick={() => handleClick(5)}/>    
    </div>
    <div>
      <Cadrado valor={cadrados[6]} onCadradoClick={() => handleClick(6)}/>
      <Cadrado valor={cadrados[7]} onCadradoClick={() => handleClick(7)}/>
      <Cadrado valor={cadrados[8]} onCadradoClick={() => handleClick(8)}/>    
    </div>       
  </>);
}