import "../assets/style/product.css"
import panier from "../assets/images/panier.jpg";

const Product =({produit,addInCart,quantities})=>{

    const quantiteincart = quantities[produit.id] || 0;
    const remainingStock = produit.stock - quantiteincart;

    return(
        <div className="product">
            <div className="info">  
                <div className="flex-col">
                    <div> {produit.name}</div>
                    <span className="description">{produit.description}</span>
                </div>
                <span className="weight">{produit.weight} </span>
            </div>
            <div className="imageProduit">

                <img   src={produit.image} alt="" />
            </div>
            <div className="stock flex-col">
                <div>qté</div>
                <div>{remainingStock} </div>
            </div>
            <span className="price">
            {produit.price} 
            </span>

            <img className="button" onClick={()=>addInCart(produit)} src={panier} alt="panier" />
        </div>
    );

}
export default Product;