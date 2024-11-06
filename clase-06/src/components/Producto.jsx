
function Producto({nombre,precio,detalle,id}) {
  return (
    <div className="card" key={id}>
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
        <p>{detalle}</p>
    </div>
  )
}

export default Producto