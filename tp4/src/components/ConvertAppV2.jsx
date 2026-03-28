import "../assets/style/app.css";

import Currency from "./Currency.jsx";
import { useState,useEffect } from "react";
import dataCurrencies from "../data/currencies.js"
const ConvertAppV2=()=>{
    const [euro,setEuro]=useState("1");
    const[currencies,setcurrencies]=useState([]);
    useEffect(()=>{
        setcurrencies(dataCurrencies);
    },[]);
  
     return (
        <div className="app">
           <h2>Applcication de convertion app2</h2> 
           <input  type="text" 
            value={euro}
            onChange={(e)=>setEuro(e.target.value)}
           />
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
export default ConvertAppV2;
