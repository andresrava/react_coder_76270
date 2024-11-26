
import ThemeContext from "./context"
import { useContext } from "react"
function Footer() {

    const {tema} = useContext(ThemeContext)
  return (
    <div style={{color:tema.font, background: tema.background}}>
        <h2>Todos los derechos reservados ®</h2>
    </div>
  )
}

export default Footer