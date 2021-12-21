import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const config = {
    apiKey: "AIzaSyBYEVNJlK0nUK8eVIasH2sdRgMTi-13OQ4",
    authDomain: "vendur-mart.firebaseapp.com",
    databaseURL: "https://vendur-mart-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vendur-mart",
    storageBucket: "vendur-mart.appspot.com",
    messagingSenderId: "219037957646",
    appId: "1:219037957646:web:2f005f4d4d77b19340465f",
    measurementId: "G-WM42LW1TL3"
};

firebase.initializeApp(config);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
const db = firebase.firestore();
export {auth , provider , db};