import {useState, useEffect} from 'react';
import ItemList from '../itemList/itemList.jsx';
import {getProductos} from '../../assets/firebase.js'
import { useParams } from 'react-router-dom';;

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        if(category) {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(productsList => {
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        
    },[category]);
    
    return (
        <div>
            {productos}
        </div>
       
    );
}

export default ItemListContainer;