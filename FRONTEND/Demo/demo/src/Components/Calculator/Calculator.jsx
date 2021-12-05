import React, { useState, useEffect } from 'react';
import {
    TextField,
    Grid,
    Button,
    Paper,
    Card,
    CardContent,
    CardActions,
    Container,
    CardMedia,
    Typography,
    makeStyles,
    IconButton,
    CardActionArea,
    Avatar,
  } from "@material-ui/core";

const Calculator = () => {
    const [inputval,setinputval] = useState("");

    let handleclick = (e)=>{
        let val = inputval.concat(e.target.value);
        setinputval(val);
    }

    let backspacefunc = ()=>{
        let arr = [...inputval];
        arr = arr.slice(0,arr.length-1);
        let str = arr.join("");
        setinputval(str);
    }

    let handleequalsto=()=>{
        let ans = eval(inputval);
        setinputval(ans + "");
        setTimeout(function(){
            setinputval("");
        },3000);
    }

    const useStyles = makeStyles({
        maindiv:{
            height:"100vh",
            width:"100vw",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
        },
        upper:{
            height:"5%",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },
        lower:{
            height:"50%",
            width:"50%",
            display:"flex",
            justifyContent:"center",
            alignItems:"flex-start",
        },
        left:{
            height:"100%",
            width:"70%",
            display:"grid",
        },
        right:{
            height:"100%",
            width:"30%",
            display:"grid",
        },

    });
    let classes = useStyles();

    return ( 
        <div className={classes.maindiv}>
            <div className={classes.upper}>
                <input type="text" 
                style={{height:"100%",width:"50%",padding:"1rem",fontSize:"large"}} 
                value={inputval}
                >
                </input>
            </div>
            <div className={classes.lower}>
            <div className={classes.left}>
                <button value="0" onClick={(e)=>handleclick(e)}>0</button>
                <button value="1" onClick={(e)=>handleclick(e)}>1</button>
                <button value="2" onClick={(e)=>handleclick(e)}>2</button>
                <button value="3" onClick={(e)=>handleclick(e)}>3</button>
                <button value="4" onClick={(e)=>handleclick(e)}>4</button>
                <button value="5" onClick={(e)=>handleclick(e)}>5</button>
                <button value="6" onClick={(e)=>handleclick(e)}>6</button>
                <button value="7" onClick={(e)=>handleclick(e)}>7</button>
                <button value="8" onClick={(e)=>handleclick(e)}>8</button>
                <button value="9" onClick={(e)=>handleclick(e)}>9</button>
            </div>
            <div className={classes.right}>
                <button onClick={()=>setinputval("")}>clear</button>
                <button onClick={backspacefunc}>Backspace</button>
                <button value="+" onClick={(e)=>handleclick(e)}>+</button>
                <button value="-" onClick={(e)=>handleclick(e)}>-</button>
                <button value="*" onClick={(e)=>handleclick(e)}>*</button>
                <button value="/" onClick={(e)=>handleclick(e)}>/</button>
                <button onClick={handleequalsto}>=</button>
            </div>
            </div>
            
        </div>
     );
}
 
export default Calculator;