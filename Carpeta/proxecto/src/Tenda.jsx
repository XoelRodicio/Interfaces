const produtos = [
  { id: 1, nome: "Teclado", prezo: 25 },
  { id: 2, nome: "Rato", prezo: 15 },
];

export default function Tenda() {
  return (
    <>
      <h1 className="titulo">Tenda</h1>
      <img src="unnamed.jpg" alt="Logo"></img>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>{p.nome} - {p.prezo} €</li>
        ))}
      </ul>
    </>
  )
}