import {makeStyles} from "@material-ui/core";

let useStyles = makeStyles((theme)=>({
    root:{
        height:"10vh",
        width:"100vw",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"lightblue",
      },
      uploadfile:{
        height:"10vh",
        width:"100vw",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        [theme.breakpoints.up('md')]:{
            width:"50vw",
    }
      },
      colorofbackground:{
          backgroundColor:"white",
      },
})
);


export default useStyles;