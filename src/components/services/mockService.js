import products from "../data/data"

function getProducts(){
   
    return (new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },2000);
    }));
}

export default getProducts;
