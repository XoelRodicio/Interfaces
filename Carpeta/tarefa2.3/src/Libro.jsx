export default function Libro({ libro }) {
  return (
      <>
        <ul key={libro.id}>
        <h3>{libro.titulo}</h3>
        <p>{libro.autor}</p>
        <p>{libro.ano}</p>
        </ul>
      </>
  )
}
