import React from 'react'
import { auth } from '../../Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Mainpage from '../auth/Main';
import IndexPage from '../../pages';

function RedirectApp() {
    const [user] = useAuthState(auth);
    return (
      user ? <Mainpage/> : <Mainpage/>
    );
  }
    
  export default RedirectApp;