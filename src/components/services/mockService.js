import products from "../data/data"

function getProducts(categ){
   
    return (new Promise((resolve)=>{
        if (categ===undefined){
            setTimeout(()=>{
                resolve(products)
            },2000);
        } else{
        let desiredCategoty= products.filter(
            (itemsInCat)=>itemsInCat.category===categ);
        setTimeout(()=>{
            resolve(desiredCategoty)
        },2000);
    }}));
}


export function getProduct(i){
    return(new Promise((resolve, reject)=>{
        let desiredProduct= products.find((item)=>item.id===Number(i))
        setTimeout(()=>{
            resolve(desiredProduct)
        },2000);
    }))
};

export default getProducts;