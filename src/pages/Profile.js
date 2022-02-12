import * as React from "react";
import "../component/layout.css";
import Header from "../component/reuseable/Header";
import { Link } from "gatsby";
import Footer from "../component/reuseable/Footer";
import RedirectApp from "../component/Profile/Redirect";
import Mainpage from "../component/auth/Main";


export default function Profile() {
  return (
    <div>
      <Header />
      <RedirectApp />
      <Footer />
    </div>
  );
}
