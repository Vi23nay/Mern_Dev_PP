import React, { useState, useEffect } from 'react';

const Q1 = () => {
    const [val,setval] = useState("");
    const [userval,setuserval] = useState("");
    const increament = ()=>{
        let v = val+1;
        setval(v);
    }
    const decreament = ()=>{
        let v = val-1;
        setval(v);
    }
    const inputset = (e)=>{
        setuserval(...val,e.target.value);
    }
    const logic = (e)=>{
        
    }

    return (  
        <div>
        {/* <h3>Give initial series in input 1</h3>
        <input onChange={(e)=>setuserval(e.tartget.value)} type="text" value={userval}></input> */}

        <input onChange={inputset}></input>
        <p>{val}</p>
        <input onChange={logic}></input>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
        </div>
    );
}
export default Q1;