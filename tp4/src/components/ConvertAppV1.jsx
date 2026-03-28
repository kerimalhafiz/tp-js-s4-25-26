import "../assets/style/app.css";

import Currency from "./Currency.jsx";
import { useState,useEffect,useRef } from "react";
import dataCurrencies from "../data/currencies.js"
const ConvertAppV1=()=>{
    const [euro,setEuro]=useState("1");
    const[currencies,setcurrencies]=useState([]);
    const  inputRef=useRef(null);
    useEffect(()=>{
        setcurrencies(dataCurrencies);
    },[]);
    function handleClick(){
        setEuro(inputRef.current.value);
    }
     return (
        <div className="app">
           <h2>Applcication de convertion</h2> 
           <input  type="text" ref={inputRef} />
           <button onClick={handleClick}>ok</button>
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
