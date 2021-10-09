import React, { useState, useEffect } from 'react';

const Form = () => {
   const [user,setuser] = useState({
       Name:"",
       Email:"",
       Phone:"",
       Gender:""
   });
   const [record,setrecord] = useState([]);

   const userregistration = (e)=>{
       let a = 10;
       let name = e.target.name;//name mai feild ayi hogi like email etc
       let value = e.target.value;//value mai user ne jo value type kari hai voh ayi hogi
       setuser({...user, [name]:value});
   }

   const handlesubmit = (e)=>{
       e.preventDefault();
       setrecord([...record, user]);

       setuser({Name:"" , Email:"",Phone:"",Gender:""});
   }

    return (  
        <div>
        <form style={{height:"50vh", width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} autocomplete="off">
        <label>Name</label>
        <input required onChange={userregistration} type="text"  name="Name" value={user.name}></input>
        <label>Email</label>
        <input required onChange={userregistration} type="Email" name="Email" value={user.email}></input>
        <label>Phone</label>
        <input required onChange={userregistration} type="number" name="Phone" value={user.phone}></input>
        <label>Gender</label>
        <input required onChange={userregistration} type="text" name="Gender" value={user.gender}></input> 
        <button onClick={handlesubmit}>Submit</button>
        </form>

        <h3>Your Entered Details</h3>
          {
              record.map((details)=>{
                return  <div>
                  <p>{details.Name}</p>
                  <p>{details.Email}</p>
                  <p>{details.Phone}</p>
                  <p>{details.Gender}</p>
                  </div>
              })
          }
        </div>
    );
}
export default Form;