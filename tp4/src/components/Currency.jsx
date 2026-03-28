import "../assets/style/currency.css"


const Currency=({rate,symbol,euro})=>{
    return (
        <div className="currency">
            {euro * rate}{symbol}
        </div>
    )
};
export default Currency;