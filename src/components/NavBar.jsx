import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <div>
        <img src="" alt="" text="Todo Sano"/>
        <ul>
            <li><a href="/">Alimentos para celíacos</a></li>
            <li><a href="/">Harinas, legumbres y cereales</a></li>
            <li><a href="/">Alimentos orgánicos</a></li>
            <li><a href="/">Alimentos dietéticos</a></li>
            <li><a href="/">Hierbas medicinales y té en saquitos</a></li>
            <li><CartWidget/></li>
        </ul>
    </div>
  )
}

export default NavBar