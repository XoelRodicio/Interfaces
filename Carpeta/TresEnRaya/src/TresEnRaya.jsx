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

export default function Xogo() {
  const [xTurno, setXTurno] = useState(true);
  const [historial, setHistorial] = useState([Array(9).fill(null)]);
  const [movementoActual, setMovementoActual] = useState(0);
  const [ascendente, setAscendente] = useState(true);
  const cadradosActuais = historial[movementoActual];

  function handleXogo(novosCadrados) {
    const novoHistorial = [...historial.slice(0, movementoActual + 1), novosCadrados];
    setHistorial(novoHistorial);
    setMovementoActual(novoHistorial.length - 1);
    setXTurno(!xTurno);
  }

  function saltarA(movemento) {
    setMovementoActual(movemento);
    setXTurno(movemento % 2 === 0);
  }

  const movementos = historial.map((cadrados, index) => (
    <li key={index}>
      {index === movementoActual ? (
        <div>Estás en el movimiento {index}</div>
      ) : (
        <button onClick={() => saltarA(index)}>
          {index === 0 ? "Ir al inicio del juego" : "Ir al movimiento " + index}
        </button>
      )}
    </li>
  ));

  return (
    <div className="game">
      <div className="game-board">
        <Taboleiro xTurno={xTurno} cadrados={cadradosActuais} onXogar={handleXogo} />
      </div>
      <div className="game-info">
        <button onClick={() => setAscendente(!ascendente)}>
          {ascendente ? "Descendente" : "Ascendente"}
        </button>
        <ol>{ascendente ? movementos : movementos.reverse()}</ol>
      </div>
    </div>
  );
}

export function Taboleiro({ xTurno, cadrados, onXogar }) {
  const ganador = calcularGanador(cadrados);
  const estado = ganador
    ? "Ganador: " + ganador
    : "Siguiente xogador: " + (xTurno ? "X" : "O");

  function handleClick(i) {
    if (cadrados[i] || ganador) {
      return;
    }

    const novosCadrados = cadrados.slice();
    novosCadrados[i] = xTurno ? "X" : "O";
    onXogar(novosCadrados);
  }

  return (
    <>
      <div>{estado}</div>

      {cadrados.map((cadrado, index) => {
        if (index % 3 !== 0) {
          return null;
        }

        return (
          <div key={index}>
            <Cadrado valor={cadrados[index]} onCadradoClick={() => handleClick(index)} />
            <Cadrado valor={cadrados[index + 1]} onCadradoClick={() => handleClick(index + 1)} />
            <Cadrado valor={cadrados[index + 2]} onCadradoClick={() => handleClick(index + 2)} />
          </div>
        );
      })}
    </>
  );
}
