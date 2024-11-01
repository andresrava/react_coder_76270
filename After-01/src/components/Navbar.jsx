import Logo from "./Logo"
import CartWidget from "./CartWidget"
function Navbar() {
  return (
    <div>
        <Logo/>
            <ul>
                <li>
                    item 1
                </li>
                <li>
                    item 2
                </li>
                <li>
                    item 3
                </li>
            </ul>
    <CartWidget/>
    </div>
  )
}

export default Navbar