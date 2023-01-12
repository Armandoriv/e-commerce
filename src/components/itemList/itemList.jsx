import Item from "../item/Item";
import './ItemList.css';

const ItemList = ({productsList}) => {
    return (
        
        <div className="row bu">
            {productsList.map(producto => <Item key={producto.id} prod = {producto}/>)}
        </div>
    );
}

export default ItemList;
