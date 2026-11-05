export default function Navegador({ elementos }) {
  return (
    <ul className="nav">
      {elementos.map((elemento, index) => (
        <li key={index} className="nav-item">
          <a 
            className={`nav-link ${elemento.activo ? 'active' : ''} ${elemento.deshabilitado ? 'disabled' : ''}`} 
            href={elemento.href || '#'}
            aria-current={elemento.activo ? 'page' : undefined}
            aria-disabled={elemento.deshabilitado ? 'true' : undefined}
          >
            {elemento.texto}
          </a>
        </li>
      ))}
    </ul>
  );
}
