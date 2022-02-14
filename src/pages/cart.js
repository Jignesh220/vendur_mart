import React from "react";
import Header from "../component/reuseable/Header";
import HeaderDoc from "../component/reuseable/HeaderDoc";
import Footer from "../component/reuseable/Footer";
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
