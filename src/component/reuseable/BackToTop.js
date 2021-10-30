import React from 'react'
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Button } from 'react-bootstrap'

export default function BackToTop() {
    return (
        <div className="row mx-auto" >
            <button className="container-fluid text-center bg-theme2 text-decoration-none" onClick={() => scrollTo('#header')}>
                <div className="text-light py-3" >
                        Back to Top                    
                </div>
            </button>
        </div>
    )
}
