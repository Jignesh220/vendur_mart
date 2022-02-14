import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tranding: props.tranding.edges,
      product: props.tranding.edges,
    };
  }
  render() {
    return (
      <section>
        <div className="col-10 mx-auto">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {this.state.tranding.map(({ node }) => {
              return (
                <div key={node.id}>
                  <div className="col">
                    <div
                      className="card h-100 zoom1 shadow bg-white rounded"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="zoom text-center p-3">
                        <GatsbyImage
                          image={node.image.gatsbyImageData}
                          alt={node.image.title}
                        />
                      </div>
                      <div className="card-body text-white text-center">
                        <h5 className="card-title text-color-theme">
                          {node.name}
                        </h5>
                        <p className="card-text text-color-theme2">
                          Price: ₹{node.price}
                        </p>
                        <button
                          data-item-id={node.id}
                          data-item-name={node.name}
                          data-item-price={node.price}
                          data-item-url="https://vendur-mart.web.app/cart/"
                          data-item-image={node.image.file.url}
                          className="btn bg-theme text-white btn-block snipcart-add-item"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
