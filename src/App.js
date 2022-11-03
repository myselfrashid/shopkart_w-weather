import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import ProductInfo from './components/ProductInfo';
import { Product } from './components/Product';
import Cart from './components/Cart';
import Authentication from './components/Authentication/Authentication';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path = "/" element = {<Home />} />
      <Route exact path = "login" element = {<Authentication />} />
      <Route exact path = "products" element = {<Product />} />
      <Route exact path = "products/:id" element = {<ProductInfo />} />
      <Route exact path = "cart" element = {<Cart/>} />
    </Routes>
    </>
  );
}

export default App;
