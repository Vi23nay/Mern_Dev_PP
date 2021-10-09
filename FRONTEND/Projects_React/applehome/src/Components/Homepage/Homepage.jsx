import React, {  useContext, useState, useEffect } from 'react';
import { firebaseDB, firebaseStorage } from "../../config/firebase";
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
  import iphone12img from "../../Assets/Homepage/iphone12.jpg";
  import iphone12proimg from "../../Assets/Homepage/iphone-12-pro.jpg";
  import ipadproimg from "../../Assets/Homepage/ipad-pro_overview.png";
  import imacimg from "../../Assets/Homepage/apple_new-imac.jpg";
  import reasonsmacworkimg from "../../Assets/Homepage/11reasonsmacwork.jpg";
  import tvimg from "../../Assets/Homepage/tv+.jpg";
  import { Link } from 'react-router-dom';
  import useStyles from './homepagestyle';
  import Buynow  from "../buynowtask/buynow";
  import { AuthContext } from "../../context/AuthProvider";



const Homepage = (props) => {
    let classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    let [nameofuser,setnameofuser] = useState(null);
    let [profileimageofuser,setprofileimageofuser] = useState(null);


    useEffect(async()=>{
        if(currentUser){
        let uid = currentUser.uid;
        let documentobject = await firebaseDB.collection("users").doc(uid).get();
        let documentdata = documentobject.data();
        profileimageofuser = documentdata.profileImageUrl;
        nameofuser = documentdata.username;
        setprofileimageofuser(profileimageofuser);
        setnameofuser(nameofuser);
        }
    });
    
    
    const handlebuynow = (data)=>{
      if(currentUser){
        Buynow(data,currentUser);
      }
    };

    return (  
        <div>
                <Grid Container >
                  {
                  (currentUser) ? (
                    <div className={classes.profileimagediv}>
                    <Avatar alt="U" src={profileimageofuser}>  </Avatar>

                       <div className={classes.avatartypography}>
                       <Typography>Hi {nameofuser}, Welcome Back</Typography>
                       </div>
                 </div>
                  ) 
                :
                (
                  <></>
                )
                }
                  
                    <Grid item >
                    <Card variant="outlined" className={classes.onecard}>
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
                <Link to="/iphone12">
                <Button size="small" color="primary">
                Learn More
              </Button>
                </Link>

                <Link to="/shopping">
                <Button size="small" color="primary"
                 onClick={() => {
                  handlebuynow("Iphone12");
                }}
                >
                 Buy Now
              </Button>
                </Link>
       
      </CardActions>

                        <CardMedia
          className={classes.onecardmedia}
          image={iphone12img}
          title="iphone12"
        ></CardMedia>
                        </CardActionArea>
                    </Card>
                    </Grid>


                    <Grid item>
                    <Card variant="outlined" className={classes.onecard} style={{backgroundColor:"black",height:"50vh"}}>
                        <CardActionArea>

                    <CardContent className={classes.display} style={{color:"white"}}>
                    <Typography variant="h3" style={{fontWeight:"600"}}>
                        iPhone 12 Pro
                    </Typography>
                    <Typography variant="h5">
                        It's a leap year.
                    </Typography>
                    <Typography variant="h6">
                        From $119900 before trade-in
                    </Typography>
                </CardContent>

                <CardActions className={classes.displayf}>
                <Link to="/iphone12Pro">
                <Button size="small" color="primary">
                  Learn More
                </Button>
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
          image={iphone12proimg}
          title="iphone12"
        ></CardMedia>
                        </CardActionArea>
                    </Card>
                    </Grid>
                

                    <Grid item>
                    <Card variant="outlined" className={classes.onecard} style={{color:"white",backgroundColor:"black"}}>
                        <CardActionArea>

                    <CardContent className={classes.display}>
                    <Typography variant="h3" style={{fontWeight:"600"}}>
                        iPad Pro
                    </Typography>
                    <Typography variant="h5">
                        Supercharged by the Apple M1 chip
                    </Typography>
                </CardContent>

                <CardActions className={classes.displayf}>
                <Link to="/ipadPro">
                <Button size="small" color="primary">
                  Learn More
                  </Button>
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
          image={ipadproimg}
          title="ipad pro"
        ></CardMedia>
                        </CardActionArea>
                    </Card>
                    </Grid>
                

                <Grid Container className={classes.containerimacreasons}>
                    <Grid item xs={5} >
                        <Card variant="outlined" className={classes.onecardimac}>
                    <CardActionArea>

                    <CardContent className={classes.display}>
          <Typography variant="h3">
            iMac
          </Typography>
          <Typography variant="h6">
            say hello
          </Typography>
        </CardContent>

        <CardActions className={classes.display}>
          <Link to="/ipadPro">
          <Button size="small" color="primary">
        Learn More
        </Button>
          </Link>
       
      </CardActions>


                    <CardMedia
          className={classes.onecardimac}
          image={imacimg}
          title="iMac"
        />

                    </CardActionArea>
                        </Card>
                        </Grid>


                        <Grid item xs={5} >
                        <Card variant="outlined" className={classes.onecardimac}>
                    <CardActionArea>

                    <CardMedia
          className={classes.onecardimac}
          image={reasonsmacworkimg}
          title="Mac"
        />

                    </CardActionArea>
                        </Card>
                        </Grid>


                </Grid>
                


                    <Grid item className={classes.onecardtv}>
                    <Card variant="outlined" className={classes.onecardtv}>
                    <CardActionArea>

                    <CardActions className={classes.display}
                    style={{position:"relative",top:"85vh",left:"5vw"}}
                    >
                      <Link to="/tv">
                      <Button variant="contained" color="primary">
                      Learn more
                    </Button>
                      </Link>
                  </CardActions>
                  
                    <CardMedia
                    className={classes.onecardtv}
                    image={tvimg}
                    title="TV"
                  />
                    </CardActionArea>
                        </Card>
                        </Grid>
               
                
                
                </Grid>
        </div>
    );
};

export default Homepage;