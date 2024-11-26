import { useState } from 'react'
import ThemeContext, {themes} from './context'
import Body from './Body'
import Layout from './Layout'
import Navbar from './Navbar'
import Footer from './Footer'
import './App.css'

function App() {
  
  const [tema,setTema]= useState(themes.claro)

  const handleTema = () => {
    tema === themes.oscuro ? setTema(themes.claro) : setTema(themes.oscuro)
  }
  return (
    <>
     <ThemeContext.Provider value={{tema,handleTema}}>
        <Layout>
            <Navbar/>
            <Body/>
        </Layout>
            <Footer/>   
            {/* Ponemos footer fuera de Layout pero dentro del context
            para demostrar que podemos aplicar contexto tambine */}
     </ThemeContext.Provider>
    </>
  )
}

export default App
