
import './App.css'
import EjemploUseRef from './components/EjemploUseRef'
import Producto from './Producto'
import Productos from './Productos'
import EjemploSimpleUseEffect from './components/EjemploSimpleUseEffect'
import EjemploPicanteUseEffect from './components/EjemploPicanteUseEffect'
function App() {


  return (
    <>
{/* <Productos>
     <Producto nombre="Zapatilla" precio={200} detalle="Zapatillas de excelente calidad"/>
     <Producto nombre="Jeans" precio={150} detalle="Jeans de excelente calidad"/>
     <Producto nombre="Sweater" precio={100} detalle="Sweater de excelente calidad"/>
     <p>QUe buenos son estos productos</p>
</Productos>
<EjemploUseRef/> */}
  {/* <EjemploSimpleUseEffect/> */}
  <EjemploPicanteUseEffect/>
    </>
  )
}

export default App
