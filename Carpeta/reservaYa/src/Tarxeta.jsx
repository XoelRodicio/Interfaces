export default function Tarxeta({ pista }) {
  return (
    // <a className="pista-card">
    //   <div className="pista-media padel" aria-hidden="true">
    //   </div>
    //   <div className="pista-body">
    //     <div className="pista-head">
    //       <h3>{pista.nome} - {pista.tipo}</h3>
    //       <span className={`pista-badge ${pista.disponible ? 'badge-libre' : 'badge-ocupado'}`}>
    //         {pista.disponible ? "Libre" : "Ocupado"}
    //       </span>
    //     </div>
    //     <p>{pista.deporte} · {pista.lugar}</p>
    //     <p>{pista.superficie} · {pista.distancia}</p>
    //     <span className="pista-cta">Reservar</span>
    //   </div>
    // </a>
    
  
  <section className="card" style={{ maxWidth: '320px' }}>
    
    <div className="pista-media padel" aria-hidden="true">
      <img src={pista.imagen} className="card-img-top" alt="Imagen de la pista" style={{ maxWidth: '100px'}}></img>
    </div>
    
    <div className="card-body">
      <div className="pista-head">
        <h4 className="card-title">{pista.nome} - {pista.tipo}</h4>
        <span className={`pista-badge ${pista.disponible ? 'badge-libre' : 'badge-ocupado'}`}>
          {pista.disponible ? "Libre" : "Ocupado"}
        </span>
      </div>

      <div className="card-text">
        <p>{pista.deporte} · {pista.lugar}</p>
        <p>{pista.superficie} · {pista.distancia}</p>
      </div>

      <a href="#" className="btn-solid theme-primary pista-cta">Reservar</a>
    </div>
  </section>
  )
}