
import './inicio.css';
import Tarxeta from "./Tarxeta.jsx";
import Navegador from "./Navegador.jsx";

const enlacesMenu = [
  { texto: 'Inicio', href: '#', activo: true },
  { texto: 'Mis Reservas', href: '#' },
  { texto: 'Historial', href: '#' },
  { texto: 'Perfil', href: '#', deshabilitado: true }
];

const deportes = [
  { nome: "Padel", icono: "🎾" },
  { nome: "Fútbol 7", icono: "⚽" },
  { nome: "Baloncesto", icono: "🏀" },
];

const pistas = [
  {
    id: 1,
    nome: "🎾 Pista 1",
    imagen: "unnamed.jpg",
    tipo: "Cuberta",
    deporte: "Padel",
    lugar: "Pavillón Municipal A",
    superficie: "Chan de céspede sintético",
    distancia: "a 900 m",
    disponible: true
  },
  {
    id: 2,
    nome: "🎾 Pista 2",
    imagen: "foto.jpg",
    tipo: "Exterior",
    deporte: "Padel",
    lugar: "Pavillón Municipal A",
    superficie: "Iluminación nocturna",
    distancia: "a 900 m",
    disponible: false
  },
  {
    id: 3,
    nome: "⚽ Campo Fútbol 7",
    imagen: "unnamed.jpg",
    tipo: "Exterior",
    deporte: "Fútbol 7",
    lugar: "Pavillón Municipal A",
    superficie: "Céspede artificial",
    distancia: "a 900 m",
    disponible: true
  },
  {
    id: 4,
    nome: "🏀 Pista Baloncesto",
    imagen: "foto.jpg",
    tipo: "Cuberta",
    deporte: "Baloncesto",
    lugar: "Polideportivo do Couto",
    superficie: "Parque cuberto",
    distancia: "a 1,4 km",
    disponible: false
  },
];

export default function Inicio() {
  return (
    <div className="rx">

      <main className="phone">

        <header>
          <div className="top-row">
            <div className="brand">
              <span className="dot" />
              ReservaXa
            </div>

            <div className="avatar" aria-hidden="true">
              👤
            </div>
          </div>

          <h1>Ola, Usuario</h1>
          <p>Instalacións deportivas municipais ao teu alcance</p>
        </header>

        <div className="search" role="search">
          <span aria-hidden="true">🔍</span>

          <label htmlFor="busca" className="sr-only">
            Buscar
          </label>

          <input
            id="busca"
            type="text"
            placeholder="Busca unha instalación ou deporte"
          />
        </div>

        <div className="content">
          <Navegador elementos={enlacesMenu}/>
          
          <section>
            <p className="section-label">
              Deportes populares
            </p>

            <div className="sport-shortcuts">
              {deportes.map((d) => (
                <a
                  key={d.nome}
                  className="shortcut"
                  href="2-seleccion-pistas.html"
                >
                  <span className="ic" aria-hidden="true">
                    {d.icono}
                  </span>

                  <span>{d.nome}</span>
                </a>
              ))}
            </div>
          </section>

          <button
            type="button"
            className="cta"
            onClick={() => onReservar()}
          >
            Reservar unha pista
          </button>

          <section>
            <p className="section-label">
              Pistas dispoñibles
            </p>

            <div className="pista-list">

              {pistas.map((p) => (
                <Tarxeta
                  key={p.id}
                  pista={p}
                />
              ))}

            </div>
          </section>

        </div>

      </main>
    </div>
  );
}
