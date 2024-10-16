import "./style.css"
import { useState } from "react";
export default function App(){
  
  
  let [st,setst] = useState(0);
  
    let inc = () => {
    setst(st+1)
     };

    let dec = () => {
      setst(st-1)
    };

    let re = () => {
      setst(0)
    };

      return(
      <>
        <div id="root">
            <div>
            <h1>{st}</h1>
            <button className = "child" onClick = {dec}>-</button>
            <button className = "child" onClick = {inc}>+</button>
            <button id = "last" className = "child" onClick = {re}>Reset</button>
            <button className="child" onClick={inc}>Button clicked {st} times</button>
            </div>
        </div>
      </>
  )
}



