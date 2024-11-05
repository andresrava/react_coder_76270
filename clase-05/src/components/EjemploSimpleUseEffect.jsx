import { useState, useEffect } from "react"

function EjemploSimpleUseEffect() {

    const [contador,setContador] = useState(0);
    const [titulo,setTitulo] = useState("");

    //Se ejecuta solo en el montaje

    useEffect(() => {
      console.log("Montaje del componente - Primer render - Bienvenido")
    },[])

    //Se ejecuta cuando se actualiza contador

    useEffect(() => {
      console.log("Se actualizó el contador")
    },[contador])

    //Se ejecuta cuando se actualiza título

    useEffect(() => {
      console.log("Se actualizó el título")
    },[titulo])

    //Se ejecuta cada vez se renderiza el componente

    useEffect(() => {
     console.log("Se renderizó el componente")   
    })

  return (
    <div>
        <h2>{titulo}</h2>
        <p>Contador: {contador}</p>
        <button onClick={()=> setContador(contador+1)}>Incrementar el contador</button>
        <button onClick={()=> setTitulo("Bienvenidos a useEffect")}>Implementar Título</button>
    </div>
  )
}

export default EjemploSimpleUseEffect