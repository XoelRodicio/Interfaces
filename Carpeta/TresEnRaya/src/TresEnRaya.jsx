import { useState } from "react";
import "./styles.css";

function Cadrado({ valor, onCadradoClick, gañadora }) {
  return (
    <button className={gañadora ? "square winner" : "square"} onClick={onCadradoClick}>
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
      return { ganador: cadrados[a], linea: [a, b, c] };
    }
  }
  return null;
}

export default function Xogo() {
  const [xTurno, setXTurno] = useState(true);
  const [historial, setHistorial] = useState([
    { cadrados: Array(9).fill(null), posicion: null },
  ]);
  const [movementoActual, setMovementoActual] = useState(0);
  const [ascendente, setAscendente] = useState(true);
  const cadradosActuais = historial[movementoActual].cadrados;

  function handleXogo(novosCadrados, posicion) {
    const novoHistorial = [
      ...historial.slice(0, movementoActual + 1),
      { cadrados: novosCadrados, posicion: posicion },
    ];
    setHistorial(novoHistorial);
    setMovementoActual(novoHistorial.length - 1);
    setXTurno(!xTurno);
  }

  function saltarA(movemento) {
    setMovementoActual(movemento);
    setXTurno(movemento % 2 === 0);
  }

  const movementos = historial.map((paso, index) => {
    let localizacion = "";
    if (paso.posicion !== null) {
      const columna = (paso.posicion % 3) + 1;
      const fila = Math.floor(paso.posicion / 3) + 1;
      localizacion = " (" + columna + ", " + fila + ")";
    }

    return (
      <li key={index}>
        {index === movementoActual ? (
          <div>Estás en el movimiento {index + localizacion}</div>
        ) : (
          <button onClick={() => saltarA(index)}>
            {index === 0 ? "Ir al inicio del juego" : "Ir al movimiento " + index + localizacion}
          </button>
        )}
      </li>
    );
  });

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
  const resultado = calcularGanador(cadrados);
  const ganador = resultado ? resultado.ganador : null;
  const linea = resultado ? resultado.linea : [];

  let estado;
  if (ganador) {
    estado = "Ganador: " + ganador;
  } else if (cadrados.every((c) => c !== null)) {
    estado = "Empate";
  } else {
    estado = "Siguiente xogador: " + (xTurno ? "X" : "O");
  }

  function handleClick(i) {
    if (cadrados[i] || ganador) {
      return;
    }

    const novosCadrados = cadrados.slice();
    novosCadrados[i] = xTurno ? "X" : "O";
    onXogar(novosCadrados, i);
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
            <Cadrado
              valor={cadrados[index]}
              gañadora={linea.includes(index)}
              onCadradoClick={() => handleClick(index)}
            />
            <Cadrado
              valor={cadrados[index + 1]}
              gañadora={linea.includes(index + 1)}
              onCadradoClick={() => handleClick(index + 1)}
            />
            <Cadrado
              valor={cadrados[index + 2]}
              gañadora={linea.includes(index + 2)}
              onCadradoClick={() => handleClick(index + 2)}
            />
          </div>
        );
      })}
    </>
  );
}
