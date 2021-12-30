import * as React from "react"
import { Link } from "gatsby"
import HeaderDoc from "../component/reuseable/HeaderDoc"
import Footer from "../component/reuseable/Footer"
import '../component/layout.css'

// markup
const FormConfirm = () => {
  return (
    <div>
    <HeaderDoc/>
      <div className="card bg-light border-0 shadow-lg min-vh-65">
        <div height="300px" width="400px" className="img-fluid mx-auto d-block mt-5 display-4">Thank You</div>
        <div className="mx-auto mt-3">
          <span className="display-4 text-dark">your response has been recorded</span><br/>
          <Link to="/form" className="btn my-1 bg-theme2 text-light mx-auto d-block mt-4 borderRounded col-6">Submit more response</Link>
          <Link to="/" className="btn my-1 bg-theme2 text-light mx-auto d-block mt-4 borderRounded col-6">Home</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FormConfirm
