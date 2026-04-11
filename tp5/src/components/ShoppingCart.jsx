import ProductInCart from "./ProductInCart.jsx";
import "../assets/style/cart.css"



const ShoppingCart = ({ products,removeProduct,updateQuantity,quantities }) => {

  

  const weightTotal = products.reduce((sum, product) => {
    const quantitemin = quantities[product.id] || 1;
    return sum + product.weight * quantitemin;
  }, 0);

  const totalCost = products.reduce((sum, product) => {
    const quantitemin = quantities[product.id] || 1;
    return sum + product.price * quantitemin;
  }, 0);
    return (
        <div className="cart">
            <h4>Panier</h4>
            <span className="weight"> poids total { weightTotal}</span>
            <div className="productsZone">
                {products.map(element => (
                    <ProductInCart updateQuantity={updateQuantity} produit={element} removeProduct={removeProduct}   key={element.id}/>
                ))}
            </div>
            <div className="total">
                Commande total : <strong>{totalCost} € </strong>
            </div>
        </div>
    );
};

export default ShoppingCart;