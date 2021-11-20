import * as React from "react"
import '../component/layout.css'
import RegisterApp from "../component/auth/RegisterApp"
import Header from '../component/reuseable/Header'
import Footer from "../component/reuseable/Footer"


const RegisterPage = (data) => {
  console.log(data);
  return (
    <div>
    <Header/>
    <RegisterApp/>
    <Footer/>
    </div>
  )
}

export default RegisterPage
