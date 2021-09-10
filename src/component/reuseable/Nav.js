import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar2 bg-theme2 justify-content-start">
                
                <a href=" " className="btn border rounded border-warning navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                    <b>Grocery</b>  
                </a>

                <a href=" " className="btn border rounded border-warning navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                    <b>Electronics</b> 
                </a>

                <a href=" " className="btn border rounded border-warning navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                    <b>Stationery</b> 
                </a>

                <button className="navbar-toggler" type="button" >
                    <a href=" " className="btn border rounded border-warning text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                        <b>All</b> 
                    </a>
                </button>

                

                <div class="collapse navbar-collapse">
                    
                    <a href=" " className="btn border rounded border-warning navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                        <b>Pharmaceuticals</b> 
                    </a>

                    <a href=" " className="btn border rounded border-warning navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                        <b>Fashion</b>  
                    </a>

                    <a href=" " className="btn border rounded border-warning navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                        <b>Computer</b> 
                    </a>

                    <a href=" " className="btn border rounded border-warning navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light align-content-end zoom1">
                        <b>All</b> 
                    </a>

                </div>
            </nav>
        )
    }
}
