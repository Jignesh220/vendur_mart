import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4 text-font text-justify">
                            VendurMart is specially designed for small, 
                            medium and large scale businesses by allowing 
                            them to connect and grow together, find business 
                            leads, track their own growth, connect with customers 
                            directly and many more. It is  a simple solution to 
                            every business related problem. 
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">{heading}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
