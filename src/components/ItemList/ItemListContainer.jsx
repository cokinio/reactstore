import React from 'react'
import "./ItemListContainer.css"
import Item from "./Item"

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <div id="flex">
          <Item title="ARVEJAS PARTIDAS X 5 KG." description="Arvejas Partidas" 
          imgurl="https://bio-salud.com.ar/media/catalog/product/cache/59223172052bd3c6bb1fc4b4cc01a4ed/b/8/b812395aa1ef80819c3dc5fab097b5155191b09c245ed9208303dfb969737935.jpeg" stock={6}/>
          <Item title="HARINA DE CENTENO X 5 KG." description="Harina de Centeno" 
          imgurl="https://bio-salud.com.ar/media/catalog/product/cache/59223172052bd3c6bb1fc4b4cc01a4ed/c/f/cf2c71d04497c4682cd034fb0348960f8fef4ed906c17f48cb9869fe2e863ea7.jpeg" stock={6}/>
          <Item title="POROTO ALUBIA x 5kg" description="Poroto alubia" 
          imgurl="https://bio-salud.com.ar/media/catalog/product/cache/59223172052bd3c6bb1fc4b4cc01a4ed/b/e/be5c3ad4c31e78ff6a588822dc81528474346209550d4e47ada05567139f1d9b.jpeg" stock={6}/>
      </div>
    </div>
  )
}

export default ItemListContainer