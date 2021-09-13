import * as React from "react"
import { graphql } from "gatsby"

import '../component/layout.css'

import Layout from "../component/layout"

const Home = (data) => {
  console.log(data);
  return (
    <div>
      <Layout>
      </Layout>
    </div>
  )
}

export default Home