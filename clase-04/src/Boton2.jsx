import { useState } from "react"

function Boton2() {

const [count,setCount]=useState(0);

    return (
    <div className="card">
        <button onClick={() => setCount( count + 1)}>
          count is {count}
        </button>
       
    </div>
    )
}

export default Boton2