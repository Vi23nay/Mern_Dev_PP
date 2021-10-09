import React, { useContext,useState, useEffect } from 'react';
import { firebaseDB, firebaseStorage } from "../../config/firebase";
import { Link } from 'react-router-dom';
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
  import iphone12Proimg from "../../Assets/Homepage/iphone-12-pro.jpg";
  import iphone12img from "../../Assets/Homepage/iphone12.jpg";
  import ipadimg from "../../Assets/Homepage/ipad-pro_overview.png";


  import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
  import { AuthContext } from "../../context/AuthProvider";
  let totalProductDetails = {
      "Iphone12":iphone12img,
      "Iphone12Pro":iphone12Proimg,
      "IpadPro":ipadimg,
  };

const Shopping = (props) => {
    let [finalstate, setfinalstate] = useState([]);
    const { currentUser } = useContext(AuthContext);

    const handleremove= async(object)=>{
        let data = object.item;
        let uid = currentUser.uid;
        let documentobject1 = await firebaseDB.collection("users").doc(uid).get();
        let documentdata = documentobject1.data();
        let productPurchasedNameArray = documentdata.productPurchasedName;
        let countofproductsarray = documentdata.countofproducts;
        let countdata = countofproductsarray[countofproductsarray.length-1];
        let updatedcountdata = [];
        updatedcountdata.push(countdata-1);
        let newarray = [];

        for(let i=0;i<productPurchasedNameArray.length;i++){
            if(productPurchasedNameArray[i] != data){
                newarray.push(productPurchasedNameArray[i]);
            }
        }


        await firebaseDB.collection("users").doc(uid).update({
            productPurchasedName : newarray,
            countofproducts : updatedcountdata
        }
            );

            productPurchasedNameArray = documentdata.productPurchasedName;

            let keysarray = Object.keys(totalProductDetails);
            let arr = [];

            for(let i=0;i<newarray.length;i++){
                let obj1;
                for(let j=0;j<keysarray.length;j++){
                    if(newarray[i] == keysarray[j]){
                        let key = keysarray[j];
                        obj1 = {
                            "item":newarray[i],
                            "image":totalProductDetails[`${key}`],
                        };
                    }
                }
                arr.push(obj1);
            }
            setfinalstate(arr);
    }


    useEffect(async()=>{
        if(currentUser){
            let uid = currentUser.uid;
            let documentobject1 = await firebaseDB.collection("users").doc(uid).get();
            let productPurchasedNameArray = documentobject1.data().productPurchasedName;
            let keysarray = Object.keys(totalProductDetails);
            let valuessarray = Object.values(totalProductDetails);
            let a;
            let b;
            let obj;
            let arr = [];

            for(let i=0;i<productPurchasedNameArray.length;i++){
                for(let j=0;j<keysarray.length;j++){
                    if(productPurchasedNameArray[i] == keysarray[j]){
                        a=keysarray[j];
                    }
    
                    if(a == keysarray[j]){
                        b= valuessarray[j];
                    }
    
                    obj = {"item":a,
                           "image":b,
                };
                }
            arr.push(obj);
            }
            setfinalstate(arr);
        }
    });

    let useStyles = makeStyles({
        root:{
            height:"130vh",
            width:"100vw",
            backgroundColor:"darkcyan",
        },
        onecardmedia:{
            height:"100%",
            width:"60%",
            backgroundSize:"contain",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
          },
        onecard:{
            display:"flex",
            height:"50vh",
            width:"100vw",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"darkcyan",
            marginBottom:"2rem",
        },
        content:{
            height:"50%",
            width:"30%",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            flexDirection:"column",
        },
        headericon:{
            height:"20vh",
            width:"100vw",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"darkcyan",
            margin:"0",
        },
        contenttext:{
            color: "white",
            fontWeight:"600",
        },
        container:{
            height:"200vh",
            width:"100vw",
            backgroundColor:"darkcyan",
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"center",
            flexDirection:"column",
        },
    });
    let classes = useStyles();




    return ( 
        <div className={classes.root}>
            <h1 className={classes.headericon}>
            <IconButton edge="middle" color="Inherit" style={{fontSize:"large"}}>
             <ShoppingCartIcon></ShoppingCartIcon>
            </IconButton>
                SHOPPING CART
                </h1>

            <Grid Container  className={classes.container}>
            
                     {
                         
                         finalstate.map((finalobj)=>{
                             return(
                                <Grid item className={classes.onecard}>
                                <Card variant="outlined" className={classes.onecard}>
                                <CardActionArea className={classes.onecard}>
            
            
                                    
                                              <CardMedia
                                className={classes.onecardmedia}
                                image={finalobj.image}
                                title="TV"
                              ></CardMedia>
                                    
                                
                              <CardActions className={classes.content}>
                                  <Typography className={classes.contenttext}
                                  >{finalobj.item}</Typography>

                                <Link to="/Buynowpage">
                                  <Button variant="contained" color="primary"
                                  onClick={()=>{
                                      handleremove(finalobj);
                                  }}
                                  > 
                                      Place Order
                                  </Button>
                                  </Link>


                                  <Button
                                  onClick={()=>{
                                          handleremove(finalobj)}}
                                  variant="contained" color="primary">
                                      Remove
                                  </Button>
                              </CardActions>
                               
                                </CardActionArea>
                                    </Card>
                                    </Grid>
                             )
                         })
                         
                     }
            </Grid>
        </div>
     );
}
 
export default Shopping;