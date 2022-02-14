import React from 'react'
import { auth } from '../../Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from './login';
import HomePage from '../../pages/home';

function LoginApp() {
    const [user] = useAuthState(auth);
    return (
      user ? <HomePage/> : <Login/>
    );
  }
    
export default LoginApp;