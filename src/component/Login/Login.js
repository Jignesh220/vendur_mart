import React, { Component } from 'react'
import "./login.css";
import LoginSvg from "../../images/loginbackground.svg";
import { Link } from 'gatsby';
import Logo from "../../images/3.png"
import { getAuth, onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from "firebase/auth";

class login extends Component{

  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannotbe empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <section class="d-flex align-items-center min-vh-100 py-md-0 ">
      <div class="card container shadow bg-light">
        <div class="row d-flex align-items-center ">
          <div class="no-gutters">
            <img
              src={LoginSvg}
              class="img-fluid image-size rounded mx-auto login-card-img d-none d-lg-block"
              alt="Phone image"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 py-5 mx-auto">
            <form>
              <div class="form-outline mb-4">
                  <label class="form-label pl-3" for="emailid">
                    Email address
                  </label>
                <input
                  type="email"
                  id="emailid"
                  class="form-control form-control-lg button-design shadow-sm pl-4"
                  placeholder="E-mail Address"
                  onChange={this.handleChange.bind(this, "email")}
                  value={this.state.fields["email"]}
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
                  class="form-control form-control-lg button-design shadow-sm pl-4"
                  placeholder="Password"
                  onChange={this.handleChange.bind(this, "Password")}
                  value={this.state.fields["Password"]}
                  required required minLength={6}
                />
              </div>

              <div class="d-flex justify-content-around align-items-center mb-4">
                <div class="form-check">
                  <input
                    class="form-check-input button-design"
                    type="checkbox"
                    value=""
                    id="submitbutton"
                    checked
                  />
                  <label class="form-check-label" for="submitbutton">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-block button-design">
                Sign in
              </button>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                class="btn btn-primary btn-lg btn-block loginwithgoogle button-design"
                href="/app/login"
                role="button"
              >
                Continue with Google
              </a>
              <a
                class="btn btn-primary btn-lg btn-block loginwithfacebook button-design"
                href="#"
                role="button"
              >
                Continue with Facebook
              </a>
              <Link
                class="btn btn-primary btn-lg btn-block loginwithfacebook button-design"
                to="/register"
                role="button"
              >
                sign up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default login;