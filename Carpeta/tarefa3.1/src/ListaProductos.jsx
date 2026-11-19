export default function ListaProductos({ productos, textoBuscar }) {
  return productos.length > 0 ? (
    <ul>
      {productos.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  ) : (
    <p>Non se atoparon resultados para: {textoBuscar}</p>
  )
}