import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAFEodnm8lLECrtr-ZlSs5Oi_aRnjCkY0s",
    authDomain: "envochat-b223f.firebaseapp.com",
    projectId: "envochat-b223f",
    storageBucket: "envochat-b223f.appspot.com",
    messagingSenderId: "138101767977",
    appId: "1:138101767977:web:6733dcaf4abb6c42424138"
  }).auth();