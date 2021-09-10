import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <footer>
        <div className="footer-block bg-theme text-font">
          <div className="container-fluid container">
            <div className="row">
              <div className="ms-5 col-8 pt-3 text-light">
                <Link to="#" className="mr-2 text-fluid text-size2 text-decoration-none text-light ">
                  Terms & Conditions
                </Link>
                <span className="mr-2 text-warning">
                  |
                </span>
                <Link to="#" className="mr-2 text-fluid text-size2 text-decoration-none text-light">
                  Refund Policy
                </Link>
                <span className="mr-2 text-warning">
                  |
                </span>
                <Link to="#" className="mr-2 text-fluid text-size2 text-decoration-none text-light">
                  Privacy Policy
                </Link>
                <span className="mr-2 text-warning">
                  |
                </span>
                <Link to="#" className="mr-2 text-fluid text-size2 text-decoration-none text-light">
                  Pricing Policy
                </Link>
              </div>
              <div className="ms-5 col-4 pt-3 text-light text-center">
                <Link to="#" className="mr-2 text-fluid text-size2 text-decoration-none text-light">
                  <h6>Copyright &copy;2021 <b className="text-warning">VendurMart</b></h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
