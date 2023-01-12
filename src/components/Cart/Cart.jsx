import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './Cart.css'
const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
        {cart.length === 0 ? 
        <div className='cartCont'>
            <div className='mt-5'>
                <h1 className='mt-5'>Tu carrito esta vacio</h1> 
                 <Link to={'/producto'}><button className='btn volv btn-dark'>Volver a la tienda</button></Link>
            </div>

        </div>
        
        :
        <div className='cardContent mt-5'>
            <div className='mt-5 '>
            {cart.map((prod, indice) =>
            <div key={indice} className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">Cantidad: {prod.cant}</p>
                        <p className="card-text">Precio unitario: {prod.precio} </p>
                        <p className="card-text">Subtotal: {prod.precio * prod.cant} </p>
                    </div>
                    <button className='btn btn-danger' onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                </div>
            </div>
        </div>
)}
        <div className='totl'>
            <p>Total: {totalPrice()} </p>
            <button className='btn btn-danger' onClick={emptyCart}>Limpiar carrito</button>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Finalizar compra</button>
            </Link>
            
        </div>
           
            
        </div>
        </div>
        }
        </>
    );
}

export default Cart;
