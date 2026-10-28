export default function Tarxeta({ pista }) {
  return (
    <a className="pista-card">
      <div className="pista-media padel" aria-hidden="true">
        <img src={pista.imagen} alt={pista.nome} />
      </div>
      <div className="pista-body">
        <div className="pista-head">
          <h3>{pista.nome} - {pista.tipo}</h3>
          <span className={`pista-badge ${pista.disponible ? 'badge-libre' : 'badge-ocupado'}`}>
            {pista.disponible ? "Libre" : "Ocupado"}
          </span>
        </div>
        <p>{pista.deporte} · {pista.lugar}</p>
        <p>{pista.superficie} · {pista.distancia}</p>
        <span className="pista-cta">Reservar</span>
      </div>
    </a>
  )
}
