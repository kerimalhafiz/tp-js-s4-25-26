


const Panier=({cart})=>{

    return (
        <div id="cart">
            {cart.length===0 &&<p>Panier vide </p>}
            {cart.map((p)=>{
                <div key={p.id}>
                    {p.name}*{p.quantity}
                    </div>
            })}
        </div>

    );
}
export default Panier;