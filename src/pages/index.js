import * as React from "react"
import { graphql } from "gatsby"



import '../component/layout.css'

import LoginLayout from '../component/LoginLayout'

const IndexPage = (data) => {
  console.log(data);
  return (
    <div>
      <LoginLayout>
      
      </LoginLayout>
    </div>
  )
}

export default IndexPage
