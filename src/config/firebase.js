import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCa2sbQ0HRxelXKBUPApHc_FMacDvl4F5o",
    authDomain: "report-prototype.firebaseapp.com",
    projectId: "report-prototype",
    storageBucket: "report-prototype.appspot.com",
    messagingSenderId: "1022968365167",
    appId: "1:1022968365167:web:0de10bec101858f3cb4d9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;