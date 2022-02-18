import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "../layout.css";

export default class Grocery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tranding: props.tranding.edges,
      product: props.tranding.edges,
    };
  }
  render() {
    return (
      <section className="py-5">
        <div className="container-fluid">
          <div className="row mb-3 mx-5">
            {this.state.tranding.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="card col-10 col-lg-5 d-flex mt-3 mb-3 mx-auto border-0 shadow-lg"
                >
                  <div className="row">
                    <div className="col-4 my-3">
                      <GatsbyImage
                        image={node.image.gatsbyImageData}
                        alt={node.image.title}
                      />
                    </div>
                    <div className="col-6">
                      <div className="flex-grow-1 px-3">
                        <div className="d-flex justify-content-between mt-4">
                          <h5>{node.name}</h5>
                        </div>
                        <h6 className="text-success mt-2">
                          price : ₹ {node.price}
                        </h6>
                        <button
                          data-item-id={node.id}
                          data-item-name={node.name}
                          data-item-price={node.price}
                          data-item-url="https://vendur-mart.web.app/cart/"
                          data-item-image={node.image.file.url}
                          className="btn bg-theme mt-4 mb-3 zoom1 text-light px-3 snipcart-add-item"
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
