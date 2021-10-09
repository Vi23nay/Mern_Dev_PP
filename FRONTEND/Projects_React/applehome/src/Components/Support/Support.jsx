import React, { useContext, useState } from "react";
import logo  from "../../Assets/LoginRelated/Apple_logo_grey.png";
import BackupSharpIcon from '@material-ui/icons/BackupSharp';
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
} from "@material-ui/core";
import s from "../Login/stlying";


const Support = (props) => {
  let [submit,setsubmit] = useState("");
  let [phonenumber,setphonenumber] = useState(false);

  const handleonsubmit = ()=>{
    if(phonenumber == true){
      setsubmit("Thank you for your feedback, Our executive will contact you soon");
    }
    else{
      setsubmit("Please fill all fields");
    }
   
  }

  const handlephonenumber = ()=>{
    setphonenumber(true);
  }

  let useStyles = makeStyles(s);
  let classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2} style={{justifyContent : "space-around"}}>
          <Grid item sm={6}>
            <Card variant="outlined" className={classes.mb,classes.mt}>
              <CardMedia
              image={logo}
              style={{ height: "5rem", backgroundSize: "contain" }}
              ></CardMedia>
              <CardContent className = {classes.centerElements}>

              <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  className = {classes.mb}
                ></TextField>

                <TextField
                  label="Mobile No"
                  type="number"
                  variant="outlined"
                  size="small"
                  className = {classes.mb}
                  onChange={handlephonenumber}
                ></TextField>

                 <TextField
                  label="Name"
                  type="name"
                  variant="outlined"
                  size="medium"
                  className = {classes.mb}
                ></TextField>

                <TextField
                  label="Home Address"
                  type="name"
                  variant="outlined"
                  size="medium"
                  className = {classes.mb}
                ></TextField>

              <CardActions>

              </CardActions>

                <CardActions>
                  <Button
                  variant="contained"
                  color="primary"
                  className={classes.fullWidth}
                  onClick={handleonsubmit}
                >
                  Submit
                </Button>
              </CardActions>

              <Typography style={{ textAlign: "center",marginTop:"1rem"}}>
              {submit}
              </Typography>

              </CardContent>
            </Card>

          </Grid>
        </Grid>




      </Container>
    </div>
  );
};

export default Support;
