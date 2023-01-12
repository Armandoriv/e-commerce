import { Link } from 'react-router-dom';
import './cartwidget.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <div>
            <Link to='/cart'>
            <i class="bi bi-cart4 A nav-item" >{ getItemQuantity() >= 1 && <span className="cantCarrito">{getItemQuantity()}</span>}</i>
            </Link>
            
        </div>
    );
}

export default CartWidget;
