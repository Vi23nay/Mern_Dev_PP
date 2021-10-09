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
  import s  from "./iphone12Pro";
  import { Link } from "react-router-dom";

import p1 from "../../Assets/Iphone12Pro/p1.jpg";
import p2 from "../../Assets/Iphone12Pro/p2.jpg";
import p3 from "../../Assets/Iphone12Pro/p3.jpg";
import p4 from "../../Assets/Iphone12Pro/p4.jpg";
import p5 from "../../Assets/Iphone12Pro/p5.jpg";
import p6 from "../../Assets/Iphone12Pro/p6.jpg";
import p7 from "../../Assets/Iphone12Pro/p7.jpg";
import p8 from "../../Assets/Iphone12Pro/p8.jpg";
import p9 from "../../Assets/Iphone12Pro/p9.jpg";
import p10 from "../../Assets/Iphone12Pro/p10.jpg";

import p12 from "../../Assets/Iphone12Pro/p12.jpg";
import p13 from "../../Assets/Iphone12Pro/p13.jpg";

import p16 from "../../Assets/Iphone12Pro/p16.jpg";
import p18 from "../../Assets/Iphone12Pro/p18.jpg";
import p19 from "../../Assets/Iphone12Pro/p19.jpg";



import giffy2 from "../../Assets/Iphone12/scrollmagic/giffy2.gif";
import Buynow  from "../buynowtask/buynow";
import { AuthContext } from "../../context/AuthProvider";


  const Iphone12pro = (props) => {
    const { currentUser } = useContext(AuthContext);
    
    const [array, setarray] = useState(() => {
      let array = [p2,p3,p4,p5,p6,p7,p8,p9,p10,p12,p13,p16,p18,p19];
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
    });

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
                  <Card variant="outlined" className={classes.onecard} style={{color:"white",backgroundColor:"black"}}>
                      <CardActionArea>

                  <CardContent className={classes.display}>
                  <Typography variant="h3" style={{fontWeight:"600"}}>
                      iPhone 12 Pro
                  </Typography>
                  <Typography variant="h5">
                      It's a leap year
                  </Typography>
                  <Typography variant="h6">
                      From $119900 before trade-in
                  </Typography>
              </CardContent>

              <CardActions className={classes.displayf}>
              <Link to="/iphone12">
              </Link>

              <Link to="/shopping">
                <Button size="small" color="primary"
                 onClick={() => {
                  handlebuynow("Iphone12Pro");
                }}
                >
                 Buy Now
              </Button>
                </Link>
     
    </CardActions>

                      <CardMedia
        className={classes.onecardmedia}
        style={{backgroundColor:"black",height:"70vh",width:"100vw"}}
        image={p1}
        title="iphone12"
      ></CardMedia>
                      </CardActionArea>
                  </Card>
                  </Grid>



              <Grid item xs={5} sm={5} md={5}>
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

                
                <Grid item xs={5} sm={5} md={5}>
                <Card variant="outlined" className={classes.onecard}>
                <CardActionArea>
                <CardMedia
                  className={classes.onecardmedia}
                  style={{backgroundSize:"cover",height:"100vh"}}
                  image={array[0]}
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
                  image={array[1]}
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
                  image={array[2]}
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
                  style={{backgroundSize:"cover",height:"120vh"}}
                  image={array[3]}
                  title="iphone12"
                  ></CardMedia>
                </CardActionArea>
                </Card>
                </Grid>



            </Grid>
        </div>
    );
  };
   
export default Iphone12pro;