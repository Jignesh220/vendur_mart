import React, { Component } from "react";
import "./login.css";
import { GoogleAuthProvider } from "firebase/auth";
import LoginSvg from "../../images/login.svg";
import { getAuth } from "firebase/auth";

const Login = () => {
  const signin = () => {
    getAuth.signInWithPopup(GoogleAuthProvider).catch(alert);
  };

  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-4 col-md-8 col-lg-7 col-xl-6">
            <img
              src={LoginSvg}
              class="img-fluid image-size"
              alt="Phone image"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  class="form-control form-control-lg"
                  placeholder="E-mail Address"
                />
                <label class="form-label" for="form1Example13">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                  placeholder="Password"
                />
                <label class="form-label" for="form1Example23">
                  Password
                </label>
              </div>

              <div class="d-flex justify-content-around align-items-center mb-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label class="form-check-label" for="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-block">
                Sign in
              </button>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                class="btn btn-primary btn-lg btn-block loginwithgoogle"
                href="#"
                role="button"
              >
                <i class="fab fa-facebook-f me-2" onClick={signin}></i>Continue
                with Google
              </a>
              <a
                class="btn btn-primary btn-lg btn-block loginwithfacebook"
                href="#"
                role="button"
              >
                <i class="fab fa-twitter me-2"></i>Continue with Facebook
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
