import * as React from "react"
import { graphql } from "gatsby"
import '../component/layout.css'
import SignupLayout from '../component/SignupLayout'

const signupPage = (data) => {
  console.log(data);
  return (
    <div>
        <SignupLayout>
        
        </SignupLayout>
    </div>
  )
}

export default signupPage
