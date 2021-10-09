import React, {  useContext, useState, useEffect } from 'react';
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
  } from "@material-ui/core";
  import s  from "./ipadPro";
  import { Link } from "react-router-dom";

import p1 from "../../Assets/IpadPro/p1.jpg";
import p2 from "../../Assets/IpadPro/p2.jpg";
import p3 from "../../Assets/IpadPro/p3.jpeg";
import giffy2 from "../../Assets/IpadPro/giffy.gif";
import ipadprovid from "../../Assets/IpadPro/Pexels Videos 905049.mp4";
import Buynow  from "../buynowtask/buynow";
import { AuthContext } from "../../context/AuthProvider";


  const Ipadpro = () => {
    const { currentUser } = useContext(AuthContext);

    const handlebuynow = (data)=>{
      if(currentUser){
        Buynow(data,currentUser);
      }
    };



    let useStyles = makeStyles(s);
    let classes = useStyles();
     
    return ( 
        <div>
            <Grid Container className={classes.mt}>

            <Grid item>
                  <Card variant="outlined" className={classes.onecard} style={{backgroundColor:"white"}}>
                      <CardActionArea>

                  <CardContent className={classes.display}>
                  <Typography variant="h3" style={{fontWeight:"600"}}>
                      ipad Pro
                  </Typography>
                  <Typography variant="h5">
                      Supercharged by the Apple M1 chip
                  </Typography>
              </CardContent>

              <CardActions className={classes.displayf}>
              <Link to="/iphone12">
              </Link>

              <Link to="/shopping">
                <Button size="small" color="primary"
                 onClick={() => {
                  handlebuynow("IpadPro");
                }}
                >
                 Buy Now
              </Button>
                </Link>
     
    </CardActions>

                      <CardMedia
        className={classes.onecardmedia}
        style={{height:"70vh",width:"100vw"}}
        image={p1}
        title="iphone12"
      ></CardMedia>
                      </CardActionArea>
                  </Card>
                  </Grid>



              <Grid item >
              <Card variant="outlined" className={classes.onecard}>
              <CardActionArea>
              <CardMedia
                className={classes.onecard}
                style={{backgroundSize:"cover",height:"100vh"}}
                image={giffy2}
                title="iphone12"
                >
                </CardMedia>
              </CardActionArea>
              </Card>
              </Grid>

                
                <Grid item >
                <Card variant="outlined" className={classes.onecard}>
                <CardActionArea>
                <CardMedia
                  className={classes.onecardmedia}
                  style={{backgroundSize:"cover",height:"150vh"}}
                  image={p2}
                  title="iphone12"
                  ></CardMedia>
                </CardActionArea>
                </Card>
                </Grid>


                <Grid item>
                <Card variant="outlined" className={classes.onecard}>
                <CardActionArea>
                <CardMedia
                  className={classes.onecardmedia}
                  style={{backgroundSize:"cover",height:"100vh"}}
                  image={p3}
                  title="iphone12"
                  ></CardMedia>
                </CardActionArea>
                </Card>
                </Grid>

                <Grid item xs={5} sm={5} md={5}>
                  <Card variant="outlined" className={classes.onecard}>
                  <CardActionArea>
                  <CardMedia title="Iphone12">
                  <iframe className={classes.onecard} src={ipadprovid + "?autoplay=0&controls=0"} width="100%" height="100%"></iframe>
                  </CardMedia>
                  </CardActionArea>
                  </Card>
                  </Grid>


            </Grid>
        </div>
    );
  };
   
export default Ipadpro;