import React from 'react'
import Samsung_m21 from '../../images/samsung_m21.png'
import Bagpack from '../../images/bagpack.png'
import Drug from '../../images/tablets.png'
import Pendrive from '../../images/pendrive.png'

import { Link } from 'gatsby'

export default function Card() {
  return (
    <div>
      <div className="col-10 mx-auto">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <Link to="" class="card h-100 zoom1 shadow bg-white rounded" style={{ textDecoration: 'none' }}>
              <div className="zoom text-center">
                <img src={Samsung_m21} class="card-img-top card-img" alt="..."/>
              </div>  
              <div class="card-body text-white text-center">
                <h5 class="card-title text-color-theme">Samsung Galaxy M21 2021 Edition</h5>
                <p class="card-text text-color-theme2">Price:	₹12,999.00</p>
                <Link to="" className="btn bg-theme text-white btn-block">
                  Add to cart
                </Link>
                <Link to="" className="btn bg-theme2 text-white btn-block align-bottom">
                  Buy Now
                </Link>
              </div>
            </Link>
          </div>
          <br/>
          <div class="col">
            <Link to="" class="card h-100 zoom1 shadow bg-white rounded" style={{ textDecoration: 'none' }}>
              <div className="zoom text-center">
                <img src={Bagpack} class="card-img-top card-img" alt="..."/>
              </div>
              <div class="card-body text-white text-center">
                <h5 class="card-title text-color-theme">POLESTAR"Noble Blue Casual bagpack</h5>
                <p class="card-text text-color-theme2">Price:	₹599.00</p>
                <Link to="" className="btn bg-theme text-white btn-block ">
                  Add to cart
                </Link>
                <Link to="" className="btn bg-theme2 text-white btn-block">
                  Buy Now
                </Link>
              </div>
            </Link>
          </div>
          <div class="col">
            <Link to="" class="card h-100 zoom1 shadow bg-white rounded" style={{ textDecoration: 'none' }}>
              <div className="zoom text-center">
                <img src={Drug} class="card-img-top card-img" alt="..."/>
              </div>
              <div class="card-body text-white text-center">
                <h5 class="card-title text-color-theme">Saridon Advance for Severe Headache</h5>
                <p class="card-text text-color-theme2">Price:	₹342.00 </p>
                <Link to="" className="btn bg-theme text-white btn-block ">
                  Add to cart
                </Link>
                <Link to="" className="btn bg-theme2 text-white btn-block">
                  Buy Now
                </Link>
              </div>
            </Link>
          </div>
          <div class="col">
            <Link to="" class="card h-100 zoom1 shadow bg-white rounded" style={{ textDecoration: 'none' }}>
              <div className="zoom text-center">
                <img src={Pendrive} class="card-img-top card-img" alt="..."/>
              </div>
              <div class="card-body text-white text-center">
                <h5 class="card-title text-color-theme">HP v236w 64GB USB 2.0 Pen Drive</h5>
                <p class="card-text text-color-theme2">Price:	₹699.00</p>
                <Link to="" className="btn bg-theme text-white btn-block">
                  Add to cart
                </Link>
                <Link to="" className="btn bg-theme2 text-white btn-block">
                  Buy Now
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
