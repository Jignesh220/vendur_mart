import * as React from "react"
import { graphql } from "gatsby"

import '../component/firebase/firebase'
import '../component/layout.css'

import Layout from "../component/layout"

const IndexPage = (data) => {
  console.log(data);
  return (
    <div>
      <Layout>
      </Layout>
    </div>
  )
}

export default IndexPage
