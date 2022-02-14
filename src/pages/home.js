import * as React from "react"
import '../component/layout.css'
import LoginApp from '../component/auth/LoginApp'
import Header from '../component/reuseable/Header'
import Footer from "../component/reuseable/Footer"
import { graphql } from "gatsby"
import Card from "../component/products/card"
import Heading from "../component/reuseable/Heading"
import Dualinfoblock from "../component/reuseable/Dualinfoblock"
import Infoblock from "../component/reuseable/Infoblock"
import BackToTop from "../component/reuseable/BackToTop"
import TrandingImage from "../images/Tranding.png"
import Social from "../component/reuseable/social"
import Nav from "../component/reuseable/Nav"
import Caro from "../component/reuseable/caro"

const HomePage = ({data}) => {
  return (
    <div>
    <Header />
    <Nav />
    <Caro />
    <br />
    <Heading title="Product" textcolor="text-dark " />
    <Card tranding={data.tranding}/>
    <Dualinfoblock
      heading="Trending Product"
      img={TrandingImage}
      TopicTitle="boAt Xtend Smartwatch"
      Price="Price ₹3,499.00"
      imgTitle=""
      iCaption=""
      infomation="Alexa built-in Voice Assistant that sets reminders, alarms and answers questions from weather forecasts to live cricket scores at your command! 42mm big square colour LCD display with a round dial features complete capacitive touch experience to let you take control, effortlessly.The watch comes with a stress monitor that reads your HRV (Heart Rate Variabilities) to indicate stress levels. Its 14 sports mode and 5 ATM dust, splash and sweat resistance makes it the perfect fitness companion to have.Receive all your important notifications right on your watch, without taking out your phone. From calls & texts, to hydration & alarm alerts, get it all in one place."
    />
    <Infoblock
      heading="About Vision"
      info="VendurMart is specially designed for small, 
        medium and large scale businesses by allowing 
        them to connect and grow together, find business 
        leads, track their own growth, connect with customers 
        directly and many more. It is  a simple solution to 
        every business related problem."
      btext="About Us"
    />
    <BackToTop />
    <Social />
    <Footer/>
    </div>
  );
}

export const query = graphql`
  {
    tranding: allContentfulTranding {
      edges {
        node {
          id
          name
          price
          image {
            title
            gatsbyImageData(
              width: 250
             placeholder: BLURRED
             formats: [AUTO, WEBP, AVIF]
            )
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default HomePage
