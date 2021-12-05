import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Candidate = () => {
    let [Image,setimage] = useState("");
    let [id,setid] = useState("");
    let [Name,setName] = useState("");

    let dataid = window.localStorage.getItem('id');

    useEffect( async ()=>{
        let apidata = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
        let array = apidata.data;
        console.log(array);
        let obj = array.find(element => element.id == dataid);
        setimage(obj.Image);
        setid(obj.id);
        setName(obj.name);
    },[]);

    let list = window.localStorage.getItem('array1');
    const selectedcandidate = ()=>{
        if(list){
        list.push(id);
        window.localStorage.setItem('list',list);
        }

        let array1 = [];
        array1.push(id);
        window.localStorage.setItem('list',array1);
    }

    const rejectedcandidate = ()=>{
        if(list){
            let newarray = list.filter((ele)=> ele != id);
            console.log(newarray);
            window.localStorage.setItem('list',newarray);
            }
            else{
                return;
            }
    }


    return ( 
        <div style={{height:"100vh",width:"100vw",background:"aliceblue"}}>
            <h1 style={{height:"5%",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>Candidate Page</h1>
            <div style={{height:"95%",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"1rem"}}>
            <img src={Image} alt="Reload the page"/>
            <h3>{Name}</h3>
            <h6>{id}</h6>
            <Link to="/">
            <button>Back to Homepage</button>
            </Link>
            <div style={{height:"10%",width:"20%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <button
            onClick={selectedcandidate}
            >Selected</button>
            <button
            onClick={rejectedcandidate}
            >Rejected</button>
            </div>
            </div>
        </div>
     );
}
 
export default Candidate;