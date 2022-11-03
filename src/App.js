import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import ProductInfo from './components/ProductInfo';
import { Product } from './components/Product';
import Cart from './components/Cart';
import Authentication from './components/Authentication/Authentication';
import Weather from './components/Weather';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path = "/" element = {<Home />} />
      <Route exact path = "login" element = {<Authentication />} />
      <Route exact path = "about" element = {<About />} />
      <Route exact path = "contact" element = {<Contact />} />
      <Route exact path = "products" element = {<Product />} />
      <Route exact path = "products/:id" element = {<ProductInfo />} />
      <Route exact path = "cart" element = {<Cart/>} />
      <Route exact path = "/weather" element = {<Weather />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
