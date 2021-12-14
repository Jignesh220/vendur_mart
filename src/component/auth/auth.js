import firebase from 'firebase/compat/app';
import "firebase/compat/app"
import { provider } from '../../Firebase/firebase';
import {auth} from '../../Firebase/firebase'
  
export const register = async({email, password})=>{
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password).catch(alert);
    return resp;
}
  
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password).catch(alert);
    return res;
}

export const validation = async({email}) =>{
    let errors = {};
    let formIsValid = true;
    if (!email) {
      formIsValid = false;
      errors["email"] = "Cannotbe empty";
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    return formIsValid;
}

export const googleLogin = async()=>{
  const res = await firebase.auth().signInWithPopup(provider).catch(alert);
  return res;
}

export const ResetPasswordMail = async({email})=>{
  const res = await firebase.auth().sendPasswordResetEmail(email).then(alert(`Check your Mail\npassword reset Link send on ${email}`)).catch(alert);
  return res;
}

export const facebookLogin = async() => {
  const loginFacebook=firebase.auth().signInWithPopup(firebase.auth.FacebookAuthProvider());
  return loginFacebook;
}