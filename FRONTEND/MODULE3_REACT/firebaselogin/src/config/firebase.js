import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDiAizNzb_FEh8eFlVon6uZMjHDYuRGTg8",
    authDomain: "react-f0e3a.firebaseapp.com",
    projectId: "react-f0e3a",
    storageBucket: "react-f0e3a.appspot.com",
    messagingSenderId: "466193242714",
    appId: "1:466193242714:web:3e5e3ac22b2302a38d9663"
  };

  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth();

  export default firebaseAuth;