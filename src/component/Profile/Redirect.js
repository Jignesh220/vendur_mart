import React from 'react'
import { auth } from '../../Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Demo from './Demo';
import Mainpage from '../auth/Main';

function RedirectApp() {
    const [user] = useAuthState(auth);
    return (
      user ? <Mainpage/> : <Demo/>
    );
  }
    
  export default RedirectApp;