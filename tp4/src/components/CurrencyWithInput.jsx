import "../assets/style/currency.css";
import { useState,useEffect } from "react";

const CurrencyWithInput=({euro,rate,symbol,onCurrencyChanged})=>{
    const [value,setValue]=useState((euro *rate).toString());

    useEffect(()=>{
        setValue((euro *rate).toString());
    },[euro,rate]);
    function handleChange(e){
        const newValue=e.target.value;
        setValue(newValue);
        onCurrencyChanged(newValue,rate);
    }
    return (
        <div className="currency">
            <input type="text" value={value} onChange={handleChange}/>
            <span>{symbol}</span>
        </div>
    )
}
export default CurrencyWithInput