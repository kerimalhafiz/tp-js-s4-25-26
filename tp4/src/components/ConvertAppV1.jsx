import "../assets/style/app.css";

import Currency from "./Currency.jsx";
import { useState,useEffect } from "react";
import dataCurrencies from "../data/currencies.js"
const ConvertAppV1=()=>{
    const [euro,setEuro]=useState("1");
    const[currencies,setcurrencies]=useState([]);
    useEffect(()=>{
        setcurrencies(dataCurrencies);
    },[]);
     return (
        <div className="app">
            Applcication de convertion
         {currencies.map((cur)=>(
            <Currency 
                key={cur.code}
                euro={parseFloat(euro)}
                rate={cur.rate}
                symbol={cur.symbol}
                />
         ))}
        </div>
     )
} 
export default ConvertAppV1;
