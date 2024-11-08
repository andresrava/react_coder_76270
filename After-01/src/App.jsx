import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

import NavbarBoot from './components/NavbarBoot'

function App() {

  return (
    <>
     <Navbar/>
     {/* <NavbarBoot/> */}
     <ItemListContainer greeting="Hola!"/>
    </>
  )
}

export default App
