import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";
/*
//createProducto(producto).then(mensaje => console.log(mensaje))
getProducto("Sa7qFBzzvdp1gzBT5GY8").then(prod => {
    prod.stock -= 10
    updateProducto("Sa7qFBzzvdp1gzBT5GY8", prod).then(mensaje => console.log(mensaje))
})

deleteProducto("Sa7qFBzzvdp1gzBT5GY8").then(mensaje => console.log(mensaje))*/
//KpfHXbYtkeoYOGZ66ZwO
const cliente = {
    nombre: "Pedro",
    apellido: "Parker",
    email: "pedrito@parker.com",
    dni: 123123,
    direccion: "Calle Falsa 123"

}

//createOrdenCompra(cliente, 12500).then(orden => console.log(orden))

getOrdenCompra("KpfHXbYtkeoYOGZ66ZwO").then(orden => console.log(orden))