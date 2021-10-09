import React, { useContext,useState, useEffect } from 'react';
import { firebaseDB, firebaseStorage } from "../../config/firebase";
import { Link } from "react-router-dom";
import {
    Grid,
    Button,
    Typography,
    makeStyles,
    IconButton,
    AppBar,
    Toolbar,
    Avatar,
  } from "@material-ui/core";
  import AppleIcon from '@material-ui/icons/Apple';
  import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
  import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
  import Badge from '@material-ui/core/Badge';
  import { AuthContext } from "../../context/AuthProvider";

const Header = (props) => {
    const { currentUser } = useContext(AuthContext);
    const { signOut } = useContext(AuthContext);

    let handleSignOut = async()=>{
        try {
            await signOut();
            props.history.push("/login");
          } catch (err) {
            console.log(err);
          }
    }


    let useStyles = makeStyles({
        centerDivs:{
            height:"5vh",
            width: "100vw",
            display:"flex",
            justifyContent: "center",
            alignItems:"center",
        },
        avatardiv:{
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
        },
        avatartypography:{
            color:"white",
        },
        badge: {
            right: -3,
            top: 13,
          },
    });
    let classes = useStyles();

    return (
        <div>
            <Grid Container  style={{justifyContent:"space-between"} }>
            <Grid item>
            <AppBar position="sticky" className={classes.centerDivs} style={{background:"black"}}>
            <Toolbar>

            <IconButton edge="middle" color="inherit">
            <AppleIcon></AppleIcon>
            </IconButton>

            <Button>
            <Link to="/">
            <Typography variant="text" style={{color:"whitesmoke"}}>
             Home
            </Typography>
            </Link>
            </Button>
            <Button>
            <Link to="/iphone12Pro">
            <Typography variant="text" style={{color:"whitesmoke"}}>
            iPhonePro
            </Typography>
            </Link>
            </Button>
            <Button>
            <Link to="/ipadPro">
            <Typography variant="text" style={{color:"whitesmoke"}}>
            iPad
            </Typography>
            </Link>
            </Button>

            <Button>
            <Link to="/iphone12">
            <Typography variant="text" style={{color:"whitesmoke"}}>
            iPhone
            </Typography>
            </Link>
            </Button>

            <Button>
            <Link to="/tv">
            <Typography variant="text" style={{color:"whitesmoke"}}>
            TV
            </Typography>
            </Link>
            </Button>
            <Button>
            <Link to="/discussion">
            <Typography variant="text" style={{color:"whitesmoke"}}>
            Discussion
            </Typography>
            </Link>
            </Button>
            
            <Button>
            <Link to="/support">
            <Typography variant="text" style={{color:"whitesmoke"}}>
            Support
            </Typography>
            </Link>
            </Button>

            <Link to="/shopping">
            <IconButton edge="middle" color="primary" >
            <ShoppingCartIcon />
            </IconButton>
            </Link>

            
                {(currentUser) ? 
                (
                    <Link to="/profile">
                    <div className={classes.avatardiv}>
                    <IconButton edge="middle" color="primary">
                    <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                    </IconButton>

                        <Link to="/login">
                            <Button color="primary"
                            onClick={handleSignOut}
                            >
                            Sign Out
                            </Button>
                        </Link>

                    </div>
                    </Link>
                )
                :
                (
                <div className={classes.avatardiv}>
                <Link to="/login">
                            <Button color="primary">
                            <div className={classes.avatartypography}>
                            Login
                            </div>
                            </Button>
                        </Link>
                </div>
                )
                }
            </Toolbar>
            </AppBar>

            </Grid>
            

            </Grid>

        </div>
           
        
     );
};
 
export default Header;