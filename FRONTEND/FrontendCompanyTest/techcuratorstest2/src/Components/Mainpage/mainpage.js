import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles((theme) => ({
    
  leftmiddlediv:{
    height:"100%",
    width:"40%",
    display:"flex",
    [theme.breakpoints.down("md")]: {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      width:"30%",
  }
  },
}));
export default useStyles;