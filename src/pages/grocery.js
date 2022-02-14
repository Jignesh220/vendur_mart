import React from "react";
import Header from "../component/reuseable/Header";
import HeaderDoc from "../component/reuseable/HeaderDoc";
import Footer from "../component/reuseable/Footer";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "../Firebase/firebase";
import '../component/layout.css'
import Grocery from "../component/products/Grocery";
import { graphql } from "gatsby";

const GroceryPage = ({data}) => {
    const user = useAuthState(auth);
  return (
    <section>
        {user?<Header/> : <HeaderDoc/>}
        <Grocery tranding={data.tranding}/>
        <Footer/>
    </section>
  );
};

export const query = graphql`
  {
    tranding: allContentfulGrocery {
      edges {
        node {
          id
          name
          price
          image {
            title
            gatsbyImageData
            file {
              url
            }
          }
        }
      }
    }
  }
`
export default GroceryPage;
