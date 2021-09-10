import * as React from "react"
import { graphql } from "gatsby"

import '../component/firebase/firebase'
import '../component/layout.css'
import Footer from "../component/reuseable/Footer"
import Header from "../component/reuseable/Header"
import Nav from "../component/reuseable/Nav"
import Infoblock from "../component/reuseable/Infoblock"

const AboutPage = (data) => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Infoblock heading="About us"/>
      <Footer/>
    </div>
  )
}

export default AboutPage
