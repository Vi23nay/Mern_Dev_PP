import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { firebaseDB, firebaseStorage, timeStamp } from "../../config/firebase";
// import { uuid } from "uuidv4";
import { v4 as uuid_v4 } from "uuid";
import VideoPost from "../VideoPost/VideoPost";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
  Typography,
  TextField,
  Avatar,
  Container,
} from "@material-ui/core";
import useStyles from "./discussion";
// import discussionimg from "../../Assets/Discussion/photo-1491933382434-500287f9b54b.jpg";
// import p1 from "../../Assets/Discussion/p1.jpg";

const Discussion = (props) => {
  const [filename,setfilename] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [uploadVideoError, setUploadVideoError] = useState("");
  const [description,setdescription] = useState("");
  const { currentUser } = useContext(AuthContext);

  let classes = useStyles();
  

  const handleInputFile = (e) => {
    if(e.target.files[0].name == 'undefined'){
      return;
    }
    
      let filenamefromui = e.target.files[0].name;
      let splitted = filenamefromui.split(".");
      let s = splitted[1];
      let file = e.target.files[0];
      setVideoFile(file);
      setfilename(s);
  };

  const handleUploadFile = async () => {
    try {
      // upload video in firebase storage
      let uid = currentUser.uid;
      let uploadVideoObject;

      if(filename == 'jpg'){
        uploadVideoObject = firebaseStorage
        .ref(`/profilePhotos/${uid}/${Date.now()}.jpg`)
        .put(videoFile);
      }
      else if(filename == 'png'){
        uploadVideoObject = firebaseStorage
        .ref(`/profilePhotos/${uid}/${Date.now()}.png`)
        .put(videoFile);
      }
      else if(filename == 'mp4'){
      uploadVideoObject = firebaseStorage
      .ref(`/profilePhotos/${uid}/${Date.now()}.mp4`)
      .put(videoFile);
      }

      uploadVideoObject.on("state_changed", fun1, fun2, fun3);
      function fun1(snapshot) {
        // bytes transferred
        // totoal bytes
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      }
      // if indicates a error !!
      function fun2(error) {
        console.log(error);
      }
      // it indicates success of the upload !!
      async function fun3() {
        let videoUrl = await uploadVideoObject.snapshot.ref.getDownloadURL();
        console.log(videoUrl);
        // let pid = uuid(); // unique id
        let pid = uuid_v4();
        console.log(pid);
        await firebaseDB.collection("posts").doc(pid).set({
          pid: pid,
          uid: uid,
          comments: [],
          likes: [],
          videoLink: videoUrl,
          videofiletype : filename,
          descriptionofpost:description,
          createdAt: timeStamp(),
        });
        let doc = await firebaseDB.collection("users").doc(uid).get();
        let document = doc.data();
        document.postsCreated.push(pid);
        await firebaseDB.collection("users").doc(uid).set(document);
        setUploadVideoError("");
      }
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    //GET ALL THE POSTS

    //onSnapshot => listens for changes on the collection
    firebaseDB
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let allPosts = snapshot.docs.map((doc) => {
          return doc.data();
        });
        setPosts(allPosts);
      });
  }, []); //component did mount !!

  

  return (
    <div className={classes.colorofbackground}>
      {
        (currentUser)?
        (
          <div>
            <div className={classes.root}>
        <div className={classes.uploadfile}>
        <input type="file" onChange={handleInputFile} />

        <TextField
          variant="filled"
          label="Type Post Description here"
          size="large"
          value={description}
          style={{border:"2px solid white",borderColor: 'blue'}}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        ></TextField>

          <label>
            <Button
              onClick={handleUploadFile}
              variant="contained"
              color="secondary"
              startIcon={<PhotoCamera></PhotoCamera>}
            >
              Upload
            </Button>
          </label>
        </div>
        <p>{uploadVideoError}</p>
        
      </div>

     
      {/* style={{ margin: "auto",backgroundImage:`url(${p1})`,backgroundSize:"contain"}} */}
      <div className="feeds-video-list">
          {posts.map((postObj) => {
            return <VideoPost key={postObj.pid} postObj={postObj}></VideoPost>;
          })}
        </div>

          </div>
        )
        :
        (
          // style={{ margin: "auto",backgroundImage:`url(${discussionimg})`,backgroundSize:"contain"}}
          <div className="feeds-video-list">
          {posts.map((postObj) => {
            return <VideoPost key={postObj.pid} postObj={postObj}></VideoPost>;
          })}
        </div>
        )
      }

    </div>
  );
};

export default Discussion;