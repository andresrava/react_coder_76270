import Logo from "./Logo"
import CartWidget from "./CartWidget"
import "./navbar.css"
function Navbar() {
  return (
    <div className="navbar">
        <Logo/>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="">Categoria 1</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Categoria 2</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Categoria 3</a> 
                </li>
            </ul>
    <CartWidget/>
    </div>
  )
}

export default Navbar