import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Inicio</Link>
                </li>
                <li>
                    <Link to={'/sobre'}>Sobre</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;