import * as React from "react"

import '../component/layout.css'
import Header from '../component/reuseable/Header'

import Footer from "../component/reuseable/Footer"
import Main from '../component/auth/Main'

const ProfilePage = () => {
  return (
    <div>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default ProfilePage
