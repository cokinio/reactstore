import "./NavBar.css"
import React from 'react'
import CartWidget from './CartWidget'
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <Link to="/"><h2>Dietetica Todo Sano</h2></Link>
        <ul>
            <li><Link to="/category/Frutos Secos">Frutos Secos</Link></li>
            <li><Link to="/category/Mix de Frutos Secos">Mix de Frutos Secos</Link></li>
            <li><Link to="/category/Frutas Desecadas">Frutas Desecadas</Link></li>
            <li><Link to="/category/Semillas">Semillas</Link></li>
            <li><Link to="/category/Harinas - Féculas - Avenas">Harinas - Féculas - Avenas</Link></li>
            <li><Link to="/category/Legumbres - Arroz">Legumbres - Arroz</Link></li>
            <li><Link to="/category/Chocolatoso">Chocolatoso</Link></li>
            <li><Link to="/category/Repostería">Repostería</Link></li>
            <li><Link to="/category/Envasados">Envasados</Link></li>
            <li><Link to="/category/Cereales">Cereales</Link></li>
            <li><Link to="/category/Especias">Especias</Link></li>
            <li><Link to="/category/Otros">Otros</Link></li>
            
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default NavBar