import React, { Component } from 'react'
import { Link } from 'gatsby'
import Mail from '../../images/Mail.svg'

export default function Social() {
    return (
        <div id="header">
            <div class="bg-theme mx-auto py-1 text-center">
                <span className='text-light mx-3'>Contact Us</span>
                <a class="navbar-brand text-light" href="tel://9408165048" target="_blank">
                    <i alt="facebook logo" class="bi bi-telephone"/>
                </a>
                <a class="navbar-brand text-light" href="mailto:vendurmart@gmail.com" target="_blank">
                    <i alt="facebook logo" class="bi bi-envelope"/>
                </a>
                <a class="navbar-brand text-light" href="https://www.facebook.com/VendurMart" target="_blank">
                    <i alt="facebook logo" class="bi bi-facebook"/>
                </a>
                <a class="navbar-brand text-light" href="https://www.instagram.com/VendurMart/" target="_blank">
                    <i alt="instagram logo" class="bi bi-instagram"/>
                </a>
            </div>
        </div>
    )
}
