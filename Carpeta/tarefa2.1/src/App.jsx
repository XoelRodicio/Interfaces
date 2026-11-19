///CODIGO CORREGIDO
const produtos = [
  { id: 1, nome: "Teclado", prezo: 25 },
  { id: 2, nome: "Rato", prezo: 15 },
];

export default function Tenda() {
  return (
    <>
      <h1 className="titulo">Tenda</h1>
      <img src="logo.png" alt="Logo" />
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            {p.nome} - {p.prezo} €
          </li>
        ))}
      </ul>
    </>
  );
}


/* <h1>Lucía Pérez</h1>
<img src="foto.jpg" alt="Foto de Lucía" class="foto">
<p class="rol">Deseñadora web</p>
<label for="correo">Correo</label>
<input id="correo" type="email" tabindex="1">
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
<p style="color: gray; font-size: 14px">Dispoñible para proxectos</p> */

let nome = "Lucía Perez"
let rol = "Deseñadora Web"
let logo = "foto.jpg"
let inicio = 2019

export default function Lucia() {
  return (
    <>
      <h1>{nome}</h1>
      <img src={logo} alt="Foto de Lucía" className="foto"></img>
      <p className="rol">{rol}</p>
      <p> Anos de experiencia:{2026 - inicio}</p>
      <label htmlFor="correo">Correo</label>
      <input id="correo" type="email" tabIndex="1"></input>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <p style={{color: "gray", fontSize: "14px"}}> Dispoñible para proxectos</p>
    </>
  )
}

//PREGUNTAS
//1. Que erro da Parte A che custou máis atopar?
//Lo de que el nombre de la funcion tiene que ser en mayuscula
//2. Que diferenza hai entre { } e {{ }} en JSX?
// {} es para meter código o variables de JS dentro del HTML y {{}} es para objetos de JS