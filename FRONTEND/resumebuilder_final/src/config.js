import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
let fbObj = {
    apiKey: "AIzaSyBkn5Ujae8MnKIQKJPe4Smh83IzmldhgE8",
    authDomain: "resume-builder-54a67.firebaseapp.com",
    projectId: "resume-builder-54a67",
    storageBucket: "resume-builder-54a67.appspot.com",
    messagingSenderId: "628632675443",
    appId: "1:628632675443:web:a374da688807be8507f606"
}
firebase.initializeApp(fbObj);
export default firebase;
