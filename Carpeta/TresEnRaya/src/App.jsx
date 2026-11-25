import { useState } from "react";
import "./styles.css";

function Cadrado({ valor, onCadradoClick }) {
  return (
    <button className="square" onClick={onCadradoClick}>
      {valor}
    </button>
  );
}

function calcularGanador(cadrados) {
  const ganadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < ganadoras.length; i++) {
    const [a, b, c] = ganadoras[i];
    if (cadrados[a] && cadrados[a] === cadrados[b] && cadrados[a] === cadrados[c]) {
      return cadrados[a];
    }
  }
  return null;
}

export function Taboleiro({ xTurno, cadrados, onXogar }) {
  const ganador = calcularGanador(cadrados);
  const estado = ganador
    ? "Ganador: " + ganador
    : "Siguiente xogador: " + (xTurno ? "X" : "O");

  function handleClick(i) {
    // Ignorar si la casilla está ocupada o ya hay ganador
    if (cadrados[i] || calcularGanador(cadrados)) return;
    const novosCadrados = cadrados.slice();
    novosCadrados[i] = xTurno ? "X" : "O";
    onXogar(novosCadrados);
  }

  return (
    <>
      <div>{estado}</div>
      {[0, 3, 6].map((inicio) => (
        <div key={inicio}>
          {[0, 1, 2].map((j) => (
            <Cadrado
              key={inicio + j}
              valor={cadrados[inicio + j]}
              onCadradoClick={() => handleClick(inicio + j)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default function Xogo() {
  const [xTurno, setXTurno] = useState(true)
  const [historial, setHistorial] = useState([Array(9).fill(null)]);
  const [movementoActual, setMovementoActual] = useState(0)
  const cadradosActuais = historial[movementoActual];

  function handleXogo(novosCadrados) {
    setHistorial([...historial, novosCadrados]);
    setMovementoActual(historial.length - 1)
    setXTurno(!xTurno)
  }

  function saltarA(movemento) {
    setMovimientoActual(movemento)
    setXTurno(movemento % 2 === 0)
  }

  const movementos = historial.map((cadrados, index) => (
    <li key={index}>
      <button onClick={() => saltarA(index)}>
        {index == 0 ? "Ir al inicio del juego" : "Ir al movimiento #" + index}
      </button>
    </li>
  ));

  return (
    <div className="game">
      <div className="game-board">
        <Taboleiro xTurno={xTurno} cadrados={cadradosActuais} onXogar={handleXogo} />
      </div>
      <div className="game-info">
        <ol>{movementos}</ol>
      </div>
    </div>
  );
}