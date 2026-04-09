import { useState } from "react";
import poubelle from "../assets/images/poubelle.jpg"
const ProductInCart = ({produit,removeProduct,updateQuantity}) =>{
const [quantity, setQuantity] = useState(1); 

  const handleChange = (e) => {
    const value = Math.max(1, Math.min(produit.stock, Number(e.target.value))); 
    setQuantity(value);
    updateQuantity(produit.id, value); 
  };
return(
    <div className="product space-between" >
        <span className="name">{produit.name}</span>
        <div className="imageProduit">
            <img className=""  src={produit.image} alt="" />
        </div>
        <input 
            type="number" 
            name="" 
            min={1} 
            max={produit.stock} 
            value={quantity}
            onChange={handleChange}
            id="" 
            />
        <img className="button" onClick={()=>removeProduct(produit)} src={poubelle} alt="panier" />
        
    </div>
);
}
export default ProductInCart;