import ProductInCart from "./ProductInCart.jsx";
import "../assets/style/cart.css"



const ShoppingCart = ({ products,removeProduct,updateQuantity,quantities }) => {

  

  const totalWeight = products.reduce((sum, product) => {
    const qty = quantities[product.id] || 1;
    return sum + product.weight * qty;
  }, 0);

  const totalCost = products.reduce((sum, product) => {
    const qty = quantities[product.id] || 1;
    return sum + product.price * qty;
  }, 0);
    return (
        <div className="cart">
            <h4>Panier</h4>
            <span className="weight"> poids total {totalWeight}</span>
            <div className="productsZone">
                {products.map(element => (
                    <ProductInCart updateQuantity={updateQuantity} produit={element} removeProduct={removeProduct}   key={element.id}/>
                ))}
            </div>
            <div className="total">
                total Commande : <strong>{totalCost} € </strong>
            </div>
        </div>
    );
};

export default ShoppingCart;