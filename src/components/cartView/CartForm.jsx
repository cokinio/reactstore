import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

function CartForm(props) {

let {onSubmit,client,setClient,isClientDataSet}=props;

function handleFormInput(evt){
    let updatedClient={...client};
    updatedClient[evt.target.id]=evt.target.value;
    setClient(updatedClient);    
}

function submit(evt) {
    // if (client.name.length === 0) return;
    evt.preventDefault();
    onSubmit(client);
  }


  return (

    <form  onSubmit={submit} className='my-4'>
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
        {
            isClientDataSet===null ?
            <Button
            disabled={client.name === "" || client.apellido === "" || client.telefono === ""  || client.mail === ""}
            type="submit" variant="success" className="mt-3"
          >
            Finalizar Compra
          </Button>:
          <>
            <div>
                <h3>Por favor reingrese su email</h3>
                <div className="d-block mt-2">
                    <label htmlFor="mail2" className='mx-2'>E-mail</label>
                    <input type="email" id="mail2" placeholder='juanperez@gmail.com' onChange={handleFormInput}></input>
                </div> 
            </div>  
            <Button
            disabled={client.mail !== client.mail2}
            type="submit" variant="success" className="mt-3"
          >
            Finalizar Compra
          </Button>  
          </>
        }
        
    </form>
    
  )
}

export default CartForm