import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/3.png'
import Search from '../../images/search2.png'
import Cart from '../../images/cart.png'
import Profile from '../../images/profile.png'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand navbar-light bg-theme">
            <div className="text-fluid justify-content-start ms-5 zoom1" >
                <Link to="" >
                    <img src={Logo} alt="VendurMart Logo" width="35px"/>
                </Link>  
            </div>
            
            <div class="text-fluid justify-content-start zoom1w">
                <Link to="">
                    <b className="d-inline-block align-baseline text-size">endurMart</b>
                </Link>
            </div>
                
                <div className="container-fluid text-fluid justify-content-end" >
                    <Link to="" className="nav-link text-white">
                        <b>Home</b>
                    </Link>
                    <Link to="" className="nav-link text-white">
                        <b>Contact</b>
                    </Link>
                    <Link to="" className="nav-link text-white">
                        <b>About</b>
                    </Link>

                    <Link to="" className="nav-link text-dark zoom">
                        <img src={Search} alt="logo goes here mx-auto" width="30px"/>
                    </Link> 

                    <Link to="" className="nav-link text-dark zoom">
                        <img src={Cart} alt="logo goes here mx-auto" width="35px"/>
                    </Link>
                    
                    <Link to="" className="nav-link text-dark zoom">
                        <img src={Profile} alt="logo goes here mx-auto" width="40px"/>
                    </Link>                  
                </div>    
            </nav>
        </div>
    )
}

