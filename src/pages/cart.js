import React from "react";
import Header from "../component/reuseable/Header";
import HeaderDoc from "../component/reuseable/HeaderDoc";
import Footer from "../component/reuseable/Footer";
import BackgroundImage from "../images/bkgi.png";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import Carousel from 'react-bootstrap/Carousel';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "../Firebase/firebase";
import '../component/layout.css'
import Scart from "../component/cart/Scart";
import IndexPage from ".";

const CartPage = () => {
    const user = useAuthState(auth);
  return (
    <section>
        {user?<Header/> : <HeaderDoc/>}
        {user?<Scart/> : <IndexPage/>}
        <Footer/>
    </section>
  );
};

export default CartPage;
