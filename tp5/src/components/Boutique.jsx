import "../assets/style/productList.css";
import Product from "./Product.jsx";
import { useState } from "react";
const Boutique = ({products,addInCart,quantities}) => {
  const [filterText, setFilterText] = useState("");
  
      const filteredProducts = products.filter(elt =>
          elt.name.toLowerCase().includes(filterText.toLowerCase())
      );
  return (
    <div className="productList" >
      <h4>Boutique</h4>
      <input
        className="filter"
        placeholder="filtre  de produits" 
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        type="text" 
      />
      <div className="productsZone">
        {filteredProducts.map(element => (
          <Product quantities={quantities}  produit={element} addInCart={addInCart}  key={element.id}/>
        ))}
      </div>
    </div>
  );
};

export default Boutique;