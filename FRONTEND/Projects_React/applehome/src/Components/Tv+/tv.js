import {makeStyles} from "@material-ui/core";

let useStyles =  makeStyles((theme)=>(
    {
        onecard:{
            height:"100vh",
            width:"100vw",
            display:"flex",
            justifyContent:"center",
        },
        onecardmedia:{
            height:"40vh",
            width:"100vw",
            backgroundSize:"contain",
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
            [theme.breakpoints.down('md')]:{
                backgroundSize:"contain",
            }
        },
    }
));

export default useStyles;