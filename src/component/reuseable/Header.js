import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/3.png'
import Logo2 from '../../images/fin.png'
import Profile2 from '../../images/profile1.svg'
import cart2 from '../../images/cart2.svg'
import search2 from '../../images/search2.svg'

export default function Header() {
    return (
        <div id="header">
            <nav class="navbar navbar-expand navbar-light bg-theme">
            <div className="zoom1" >
                <Link to="/home" >
                    <img className="ms-5" src={Logo2} alt="VendurMart Logo" width="40px"/>
                </Link>  
            </div>

                <div className="container-fluid text-fluid justify-content-end" >
                    
                    <Link to="" className="nav-link text-dark zoom">
                        <img src={search2} alt="logo goes here mx-auto" width="25px"/>
                    </Link> 

                    <Link to="" className="nav-link text-dark zoom">
                        <img src={cart2} alt="logo goes here mx-auto" width="30px"/>
                    </Link>
                    
                    <Link to="/Profile/" className="nav-link text-dark zoom">
                        <img src={Profile2} alt="logo goes here mx-auto bg-light" width="35px"/>
                    </Link>                  
                </div>    
            </nav>
        </div>
    )
}

