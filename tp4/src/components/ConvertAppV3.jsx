import "../assets/style/app.css";
import { useState,useEffect } from "react";
import dataCurrencies from "../data/currencies.js"
import CurrencyWithInput from "./CurrencyWithInput.jsx";
const ConvertAppV3=()=>{
    const [euro,setEuro]=useState("1");
    const[currencies,setcurrencies]=useState([]);

    useEffect(()=>{
        setcurrencies(dataCurrencies);
    },[]);
    function currencyChanged(newValue,rate){
        setEuro((parseFloat(newValue)/rate).toString());
    }
     return (
        <div className="app">
           <h2>Applcication de convertion ConvertAppV3</h2> 
         {currencies.map((cur)=>(
            <CurrencyWithInput 
                key={cur.code}
                euro={parseFloat(euro)}
                rate={cur.rate}
                symbol={cur.symbol}
                onCurrencyChanged={currencyChanged}
                />
         ))}
        </div>
     )
} 
export default ConvertAppV3;
