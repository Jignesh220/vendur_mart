import * as React from "react"

import '../component/layout.css'
import LoginApp from '../component/auth/LoginApp'
import Header from '../component/reuseable/Header'
import Footer from "../component/reuseable/Footer"

const IndexPage = () => {
  return (
    <div>
    <LoginApp/>
    <Footer/>
    </div>
  );
}

export default IndexPage
