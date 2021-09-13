import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/3.png'
import Search from '../../images/search2.png'
import Cart from '../../images/cart.png'
import '../layout.css'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand navbar-light bg-theme">
            <div className="text-fluid justify-content-start ms-5 zoom1" >
                <Link to="" >
                    <img src={Logo} alt="VendurMart Logo" width="35px"/>
                </Link>  
            </div>
            
            <div class="text-fluid justify-content-start zoom1">
                <Link to="">
                    <b className="d-inline-block align-baseline text-size">endurMart</b>
                </Link>
            </div>
                
                <div className="container-fluid text-fluid justify-content-end" >
                    <Link to="" className="navbar-brand text-fluid ms-5 text-white text-font zoom1">
                        Home 
                    </Link> 
                    <Link to="" className="navbar-brand text-fluid ms-5 text-font  text-white zoom1">
                        Contact us 
                    </Link> 
                    <Link to="" className="navbar-brand text-fluid ms-5 me-5 text-font  text-white zoom1">
                        About us
                    </Link> 
                    <Link to="" className="btn border rounded btn-warning text-font navbar-brand text-fluid ms-5 text-size2  text-color-theme zoom1">
                        <b>Login</b> 
                    </Link>                  
                </div>    
            </nav>
        </div>
    )
}

