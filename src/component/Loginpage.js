import React from "react"
import { navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn } from "../component/utils/auth"
import Firebase from "gatsby-plugin-firebase";
import * as firebase from "firebase/app";
// import firebase from "gatsby-plugin-firebase";

const Loginpage = () => {

  if (isLoggedIn()) {
    navigate(`/Home`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          navigate('/');
        }
      }
    };
  }

  return (
    <div>
      <center>Please sign-in to access to the private route:</center>
      {Firebase && <StyledFirebaseAuth uiConfig={getUiConfig(Firebase.auth)} firebaseAuth={Firebase.auth()}/>}
    </div>
  );

}

export default Loginpage