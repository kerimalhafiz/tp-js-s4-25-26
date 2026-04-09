import '../assets/style/product.css';
import Panier from './Panier.jsx';
import Boutique from './Boutique.jsx';
import { useEffect, useState } from 'react';
import ProductsData from '../data/products.js'
import producList from'./Boutique.jsx'
const App = () => {
  const [products,setProducts]=useState([]);
  const [productincart,setProductsetCart]=useState([]);

  useEffect(()=>{
    setProducts(ProductsData)
  },[])
  const ajoutePanier=(produit)=>{
    const exist=productincart.find(p=>p.id===produit.id);
    if(!exist){
      setProductsetCart( prev=>[...prev,produit]);
      updateQantity(produit.id,1);

    }

    const removeProduct=(produit)=>{
      setProductsetCart(prev=> prev.filter(p=> p.id !==produit.id));
      setQunatity(prev=>({
        ...prev,[produit.id]:0
      }));
    }
  }

  const [quantity,setQunatity]=useState([]);

  const updateQantity=(productId,quantité)={
   setQunatity((prev) => ({ ...prev, [productId]:quantité }));
  };
return (
    <div >
      <Boutique products={products} quantities={quantité}  addInCart={ajouterPanier} />
      <ShoppingCart products={productInCart} updateQuantity={ updateQantity} quantities={quantité} removeProduct={removeProduct}/>
    </div>
  );
export default App;
