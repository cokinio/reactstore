import React, {useState} from 'react'

function CartForm() {

const [client,setClient]=useState({
        nombre:"",
        apellido:"",
        telefono:"",
        mail:"",
})

function handleFormInput(evt){
    console.log(evt.target.id)
}

  return (

    <form className='my-4'>
        <div className="d-block mt-2">
            <label htmlFor="name" className='mx-2 form-label'>Nombre</label>
            <input type="text" id="name" placeholder='Juan' onChange={handleFormInput}></input>
        </div>
        <div className="d-block mt-2">
            <label htmlFor="apellido" className='mx-2'>Apellido</label>
            <input type="text" id="apellido" placeholder='Perez'></input>
        </div>
        <div className="d-block mt-2">
            <label htmlFor="telefono" className='mx-2'>Teléfono</label>
            <input type="phone" id="telefono" placeholder='+54 9 11 6555222'></input>
        </div>
        <div className="d-block mt-2">
            <label htmlFor="mail" className='mx-2'>E-mail</label>
            <input type="email" id="mail" placeholder='juanperez@gmail.com'></input>
        </div>
    </form>
  )
}

export default CartForm