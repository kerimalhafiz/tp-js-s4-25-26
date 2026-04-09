import '../assets/style/productList.css'
import product from './Product.jsx'
import { useState } from 'react' 

const Boutique=({products,addInCart,quantity})=>{
  const [filterText,setFilterText]=useState("");
    const filterproduct=products.filter(a=>a.name.toLowerCase().includes(filterText.toLowerCase()));

    return(
      <div className='producList'>
        <h4>Boutique</h4>
        <input
        className='filter'
        placeholder='filterer les produit'
        value={filterText}
        onChange={e=>setFilterText(e.target.value)}
        type='text'
        />
       <div className="productsZone">
        {filterproduct.map(element => (
          <product quantities={quantity}  produit={element} addInCart={addInCart}  key={element.id}/>
        ))}
      </div>
    </div>
  );
};
export default Boutique;