import { useState, useRef } from "react"

function EjemploUseRef() {
    
    const [count,setCount]=useState(0);
    
    //      nombre        valor
    //    referencia      inicial  
    const renderCount=useRef(0)

    renderCount.current++

  return (
    <div>
        <p>Contador: {count}</p>
        <h2>Hola</h2>
        <button onClick={()=>setCount(count+1)}>Incrementar</button>
        <button onClick={()=>setCount(count+5)}>+5</button>
        <button onClick={()=>setCount(count-1)}>Decrementar</button>
        <h2>Este componente se renderizó {renderCount.current} veces</h2>
    </div>
  )
}

export default EjemploUseRef