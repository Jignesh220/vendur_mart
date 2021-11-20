import React from 'react'
import { auth } from '../../Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Register from './register';
import Mainpage from './Main';
import Layout from '../layout';

function RegisterApp() {
    const [user] = useAuthState(auth);
    return (
      user ? <Layout/> : <Register/>
    );
  }
    
  export default RegisterApp;