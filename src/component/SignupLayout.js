import React from 'react'
import PropTypes from 'prop-types';
import Footer from './Login/Footer' 
import Header from './Login/Header'
import Signup from './Login/signup';
import "./layout.css"

const Layout = ({children}) => (
    <>
        <Header/>
        <Signup/>
        {children}
        <Footer/>
    </>
)

Layout.prototype={
    children: PropTypes.node.isRequired,
}

export default Layout

