import React, { useState, useEffect } from 'react';

const Q1 = () => {
    const [val,setval] = useState(0);
    const increament = ()=>{
        setval(val+1);
    }
    const decreament = ()=>{
        if(val > 0){
        setval(val-1);
        }
        else{
            alert(" value is 0");
            setval(0);
        }
    }

    return (  
        <div>
        <h1>{val}</h1>
        <button onClick={increament}>increament</button>
        <button onClick={decreament}>decreament</button>
        </div>
    );
}
export default Q1;