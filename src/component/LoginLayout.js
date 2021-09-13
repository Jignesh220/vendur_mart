import React from 'react'
import PropTypes from 'prop-types';
import Footer from './Login/Footer' 
import Header from './Login/Header'
import Login from './Login/Login';
import "./layout.css"

const Layout = ({children}) => (
    <>
        <Header/>
        <Login/>
        {children}
        <br/>
        <Footer/>
    </>
)

Layout.prototype={
    children: PropTypes.node.isRequired,
}

export default Layout

