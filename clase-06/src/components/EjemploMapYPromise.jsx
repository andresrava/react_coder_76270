import {useState, useEffect} from "react";

import productos from "../data/productos";

import Producto from "./Producto";

import "./styles.css"


function EjemploMapYPromise() {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

useEffect(() => {
  const traerProductos = () => {
    return new Promise(resolve =>{
        setTimeout(() => {
          resolve(productos)
        },2000)
    })
  }

  traerProductos().then(resultados=>{
    setData(resultados);
    setLoading(false);
  })
},[])

if(loading){
    return <h2>Cargando...</h2>
}

console.log(data)

  return (
    <div className="container">
        {data.map(({nombre,precio,detalle,id})=>(
            <Producto 
            nombre={nombre}
            precio={precio}
            detalle={detalle}
            id={id}
            />
        ))}
    </div>
  )
}

export default EjemploMapYPromise
// <div className="card" key={producto.id}>
//     <h2>{producto.nombre}</h2>
//     <h3>{producto.precio}</h3>
//     <p>{producto.detalle}</p>
// </div>