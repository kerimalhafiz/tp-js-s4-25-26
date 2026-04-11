import ProductList from "./Boutique.jsx";
import "../assets/style/app.css"
import ShoppingCart from "./ShoppingCart.jsx";
import { useEffect, useState } from "react";
import dataProduct from "../data/products.js"
import Boutique from "./Boutique.jsx";

const App = () => {
  const [products,setProduct] = useState([])
  const [productInCart,setProductInCart] = useState([])
  const [quantities, setQuantities] = useState({});

  useEffect(()=>{
      setProduct(dataProduct);
  },[]);
  const ajouterPanier = (produit) => {
    const exist = productInCart.find(p => p.id === produit.id);
    if (!exist) {
      setProductInCart(prev => [...prev, produit]);
      updateQuantity(produit.id, 1);
    }
  }

  const removeProduct = (produit) => {
    setProductInCart(prev => prev.filter(p => p.id !== produit.id));
    setQuantities(prev => ({
    ...prev,
    [produit.id]: 0
  }));
  }


  const updateQuantity = (productId, quantity) => {
    setQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };
  
  return (
    <div >
      <Boutique products={products} quantities={quantities}  addInCart={ajouterPanier} />
      <ShoppingCart products={productInCart} updateQuantity={updateQuantity} quantities={quantities} removeProduct={removeProduct}/>
    </div>
  );
}
export default App;