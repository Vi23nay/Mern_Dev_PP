import React, {  useContext,useState, useEffect } from 'react';
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
  
  import { Controller, Scene } from 'react-scrollmagic';
  import s  from "./iphone12style";
  import { AuthContext } from "../../context/AuthProvider";

import Iphone12video from "../../Assets/Iphone12/Pexelsiphone12.mp4";
import h2ok from "../../Assets/Iphone12/h2ok.jpg_fit=scale";
import dualcameraimg from "../../Assets/Iphone12/dualcamera.jpg";
import a1 from "../../Assets/Iphone12/scrollmagic/a1.jpg";
import a2 from "../../Assets/Iphone12/scrollmagic/a2.jpg";
import coverphoto from "../../Assets/Iphone12/scrollmagic/coverphoto.jpg";
import giffy2 from "../../Assets/Iphone12/scrollmagic/giphy.gif";
import { Link } from "react-router-dom";
import Buynow  from "../buynowtask/buynow";



  const Iphone12 = (props) => {
    const { currentUser } = useContext(AuthContext);

    const handlebuynow = ()=>{
     Buynow("Iphone12",currentUser);
    };

    let useStyles = makeStyles(s);
    let classes = useStyles();

      return ( 
          <div>
              <Grid Container className={classes.mt}>

              <Grid item xs={5} sm={5} md={5}>
                    <Card variant="outlined" className={classes.onecard} style={{backgroundColor:"#9C99A2"}}>
                        <CardActionArea>

                    <CardContent className={classes.display}>
                    <Typography variant="h3" style={{fontWeight:"600"}}>
                        iPhone 12
                    </Typography>
                    <Typography variant="h5">
                        Blast past fast
                    </Typography>
                    <Typography variant="h6">
                        From $69900 before trade-in
                    </Typography>
                </CardContent>

                <CardActions className={classes.displayf}>

                
              
                <Link to="/shopping">
                <Button size="small" color="primary"
                 onClick={handlebuynow}
                 >
                 Buy Now
              </Button>
                </Link>
       
      </CardActions>

                        <CardMedia
          className={classes.onecardmedia}
          style={{backgroundColor:"#9C99A2",height:"100vh",width:"100vw"}}
          image={coverphoto}
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
                    image={h2ok}
                    title="iphone12"
                    ></CardMedia>
                  </CardActionArea>
                  </Card>
                  </Grid>


                  <Grid item xs={5} sm={5} md={5}>
                  <Card variant="outlined" className={classes.onecard}>
                  <CardActionArea>
                  <CardMedia
                    className={classes.onecardmedia}
                    style={{backgroundSize:"cover",height:"100vh"}}
                    image={dualcameraimg}
                    title="iphone12"
                    ></CardMedia>
                  </CardActionArea>
                  </Card>
                  </Grid>


              <div style={{backgroundSize:"contain",backgroundColor:"smokewhite"}}>
                  <Controller>
                    <Scene duration={100}>
                      <div>
                        <img src={a1} alt="" />
                      </div>
                    </Scene>
                    <Scene duration={101} pin>
                      <div>
                        <img src={a2} alt="" />
                      </div>
                    </Scene>
                  </Controller>
                </div>
              

                  <Grid item xs={5} sm={5} md={5}>
                  <Card variant="outlined" className={classes.onecard}>
                  <CardActionArea>
                  <CardMedia title="Iphone12">
                  <iframe className={classes.onecard} src={Iphone12video + "?autoplay=0&controls=0"} width="100%" height="100%"></iframe>
                  </CardMedia>
                  </CardActionArea>
                  </Card>
                  </Grid>






              </Grid>
          </div>
      );
  };
   
export default Iphone12;