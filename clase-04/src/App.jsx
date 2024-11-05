import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Boton from './Boton'
import './App.css'
import Boton2 from './Boton2'
import Boton3 from './Boton3'

function App() {
  //     estado  funcion          valor
  //          actualizadora      inicial
  const [count, setCount] = useState(0)

  console.log("renderizado")
  

 

  return (
    <>
      
      <h1>Aprendemos estados!💪</h1>
      <h3>Trabajamos con el estado del Padre -App-</h3>
      <Boton count={count} setCount={setCount}/>
      <Boton count={count} setCount={setCount}/>
      <h3>Trabajamos con el estado propio del componente Boton2</h3>
      <Boton2 />
      <h3>creamos en el boton un estado que muestra un texto</h3>
      <Boton3/>
      
     
    </>
  )
}

export default App
