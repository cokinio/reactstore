import "./NavBar.css"
import React from 'react'
import CartWidget from './CartWidget'
import {Link} from "react-router-dom";

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">Dietetica Todo Sano</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li><Link to="/category/Frutos Secos" className="nav-link">Frutos Secos</Link></li>
            <li><Link to="/category/Mix de Frutos Secos" className="nav-link">Mix de Frutos Secos</Link></li>
            <li><Link to="/category/Frutas Desecadas" className="nav-link">Frutas Desecadas</Link></li>
            <li><Link to="/category/Semillas" className="nav-link">Semillas</Link></li>
            <li><Link to="/category/Harinas - Féculas - Avenas" className="nav-link">Harinas - Féculas - Avenas</Link></li>
            <li><Link to="/category/Legumbres - Arroz" className="nav-link">Legumbres - Arroz</Link></li>
            <li><Link to="/category/Chocolatoso" className="nav-link">Chocolatoso</Link></li>
            <li><Link to="/category/Repostería" className="nav-link">Repostería</Link></li>
            <li><Link to="/category/Envasados" className="nav-link">Envasados</Link></li>
            <li><Link to="/category/Cereales" className="nav-link">Cereales</Link></li>
            <li><Link to="/category/Especias" className="nav-link">Especias</Link></li>
            <li><Link to="/category/Otros" className="nav-link">Otros</Link></li>
            <li><CartWidget/></li>
      </ul>
    </div>
  </div>
</nav>
  )}

export default NavBar

