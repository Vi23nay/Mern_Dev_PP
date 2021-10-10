import { makeStyles } from "@material-ui/core";
import img from "../../Assests/tech_curatorimage.jpg";

let useStyles = makeStyles((theme) => ({
  maindiv: {
    height:"100vh",
    width:"100vw",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#333744",
  },
  card:{
      height:"50vh",
      width:"30vw",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"ghostwhite",
      [theme.breakpoints.down("xs")]: {
        height:"50vh",
        width:"50vw",
    }
  },
  form:{
    height:"50vh",
    width:"30vw",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
  }
}));
export default useStyles;