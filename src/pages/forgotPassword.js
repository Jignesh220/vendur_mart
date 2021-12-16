import * as React from "react";

import "../component/layout.css";
import HeaderDoc from "../component/reuseable/HeaderDoc";
import Footer from "../component/reuseable/Footer";
import ResetPassword from "../component/auth/resetPassword";

const ForgotPasswordpage = () => {
  return (
    <div>
      <HeaderDoc />
      <div>
        <div className="container-fluid">
          <div className="row my-2">
            <div class="card col-10 mx-auto bg-light">
              <div class="card-body my-auto">
                <h5 class="card-title text-center mt-5">
                  Reset Password
                </h5>
                <h6 class="card-subtitle mb-2 text-muted text-center">
                </h6>
                <ResetPassword/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPasswordpage;
