import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from '../context/CartContext';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Checkout/Checkout';
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Home from './Home/Home';;
const App = () => {  
  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
      <ToastContainer/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/producto' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/producto/*' element={<h1>Producto no encontrado</h1>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>  
    </>
   
  );
}

export default App;
