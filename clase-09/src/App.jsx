
import './App.css'
import Home from './paginas/Home'
import Layout from './paginas/Layout'
import NoPage from './paginas/NoPage'
import Productos from './paginas/Productos'
import Quienes from './paginas/Quienes'


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
            </Route>
                <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>

    
    </>
  )
}

export default App
