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
  Avatar
} from "@material-ui/core";
import useStyles from "./login";
import { Link } from 'react-router-dom';


const Login = () => {
    const [name,setname] = useState("");
    const [email,setemail] = useState("");

    let classes = useStyles();

    return ( 
        <div className={classes.maindiv}>
            <Card className={classes.card}>
            <form className={classes.form}>
                <h1>Join</h1>
                <label htmlFor="name" style={{padding:"1rem",font:"large"}}>Display Name</label>
                <input required 
                onChange={(e)=> setname(e.target.value)} value={name}  
                type="text" style={{padding:"1rem"}} 
                placeholder="Display Name" 
                />

                <label htmlFor="email" style={{padding:"1rem"}}>Email</label>
                <input required 
                onChange={(e)=> setemail(e.target.value)} 
                value={email}  type="text" style={{padding:"1rem"}} 
                placeholder="Email"  />
                
                {
                    (name && email) ?
                    (
                        <div>
                        <Link to="/mainpage"
                        style={{height:"10%",width:"50%",marginTop:"2rem",backgroundColor:"black",color:"red"}}
                        >
                        <Button type="submit"  
                        variant="contained" 
                        style={{height:"100%",width:"100%",marginTop:"2rem",backgroundColor:"black",color:"red"}}
                        >
                    
                    Join
                    
                </Button>
                </Link>
                </div>
                    )
                    :
                    (
                        <>
                        <Button type="submit"  
                variant="contained" 
                style={{height:"10%",width:"20%",marginTop:"2rem",backgroundColor:"black",color:"red"}}>
                    Join
                </Button>
                </>
                    )
                }
                
            </form>
            </Card>
        </div>
     );
}
 
export default Login;