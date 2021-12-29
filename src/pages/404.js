import * as React from "react"
import { Link } from "gatsby"
import ErrorImage from '../images/404.png'
import '../component/layout.css'


// markup
const NotFoundPage = () => {
  return (
    <div>
      <div className="card cardHeight bg-light m-5">
        <img src={ErrorImage} alt="404 image" height="300px" width="400px" className="img-fluid mx-auto d-block mt-5"/>
        <div className="mx-auto mt-3 text-error-font display-5">
          <span className="display-5">LOOKING FOR SOMETHING</span><br/>
          <Link to="/" className="btn m-2 bg-danger text-light mx-auto d-block mt-3">Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
