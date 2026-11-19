export default function BarraBusca({ textoBuscar, setTextoBuscar }) {
 return (   
    <>
    <input 
        type="text"
        value={textoBuscar}
        onChange={(e) => setTextoBuscar(e.target.value)}
      />
    </>
  )
}