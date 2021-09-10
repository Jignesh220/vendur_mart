import React, { Component } from 'react'
import '../../component/layout.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'gatsby';

import C4 from '../../images/c1.jpg'
import C5 from '../../images/c2.jpg'
import C6 from '../../images/c3.jpg'

export default class Caro extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <Link to="" alt="Grocery logo">
            <img
              className="d-block w-100 mx-auto zoom1"
              src={C4}
              alt="First slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>Grocery</h3>
            <b>Condiments, Grains and Bread, Oil & Fat, Dairy Product, etc</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Link to="" alt="Grocery logo">
            <img
              className="d-block w-100 mx-auto zoom1"
              src={C5}
              alt="Second slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>Electronics</h3>
            <b>Computer accessories, Office products, Mobile accessories, etc</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="" alt="Grocery logo">
            <img
              className="d-block w-100 mx-auto zoom1"
              src={C6}
              alt="Third slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>Pharmaceuticals</h3>
            <b></b>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
