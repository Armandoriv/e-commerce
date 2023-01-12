import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "e-commerce-37d63.firebaseapp.com",
    projectId: "e-commerce-37d63",
    storageBucket: "e-commerce-37d63.appspot.com",
    messagingSenderId: "459140038658",
    appId: "1:459140038658:web:9e99807b89b2b73397a71b"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}


//GET PRODUCTOS (ItemListContainer) FIREBASE
const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}
//GET PRODUCTO (ItemDetailContainer) FIREBASE
const getProducto = async (id) => {
    const prod = await getDoc(doc(db, "productos",id))
    const item = {...prod.data(), id: prod.id}
    return item
}

//CREATE PRODUCTOS
const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(db, "productos"), {
             nombre: objProducto.nombre,
             marca: objProducto.marca,
             modelo: objProducto.modelo,
             idCategoria: objProducto.idCategoria,
             stock: objProducto.stock,
             precio: objProducto.precio,
             img: objProducto.img
         })
 
         return estado
 }

//UPDATE producto

const updateProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "productos",id), info)
    return estado
}

//DELETE producto

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}

//CREATE AND READ ordenes de compra

const createOrdenCompra = async (cliente, preTotal) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
             nombre: cliente.nombre,
             apellido: cliente.apellido,
             email: cliente.email,
             dni: cliente.dni,
             direccion: cliente.direccion,
             precioTotal: preTotal,
          
         })
 
         return ordenCompra
 }

 const getOrdenCompra = async(id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
 }


export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}

