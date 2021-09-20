import React from "react"
import { Router } from "@reach/router"
import Loginpage from "../component/Loginpage"

const App = () => (
    <div>
      <Router>
        <Loginpage path="/app/login" />
      </Router>
    </div>
)

export default App