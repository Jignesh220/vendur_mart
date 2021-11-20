import React from 'react'
import { auth } from '../../Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from './login';
import Layout from '../layout'

function LoginApp() {
    const [user] = useAuthState(auth);
    return (
      user ? <Layout/> : <Login/>
    );
  }
    
export default LoginApp;