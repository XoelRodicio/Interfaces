let texto = "Adios"
let atrib = "foto.jpg"
let inicio = 2019
let expresion = 2026 - inicio

export default function restaurante() {
  return (
    <>
      <h1>RESTAURANTE PACO</h1>
      <img src="images.jpg" alt="Foto" className="foto" style={{ width: "200px", height: "200px"}}/>
      <p>Hola</p>
      <p>Hola2</p>
      <p>Hola3</p>
      <ul>
        <li>{texto}</li>
        <li>
          <img src={atrib}></img> 
        </li>
        <li>Abrimos por primera vez en {inicio}</li>
        <li>Llevamos abiertos {expresion} años</li>
      </ul>
    </>
  )
}