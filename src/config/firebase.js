import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBMS-_HRPRRbAtPcOHJO5lF_w5ANP3t6J4",
  authDomain: "anomalyformprot.firebaseapp.com",
  projectId: "anomalyformprot",
  storageBucket: "anomalyformprot.appspot.com",
  messagingSenderId: "67995275234",
  appId: "1:67995275234:web:f60e4ecce4ba9030bdf3bb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
