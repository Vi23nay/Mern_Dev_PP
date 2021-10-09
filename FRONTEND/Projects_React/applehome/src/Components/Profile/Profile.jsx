import React, { useContext,useState, useEffect } from 'react';
import { firebaseDB, firebaseStorage } from "../../config/firebase";
import { AuthContext } from "../../context/AuthProvider";
import useStyles from "./profile";
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
  import p1 from "../../Assets/Profile/Robert-Downey-Jr.-1-1.jpg";

const Profile = () => {
    let classes = useStyles();
    let [profileimage, setprofileimg] = useState([]);
    
    const { currentUser } = useContext(AuthContext);

    useEffect(async()=>{
      if(currentUser){
        let uid = currentUser.uid;
        let documentobject1 = await firebaseDB.collection("users").doc(uid).get();
        let documentdata = documentobject1.data();
        let profileimg = documentdata.profileImageUrl;
        let nameofuser = documentdata.username;
        let obj = {
          "name": nameofuser,
          "image" : profileimg,
        }

        setprofileimg(obj);
      }
    });

    return ( 
        <div className={classes.root}>
             <Grid item className={classes.onecardtv}>
                    <Card variant="outlined" className={classes.onecard} style={{justifyContent:"flex-start"}}>
                    <CardActionArea>
                   
                    <CardMedia
                    className={classes.onecardmedia}
                    image={profileimage.image}
                    title="Profile Image"
                  />
                  <CardContent className={classes.display} style={{height:"20vh",width:"100vw",color:"white"}}>
                    <h1>Hello {profileimage.name}</h1>
                  </CardContent>
                    </CardActionArea>
                        </Card>
                        </Grid>
        </div>
       
     );
}
 
export default Profile;