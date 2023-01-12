import {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)


    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador (contador + 1)
    const decrementar = () => contador > 1 && setContador (contador - 1)


    return (
        <>
            <button onClick={decrementar} className='btn btn-dark'>-</button>
                {contador}
            <button onClick={incrementar} className='btn btn-light'>+</button>
            <button className="cartBot btn btn-dark" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
