import React from "react"
import { Router } from "@reach/router"
import Login from "../component/login"
import Status from "../component/Status"

const App = () => (
  <div>
    <Status/>
    <Router>
      <Login path="/app/login" />
    </Router>
  </div>
)

export default App
