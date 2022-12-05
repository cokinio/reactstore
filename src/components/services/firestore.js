import products from "../data/data"
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,  
    query,
    where,
    addDoc
  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk5FOlUu2TAAevdMIGC_yAYmvmTQhy5xY",
  authDomain: "react-store-fa9f2.firebaseapp.com",
  projectId: "react-store-fa9f2",
  storageBucket: "react-store-fa9f2.appspot.com",
  messagingSenderId: "207468826248",
  appId: "1:207468826248:web:cd071e8ee7f3843dd8993d",
  measurementId: "G-C70T603KHH"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default async function getProducts(categ){
  const colectionProductsRef = collection(DB, "products");
  if (categ===undefined){
    const documentSnapshot = await getDocs(colectionProductsRef);
    const documentsData = documentSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return documentsData;
  }else{
    const q = query(collection(DB, "products"), where("category", "==", categ));
    const documentSnapshot = await getDocs(q);
    const documentsData = documentSnapshot.docs.map((doc) => {
      return{
        ...doc.data(),
        id: doc.id,
      }
    })
    return documentsData;
  }
}

export async function getProduct(i){
  const docRef = doc(DB, "products", i);
  const docSnap = await getDoc(docRef);
  // console.log(docSnap)
  const itemData = docSnap.data();
  itemData.id = docSnap.id;
  return itemData;
}

export async function getOrder(i){
  const docRef = doc(DB, "orders", i);
  const docSnap = await getDoc(docRef);
  let itemData = docSnap.data();
  return itemData;
}


export async function createBuyOrder(orderData) {
  const collectionRef = collection(DB, "orders");
  let respuesta = await addDoc(collectionRef, orderData);
  return respuesta.id;
}

export async function exportDataToFirestore() {
  const colectionProductsRef = collection(DB, "products");
  for (let item of products) {
    const newDoc = await addDoc(colectionProductsRef, item);
    console.log(`se agrego producto con ID: ${newDoc.id}`);
  }
}