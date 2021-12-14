import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/3.png'
import Logo2 from '../../images/fin.png'

export default function HeaderDoc() {
    return (
        <div id="header">
            <div class="bg-theme mx-auto py-2">
            <center>
                <a class="navbar-brand text-light" href="/">
                    <img src={Logo2} alt="VendurMart Logo" width="20px"/>
                    <br/>
                    VendurMart
                </a>
            </center>
            </div>
        </div>
    )
}

