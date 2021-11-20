import React from 'react'
import PropTypes from 'prop-types';
import Footer from './reuseable/Footer' 
import Nav from './reuseable/Nav'
import Header from './reuseable/Header'
import Infoblock from "../component/reuseable/Infoblock"
import Dualinfoblock from "../component/reuseable/Dualinfoblock"
import Carousel from './reuseable/caro';
import Card from './reuseable/Card';
import Heading from './reuseable/Heading';
import TrandingImage from '../images/Tranding.png'
import BackToTop from './reuseable/BackToTop';
import "./layout.css"

const Layout = ({children}) => (
    <div>
        <Nav/>
        <Carousel/>
        <br/>
        <Heading title="" textcolor="text-dark "/>
        {children}
        <Card/>
        <Dualinfoblock 
        heading="Tranding Product"
        img= {TrandingImage}
        TopicTitle = "boAt Xtend Smartwatch"
        Price = "Price ₹3,499.00"
        imgTitle = ""
        iCaption = ""
        infomation = "Alexa built-in Voice Assistant that sets reminders, alarms and answers questions from weather forecasts to live cricket scores at your command! 42mm big square colour LCD display with a round dial features complete capacitive touch experience to let you take control, effortlessly.The watch comes with a stress monitor that reads your HRV (Heart Rate Variabilities) to indicate stress levels. Its 14 sports mode and 5 ATM dust, splash and sweat resistance makes it the perfect fitness companion to have.Receive all your important notifications right on your watch, without taking out your phone. From calls & texts, to hydration & alarm alerts, get it all in one place."
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
        <BackToTop/>
    </div>
)

Layout.prototype={
    children: PropTypes.node.isRequired,
}

export default Layout

