import products from "../data/data"

function getProducts(){
   
    return (new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },2000);
    }));
}


export function getProduct(i){
    return(new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products[i])
        },2000);
    }))
};

export default getProducts;