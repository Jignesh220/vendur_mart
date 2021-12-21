import React from "react";
import { useState } from "react";
import { register } from "./auth";
import { validation } from "./auth";
import { googleLogin } from "./auth";
import { Link } from "gatsby";
import loginbackgroundSVG from '../../images/loginBkg.svg'
import HeaderDoc from "../reuseable/HeaderDoc";
import Footer from "../reuseable/Footer";

const Register = () => {
  const [form,setForm] = useState({
      email:'',
      password:'',
      customerName:''
  })
  const handleSubmit = async(e)=>{
      e.preventDefault();
      await register(form);
  }

  const handleVelidation = async(e) =>{
    e.preventDefault();
    await validation(form);
  } 

  // const userInformation = async(e) => {
  //   e.preventDefault();
  //   db.collection("userData").add({
  //     name: customerName
  //   });
  
  //   setCustomerName("");
  // };

  const googleDirectLognin = async(e) =>{
    e.preventDefault();
    await googleLogin();
  }

  return (
    <div>
    <HeaderDoc/>
    <section class="d-flex align-items-center min-vh-100 py-md-0 "> 
    <div class="card container shadow-lg borderRounded border-0 bg-light">
        <div class="row d-flex align-items-center">
            <div class="no-gutters">
                <img
                    src={loginbackgroundSVG}
                    class="img-fluid image-size borderRounded mx-auto login-card-img d-none d-lg-block"
                    alt="Phone image"
                />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 py-5 mx-auto">
                <center className="mb-3">
                    <div className="display-4">Register</div>
                </center>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                      <label class="form-label pl-3" for="emailid">
                        Name
                      </label>
                      <input
                        type="name"
                        class="form-control mt-1 borderRounded ps-3"
                        id="InputName"
                        placeholder="Enter Your Name"
                        onChange={(e) =>
                            setForm({ ...form, customerName: e.target.value })
                        }
                        required minLength={3}
                      />
                  </div>
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

                    <div class="form-outline mb-2">
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

                    <div class="d-flex justify-content-around align-items-center mb-2">
                        <div class="form-check mt-2 ms-2">
                            <input type="checkbox" class="form-check-input" required minLength={6}/>
                            <label class="form-check-label" >
                                <a href="/t&c" target="_blank">Terms And Conditions</a>
                            </label>
                        </div>
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
                    <span>Register already? </span>
                    <Link to="/" class="border-0 borderRounded bg-dark text-light mt-1 text-secondary px-3 py-1 text-decoration-none pb-1 "> Login</Link>
                </center>
            </div>
        </div>
    </div>
</section>
<Footer/>
</div>
  )
}

export default Register;