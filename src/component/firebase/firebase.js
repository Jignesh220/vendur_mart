import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYEVNJlK0nUK8eVIasH2sdRgMTi-13OQ4",
  authDomain: "vendur-mart.firebaseapp.com",
  projectId: "vendur-mart",
  storageBucket: "vendur-mart.appspot.com",
  messagingSenderId: "219037957646",
  appId: "1:219037957646:web:2f005f4d4d77b19340465f",
  measurementId: "G-WM42LW1TL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

