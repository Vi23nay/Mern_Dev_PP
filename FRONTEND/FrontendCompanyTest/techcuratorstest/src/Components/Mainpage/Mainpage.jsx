import React, { useState, useEffect } from 'react';
import useStyles from '../Mainpage/mainpage';
import img from "../../Assests/questionphoto.png";
import SendIcon from '@material-ui/icons/Send';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { Link } from 'react-router-dom';
import Webcam from "react-webcam";
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';
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

const Mainpage = () => {
    const [ans,setans] = useState("");
    const [message,setmessage] = useState("");
    const[inputstate,setinputstate] = useState("");
    const [anstrue,setanstrue] = useState("");
    const [timer,settimer] = useState({
        sec: 0,
        minutes:0,
        hour: 0,
    });
    const [toggle,setToggle] = useState("");


    const check = (val)=>{
        setans(val);
        setmessage("true");
            if(val == 30){
                setanstrue("true");
            }
            else{
                setanstrue("false");
            }
    }

    //For WEBCAM npm package used
        const webcamRef = React.useRef(null);
        const capture = React.useCallback(() => {
            const imageSrc = webcamRef.current.getScreenshot();
          },
          [webcamRef]
        );

        const steps = [
            {
            id: "Greet",
            message: "Hello, I am Alexa",
            trigger: "Ask Name"
          },
          {
            id: "Ask Name",
            message: "How may I help You?",
          },
          ];
        

    let classes = useStyles();
    return ( 
        <>
        <div className={classes.header}>
            <div>
                {/* {timer.sec} */}
                counter
            </div>
            <Link to="/">Logout</Link>
        </div>
        <div className={classes.maindiv}>
            <div className={classes.leftmiddlediv}>
            
            <div className={classes.leftdiv}>
                <div className={classes.lefttopdiv}>
                    <div>
                    <h1>Niksar</h1>
                    <p>Data Scince Assesment</p>
                    </div>

                    <div>
                     <Webcam
                        audio={false}
                        style={{height:"100%",width:"100%",color:"white"}}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        alt="Please allow Camera"
                    />
                   </div>

                </div>

                <div className={classes.leftdivbottom}>
                    {
                        (toggle)?
                        (
                        <>
                        <div className={classes.chatBotdiv}>
                        <ChatBot 
                        style={{width:"100%",height:"100%"}}
                        steps={steps}
                        >
                        </ChatBot>
                        <Button variant="contained" 
                        style={{backgroundColor:"gray",marginTop:"0.5rem"}}
                        onClick={()=> setToggle("")} >Close chat</Button>
                         </div>
                         </>
                        )
                        :
                        (
                            <>
                            <h4 style={{color:"lightblue"}}>Facing issues ?</h4>
                            <p style={{fontWeight:"700"}}>91267388493</p>
                            <p style={{fontWeight:"700"}}>92834995985</p>
                            <Button variant="contained" 
                            style={{backgroundColor:"gray"}}
                            onClick={()=> setToggle(true)} >Click to chat with us</Button>
                            </>
                        )
                    }
                </div>
            </div>


            <div className={classes.middlediv}>
                <iframe 
                style={{width:"100%",height:"100%"}}
                src="https://www.youtube.com/embed/jz78fSnBG0s?rel=0&modestbranding=1&autohide=1&mute=1&autoplay=1&showinfo=0&controls=0" 
                frameborder="0" allowfullscreen
                allow="autoplay"
                ></iframe>
            </div>
            </div>

            <div className={classes.rightdiv}>
                <div>
                <Card variant="outlined">
                    <CardActionArea className={classes.topdiv}>
                    <CardContent className={classes.typographycontent}>
                        <Typography>
                        Predict the output of the code snippet
                        </Typography>
                        </CardContent>
                        <Paper className={classes.paper} variant="outlined">
                        <CardMedia
                        style={{height:"95%",width:"95%"}}
                        image={img}
                        title="question image"
                        >
                        </CardMedia>
                        </Paper>

                        {
                            (ans)?
                            (
                                <Typography 
                        style={{height:"10%",
                        width:"100%",
                        display:"flex",
                        justifyContent:"flex-start",
                        alignItems:"center",
                        marginLeft:"1.5rem",
                        }}
                        >
                            <Button variant="contained" 
                            style={{backgroundColor:"lightblue"}}
                            >
                               {ans}
                                </Button>
                        </Typography>
                            )
                            :
                            (
                                <></>
                            )
                        }


                        {
                            (message)?
                            (
                                <Typography 
                        style={{height:"15%",
                        width:"100%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        marginLeft:"1.5rem",
                        }}
                        >

                            {
                                (anstrue == "true")?
                                (
                                    <h1>[Awesome!!]</h1>
                                )
                                :
                                (
                                    <h1>[Oops, wrong answer!]</h1>
                                )
                            }
                        </Typography>
                            )
                            :
                            (
                                <></>
                            )
                        }
                       
                        
                    </CardActionArea>
                </Card>
                </div>
               
                <div className={classes.bottomdiv}>
                    <div className={classes.optionsdiv}>
                        <Button onClick={()=> check(24)} variant="outlined">24</Button>
                        <Button onClick={()=> check(30)} variant="outlined">30</Button>
                        <Button onClick={()=> check(40)} variant="outlined">40</Button>
                        <Button onClick={()=> check(60)} variant="outlined">60</Button>
                        <Button onClick={()=> check(70)} variant="outlined">70</Button>
                        <Button onClick={()=> setans("You skipped this question")} variant="outlined">Skip this question</Button>
                    </div>
                    <div className={classes.messagediv}>
                        <input type="text" 
                        placeholder="Select an option from above or type here" 
                        value={inputstate}
                        onChange={(e)=>setinputstate(e.target.value)}
                        style={{height:"90%",width:"90%",backgroundColor:"lightgray"}}
                        />
                        <SendIcon 
                        style={{height:"90%",width:"5%",color:"blue"}}
                        onClick={() => check(inputstate)}
                        ></SendIcon>
                    </div>
                </div>
             </div>
        </div>
        </>
     );
}
 
export default Mainpage;