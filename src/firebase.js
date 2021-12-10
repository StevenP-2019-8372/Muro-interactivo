import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration


  var firebaseConfig = {
    apiKey: "AIzaSyAFfNu_h9F7vB4qJck9jekeKBTsO2y5eZc",
    authDomain: "muro--interactivo.firebaseapp.com",
    projectId: "muro--interactivo",
    storageBucket: "muro--interactivo.appspot.com",
    messagingSenderId: "427065386238",
    appId: "1:427065386238:web:07a6684ff26a33dfba71af"
  };
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
