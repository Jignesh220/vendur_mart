import * as React from "react"
import { graphql } from "gatsby"

import '../component/layout.css'
import Footer from "../component/reuseable/Footer"
import Header from "../component/reuseable/Header"
import Nav from "../component/reuseable/Nav"
import Infoblock from "../component/reuseable/Infoblock"
import Dualinfoblock from "../component/reuseable/Dualinfoblock"
import Author from "../component/about_us/author"

const AboutPage = (data) => {
  return (
    <div>
      <Header/>
      <Nav/>
      <br/>
      <Author/>
      <Infoblock heading="About us"
      info="VendurMart is an E-commerce platform where you can list your business 
      and connect with businesses worldwide and grow together.
      It supports small, medium and large businesses. Through VendurMart 
      one gets buyleads which helps user to contact any other vendur and 
      turn it into a business deal. Users can also shop from the listed 
      products Want to increase your outreach? Register now"
      btext="Authors"
      />
      <Footer/>
    </div>
  )
}

export default AboutPage
