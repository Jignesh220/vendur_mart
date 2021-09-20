import * as React from "react"
import '../component/layout.css'
import Header from "../component/Login/Header";
import Footer from "../component/Login/Footer";
import ProductImage from "../component/reuseable/ProductImage";


const Product = (data) => {
  console.log(data);
  return (
    <div>
        <Header/>
        <ProductImage/>
        
        <Footer/>
    </div>
  )
}

export default Product
