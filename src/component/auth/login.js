import React, { Component } from 'react'
import { useState } from "react";
import { Link } from 'gatsby';
import { login } from './auth';
import { googleLogin } from './auth';
import { validation } from './auth';
import LoginSVG from '../../images/loginbackground.svg'

const Login = () => {
  const [form,setForm] = useState({
      email:'',
      password:''
  })
  const handleSubmit = async(e)=>{
      e.preventDefault();
      await login(form);
  }

  const handleVelidation = async(e) =>{
    e.preventDefault();
    await validation(form);
  } 

  const googleDirectLognin = async(e) =>{
    e.preventDefault();
    await googleLogin();
  }

  return (
    <section class="d-flex align-items-center min-vh-100 py-md-0 ">\ 
    <div class="card container shadow borderRounded border-0 bg-light">
        <div class="row d-flex align-items-center">
            <div class="no-gutters">
                <img
                    src={LoginSVG}
                    class="img-fluid image-size borderRounded mx-auto login-card-img d-none d-lg-block"
                    alt="Phone image"
                />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 py-5 mx-auto">
                <center className="mb-5">
                    <div className="display-4">Sign In</div>
                </center>
                <form onSubmit={handleSubmit}>
                    <div class="form-outline mb-4">
                        <label class="form-label pl-3" for="emailid">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="emailid"
                            class="form-control borderRounded button-design shadow-sm pl-4"
                            placeholder="E-mail Address"
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label pl-3" for="Password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="Password"
                            class="form-control borderRounded button-design shadow-sm pl-4"
                            placeholder="Password"
                            onChange={(e) => 
                              setForm({...form, password: e.target.value})
                            }
                            required required minLength={6}
                        />
                    </div>

                    <div class="d-flex justify-content-around align-items-center mb-4">
                        <div class="form-check mt-3 ms-2">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" required minLength={6}/>
                            <label class="form-check-label" for="exampleCheck1">Condition*</label>
                        </div>
                        <a href="#!">Forgot password?</a>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block button-design borderRounded">
                        Sign in
                    </button>
                </form>
                <center>
                    <h5 className="mt-4 ms-2"> Sign in with </h5>
                    <button class="bi bi-google border-0 borderRounded bg-light mt-1 icon text-danger" onClick={googleDirectLognin}></button> <span>    </span>
                    <button class="bi bi-facebook border-0 borderRounded bg-light mt-1 icon text-primary"></button> <span>    </span>
                    <button class="bi bi-apple border-0 borderRounded bg-light mt-1 icon text-secondary"></button> <span>    </span>
                </center>
                <center class="mt-3">
                    <span>have you not Register yet? </span>
                    <Link to="/register" class="border-0 borderRounded bg-dark text-light mt-1 text-secondary px-3 py-1 text-decoration-none pb-1"> Register</Link>
                </center>
            </div>
        </div>
    </div>
</section>
  )
}

export default Login
