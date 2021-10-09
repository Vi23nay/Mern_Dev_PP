import React, { useState, useEffect } from 'react';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
  } from "@material-ui/core";
  import useStyles from '../Tv+/tv';
  import { Link } from "react-router-dom";

import p1 from "../../Assets/tv+/p1.jpg";
import p2 from "../../Assets/tv+/p2.jpg";


  const Iphone12Pro = (props) => {
    let classes = useStyles();
     
    return ( 
        <div>
            <Grid Container className={classes.mt}>

            <Grid item>
                  <Card variant="outlined" className={classes.onecard}>
                  <CardActionArea>
                  <CardMedia title="Iphone12">
                  <iframe className={classes.onecard} src={"https://www.youtube.com/embed/auxeLrtk7tk" + "?autoplay=1&controls=0"} allow='autoplay' frameborder="0" width="100%" height="100%"></iframe>
                  </CardMedia>
                  </CardActionArea>
                  </Card>
                  </Grid>

            <Grid item>
                  <Card variant="outlined" className={classes.onecard} style={{backgroundColor:"#0071F1"}}>
                      <CardActionArea>

                  <CardContent className={classes.display}>
                  <Typography variant="h3" style={{fontWeight:"600"}}>
                      TED LASSO
                  </Typography>
              </CardContent>

                      <CardMedia
        className={classes.onecardmedia}
        style={{height:"70vh",width:"100vw",backgroundColor:"#0071F1"}}
        image={p1}
        title="iphone12"
      ></CardMedia>
                      </CardActionArea>
                  </Card>
                  </Grid>

                  

                <div className={classes.onecard}>
                  <img src={p2} alt="" />
                </div>

            </Grid>
        </div>
    );
  };
   
export default Iphone12Pro;