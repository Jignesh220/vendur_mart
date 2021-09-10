import React from 'react'
import { Link } from 'gatsby'
import Heading from '../reuseable/Heading'

export default function author() {
    return (
        <div>
            <div className="col-9 mx-auto">
                <Heading title="Authors" textcolor="text-color-theme"/>
                <div class="row row-cols-1 row-cols-md-3 g-3">
                <div class="col">
                    <Link to="" class="card h-100 zoom1 shadow bg-theme rounded" style={{ textDecoration: 'none' }}>
                    <div class="card-body text-white text-center">
                        <h5 class="card-title">Jignesh Baria</h5>
                        <p class="card-text">B.Tech-Computer Science Engineering</p>
                        <Link to="https://github.com/Jignesh220" className="btn bg-warning text-white btn-block" target="_blank">
                            <div className="text-color-theme">GitHub</div> 
                        </Link>
                    </div>
                    </Link>
                </div>
                <div class="col">
                    <Link to="" class="card h-100 zoom1 shadow bg-theme rounded" style={{ textDecoration: 'none' }}>
                    <div class="card-body text-white text-center">
                        <h5 class="card-title">Suzan Ghoniya</h5>
                        <p class="card-text">B.Tech-Computer Science Engineering</p>
                        <Link to="https://github.com/SuzanGhoniya" className="btn bg-warning text-white btn-block" target="_blank">
                            <div className="text-color-theme">GitHub</div> 
                        </Link>
                    </div>
                    </Link>
                </div>
                <div class="col">
                    <Link to="https://github.com/rajshriii" class="card h-100 zoom1 shadow bg-theme rounded" style={{ textDecoration: 'none' }}>
                    <div class="card-body text-white text-center">
                        <h5 class="card-title">Rajshree Roy</h5>
                        <p class="card-text">B.Tech-Computer Science Engineering</p>
                        <Link to="https://github.com/rajshriii" className="btn bg-warning text-white btn-block" target="_blank">
                            <div className="text-color-theme">GitHub</div> 
                        </Link>
                    </div>
                    </Link>
                </div>
                
            </div>
        </div>
        </div>
    )
}
