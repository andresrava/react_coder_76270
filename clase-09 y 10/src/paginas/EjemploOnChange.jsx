import { useState } from "react";



function EjemploOnChange() {
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");

    const nombreHandler =(e) => {
      setNombre(e.target.value)
      
    }
    const apellidoHandler =(e) => {
      setApellido(e.target.value)
      
    }

    const verHandler = () => {
      console.log("nombre: "+nombre)
      console.log("apellido: "+apellido)
    }

  return (
    <div>
        <input
            
            type="text" 
            onChange={nombreHandler}
            placeholder="Ingrese nombre"
        />
        <input
            
            type="text" 
            onChange={apellidoHandler}
            placeholder="Ingrese apellido"
        />
        <h2>Texto Ingresado: {nombre} {apellido}</h2>
        <button onClick={verHandler}>Ver datos en consola</button>
    </div>
  )
}

export default EjemploOnChange