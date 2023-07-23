import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyA-8cTD6cDt_VB7RMst3WdwfpTvmfU-VAs",
    authDomain: "e-libary-525de.firebaseapp.com",
    projectId: "e-libary-525de",
    storageBucket: "e-libary-525de.appspot.com",
    messagingSenderId: "1069171208035",
    appId: "1:1069171208035:web:ce27b94019a196d2452d56",
    measurementId: "G-7WG90NDV62"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
