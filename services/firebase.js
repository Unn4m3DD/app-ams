import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBc4e69oncx9qoOuF-vXenUqxpegoUb_zg",
  authDomain: "pawdemic-c5aae.firebaseapp.com",
  databaseURL: "https://pawdemic-c5aae-default-rtdb.firebaseio.com",
  projectId: "pawdemic-c5aae",
  storageBucket: "pawdemic-c5aae.appspot.com",
  messagingSenderId: "376158685336",
  appId: "1:376158685336:web:961d800c5297ee941968ed",
  measurementId: "G-M8MLM3FRKT"
};
if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
export default firebase
