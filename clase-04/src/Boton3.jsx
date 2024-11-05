import { useState } from "react"

function Boton3() {
const [mensaje,setMensaje]=useState("");

    return (
    <div className="card">
        <button onClick={() => setMensaje("Felicitaciones por seguir aprendiendo ")}>
          ver mensaje
        </button>
        <p>{mensaje}</p>
       
    </div>
    )
}

export default Boton3