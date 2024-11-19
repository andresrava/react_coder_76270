
import './App.css'
import Home from './paginas/Home'
import Layout from './paginas/Layout'
import NoPage from './paginas/NoPage'
import Productos from './paginas/Productos'
import Quienes from './paginas/Quienes'
import DetalleProducto from './paginas/DetalleProducto'
import Eventos from './paginas/Eventos'


import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  

  return (
    <>
    
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/quienes' element={<Quienes/>}/>
                <Route path='/productos' element={<Productos/>}/>
                <Route path="/productos/:id" element={<DetalleProducto/>}/>
                <Route path='/eventos' element={<Eventos/>}/>
                <Route path='*' element={<NoPage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>

    
    </>
  )
}

export default App
