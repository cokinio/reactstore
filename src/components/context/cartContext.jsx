import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
    
    const [cart,setCart]=useState([]);
    
    function addToCart(product, quantity){
        let parsedProduct={...product, cant:quantity};
        let newCart = [...cart];
       
        console.log(cart);
         let productFoundInd =newCart.findIndex((item) => 
         {return item.id===product.id})
         console.log(productFoundInd);
          if (productFoundInd!==(-1)){
            newCart[productFoundInd].cant+=quantity;
          }else{
            newCart.push(parsedProduct);
            setCart(newCart);
          }
    }

    function removeItem(itemId){
      let newCart = [...cart];
      let productFoundInd =newCart.findIndex((item) => 
      {return item.id===itemId})
      if (productFoundInd!==(-1)){
        newCart.splice(productFoundInd,1)
      }else{
        console.log("el producto no esta en el carrito")
      }
    }

    function itemsInCart() {
      let total = 0;
      console.log(cart)
      for (let i=0; i<cart.length ;i++){
        total=cart[i].cant+total;
      }
      
    }

    function clear(){
      setCart([]);
    }

    function isInCart(id){
      let found= cart.find((item)=> item.id===id)
      return found;
    }
    return (
        <cartContext.Provider value={{ addToCart, removeItem, itemsInCart, clear, isInCart}}>
          {children}
        </cartContext.Provider>
      );
    }