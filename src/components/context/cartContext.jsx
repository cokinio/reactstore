import { createContext, useState } from "react";
import {createBuyOrder} from "../services/firestore";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
    
    const [cart,setCart]=useState([]);
    
    function addToCart(product, quantity){
        let parsedProduct={...product, cant:quantity};
        let newCart = [...cart];
         let productFoundInd =newCart.findIndex((item) => 
         {return item.id===product.id})
          if (productFoundInd!==(-1)){
            //newCart[productFoundInd].cant+=quantity;
            newCart[productFoundInd].cant=quantity;
            setCart(newCart);
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
        setCart(newCart);
      }else{
        console.log("el producto no esta en el carrito")
      }
    }

    function itemsInCart() {
      let total = 0;
      for (let i=0; i<cart.length ;i++){
        total=cart[i].cant+total;
      }
      return total;
    }

    function totalCart(){
      let total=0;
      let stringPrecio="";
      let precio=0;

      cart.forEach(element => {
        stringPrecio=element.price;
        stringPrecio=stringPrecio.replace('.','')
        stringPrecio=stringPrecio.replace(/,/, '.')
        stringPrecio=stringPrecio.slice(1,element.price.length)
        precio=parseFloat(stringPrecio);
        total=total+precio*element.cant;
      });
      return total.toFixed(2);
    }

    function subtotal(price,cant){
      let total=0;
      let stringPrecio=price;
      stringPrecio=stringPrecio.replace('.','')
      stringPrecio=stringPrecio.replace(/,/, '.')
      let precio=stringPrecio.slice(1,stringPrecio.length)
      total=precio*cant;
      return total.toFixed(2);
    }

    function clear(){
      setCart([]);
    }

    function isInCart(id){
      let found= cart.findIndex((item)=> item.id===id)
      return found;
    }

    async function handleBuyCart(client){
      let order={
        buyer:client,
        items:cart,
        date: new Date(),
        total: totalCart(),
      }
      let orderNumber=await createBuyOrder(order);
      clear();
      return (orderNumber)
    }

    return (
        <cartContext.Provider value={{ addToCart, removeItem, itemsInCart, clear, isInCart, totalCart,subtotal,handleBuyCart, cart}}>
          {children}
        </cartContext.Provider>
      );
    }