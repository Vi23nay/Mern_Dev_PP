import {makeStyles} from "@material-ui/core";

let useStyles = makeStyles((theme)=>({
    onecard:{
        height:"70vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        marginBottom:"0.2rem",
    },
    onecardmedia:{
        height:"40vh",
        width:"100vw",
        backgroundSize:"contain",
    },
    onecardtv:{
        height:"100vh",
        width:"100vw",
        display:"flex",
        backgroundSize:"cover",
        [theme.breakpoints.down('md')]:{
            backgroundSize:"contain"
        }
    },
    containerimacreasons:{
        height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"space-evenly",
        [theme.breakpoints.down('md')]:{
            display:"block",
            height:"200vh",
        }
    },
    onecardimac:{
        height:"100vh",
        width:"45vw",
        display:"flex",
        backgroundColor:"white",
        backgroundSize:"cover",
        marginRight:"5vw",
        [theme.breakpoints.down('md')]:{
            flexDirection:"column",
            height:"99vh",
            width:"100vw",
            backgroundSize:"conatin",
        }
    },
    display:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    },
    displayf:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    mb: {
        marginBottom: "1rem",
      },
    mt:{
        marginTop: "0.1rem",
      },
    backgroundcover:{
        backgroundSize:"cover",
    },
    profileimagediv:{
        height:"5vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
})
);
export default useStyles;