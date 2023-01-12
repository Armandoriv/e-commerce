import { Link } from "react-router-dom";

const Dropdown = () => {
    return (
        
        <li className="nav-item dropdown">
          <a className="A dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <Link className="dropdown-item nav-link" to="/category/1"><li>Computadoras</li></Link>
            <Link className="dropdown-item nav-link" to="/category/2"><li>Celulares</li></Link>
            <Link className="dropdown-item nav-link" to="/category/3"><li>Television</li></Link>
            <Link className="dropdown-item nav-link" to="/category/4"><li>Perifericos</li></Link>
          </ul>
        </li>
        
    );
}

export default Dropdown;
