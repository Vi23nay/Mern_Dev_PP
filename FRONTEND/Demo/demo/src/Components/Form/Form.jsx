import React, { useState, useEffect } from 'react';

const Form = () => {
    const [uname,setuname] = useState("");
    const [pass,setpass] = useState("");
    const [name,setname] = useState("");
    const [flag,setflag] = useState(false);

    let handlesubmit = ()=>{
        if(uname != "" && pass != "" && name != ""){
            setflag(true);
        }
        else{
            alert("Please fill values");
        }
    }

    return ( 
        <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" value={uname} onChange={(e)=>setuname(e.target.value)} placeholder="Enter Username"></input>
                <label htmlFor="">Password</label>
                <input type="Password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="Enter Password"></input>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}  placeholder="Enter Name"></input>
            </form>
            <button onClick={handlesubmit}>Submit</button>

            {
                (flag == true) ? 
                (
                    <>
                    <h1>{uname}</h1>
                    <h1>{pass}</h1>
                    <h1>{name}</h1>
                    </>
                )
                :
                (
                    <></>
                )
            }
        </div>
     );
}
export default Form;