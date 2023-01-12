import { Link } from 'react-router-dom';
import Dropdown from './Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import './navbar.css'
const Navbar = React.memo(() => {
    return (
        
      <nav className="navbar fixed-top navbar-expand-lg bro mb-5">
      <div className="container-fluid">
        <Link to="/"><img src="./img/montañalogo.png" alt="" className='logo'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to='/producto' className="A">Productos</Link>
            </li>
            <Dropdown/>
          </ul>
          <CartWidget/>
        </div>
      </div>
    </nav>
        
    );
})

export default Navbar;
