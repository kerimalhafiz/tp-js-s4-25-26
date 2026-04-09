import '../assets/style/product.css';
import Panier from './Panier.jsx';
import Boutique from './Boutique.jsx';
import { useEffect, useState } from 'react';
import ProductsData from '../data/products.js'
const App = () => {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState([]);

  useEffect(()=>{
    setProducts(ProductsData)
  },[])

  return (
    <div>
       <Boutique products={products} setProducts={setProducts} cart={cart} setCart={setCart} />
      <Panier cart={cart} />
    </div>
  );
}
export default App;
