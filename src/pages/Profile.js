import * as React from "react";

import "../component/layout.css";
import Header from "../component/reuseable/Header";

import Footer from "../component/reuseable/Footer";
import Main from "../component/auth/Main";
import { graphql } from "gatsby";

const ProfilePage = ({ data }) => {
  return (
    <div>
      <Header />
      <Main />
      <ul>
      {data.allStrapiProducts.edges.map((document) => {
        <li key={document.node.id}>
          <h2>{document.node.name}</h2>
        </li>

      })}
      </ul>
      <Footer />
    </div>
  );
};

export default ProfilePage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProducts {
      edges {
        node {
          id
          name
          description
          product_photo {
            url
          }
        }
      }
    }
  }
`;
