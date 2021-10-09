import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyA8AiFKHKa2jaovoYOT3txog1GtlzTu6Y8",
  authDomain: "applehome-18b84.firebaseapp.com",
  projectId: "applehome-18b84",
  storageBucket: "applehome-18b84.appspot.com",
  messagingSenderId: "1044907918231",
  appId: "1:1044907918231:web:0085416f9c88b8da9bbad2"
};

  let firebaseApp = firebase.initializeApp(firebaseConfig);
  export let firebaseAuth = firebaseApp.auth();
  export let firebaseStorage = firebaseApp.storage();
  export let firebaseDB = firebaseApp.firestore();
  export let timeStamp = firebase.firestore.FieldValue.serverTimestamp;
  