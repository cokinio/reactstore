import React, {useState} from 'react'

function CartForm() {

const [client,setClient]=useState({
        nombre:"",
        apellido:"",
        telefono:"",
        mail:"",
})

function handleFormInput(evt){
    let updatedClient={...client};
    updatedClient[evt.target.id]=evt.target.value;
    setClient(updatedClient);    
    console.log(client)
}

function onSubmit(evt){

}


  return (

    <form className='my-4'>
        <div className="d-block mt-2">
            <label htmlFor="nombre" className='mx-2 form-label'>Nombre</label>
            <input type="text" id="nombre" placeholder='Juan'  value={client.nombre} onChange={handleFormInput}></input>
        </div>
        <div className="d-block mt-2">
            <label htmlFor="apellido" className='mx-2'>Apellido</label>
            <input type="text" id="apellido" placeholder='Perez' value={client.apellido} onChange={handleFormInput}></input>
        </div>
        <div className="d-block mt-2">
            <label htmlFor="telefono" className='mx-2'>Teléfono</label>
            <input type="phone" id="telefono" placeholder='+54 9 11 6555222' value={client.telefono} onChange={handleFormInput}></input>
        </div>
        <div className="d-block mt-2">
            <label htmlFor="mail" className='mx-2'>E-mail</label>
            <input type="email" id="mail" placeholder='juanperez@gmail.com' value={client.mail} onChange={handleFormInput}></input>
        </div>
    </form>
  )
}

export default CartForm