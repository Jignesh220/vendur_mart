import fb from "firebase/app"
import firebaseConfig 
export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()