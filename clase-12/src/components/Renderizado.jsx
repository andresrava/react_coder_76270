import { useState } from "react"

function Renderizado() {
    const [mostrar,setMostrar] = useState(false);

    const handleClick = () => {
      
        setMostrar(!mostrar)
    }

    // Renderizado condicional con un if

    const renderConIf = () => {
      if (mostrar){
        return <p>Este texto se muestra si el estado es TRUE con un IF!</p>
      }
      return <p>Este texto se muestra si el estado es FALSE con un IF!</p>
    }



  return (
    <div>
        <h1>Técnicas de renderizado condicional</h1>
        <button onClick={handleClick}>{mostrar?"ocultar":"mostrar"}</button>
        {renderConIf()}
        {/* Renderizado con ternario */}
        {mostrar ? <p>Este texto se muestra si el estado es TRUE con un TERNARIO</p>
                 :<p>Este texto se muestra si el estado es FALSE con un TERNARIO</p> }
        {/* Renderizado con && */}
        {mostrar && <p>Este texto se muestra si el estado es TRUE con &&</p>}

        {(() => {
            if(mostrar){
                return <p>Este texto se muestra si el estado esa TRUE con un if en el render</p>
            }
            return <p>Este texto se muestra si el estado es FALSE con un if en el render</p>
          
        })()}

    </div>
  )
}

export default Renderizado