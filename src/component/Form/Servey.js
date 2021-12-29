import React, { Component } from "react";

export default class Servey extends Component {
  render() {
    return (
      <div>
        <div className="card min-vh-100 m-5 bg-light">
          <div className="text-center mt-3 display-4 text-fluid">
            Servey Form
          </div>
          <form action="" className="mx-auto mt-4 col-11 col-md-5">
            <div class="form-group">
              <label for="InputName">
                Full Name<span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your full name"
                minLength={3}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="form-group">
              <label for="InputName">
                Email ID ( optional )<span className="text-danger"> </span>
              </label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter your full name"
                minLength={3}
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="form-group">
              <label for="InputGender">
                Gender<span className="text-danger"> *</span>
              </label>
              <div className="form-check">
                <input
                  type="radio"
                  name="Gender"
                  class="form-check-input"
                  required
                />
                <label for="genderSelection">Male</label>

                <input
                  type="radio"
                  name="Gender"
                  class="form-check-input ml-4"
                />
                <label for="genderSelection" className="ml-5 ms-2">
                  Female
                </label>
              </div>
              <div class="form-group">
                <label for="InputName">
                  Rate online Shoping <span className="text-danger"> *</span>
                </label>
                <div class="mb-3">
                  <select class="custom-select m-1" required>
                    <option value="">Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <div class="invalid-feedback">
                    Example invalid custom select feedback
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="InputName">
                  Top three things you buy on a daily basis
                  <span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  class="form-control col"
                  placeholder="1st Thing"
                  minLength={3}
                  required
                />
                <input
                  type="text"
                  class="form-control col mt-1"
                  placeholder="2nd Thing"
                  minLength={3}
                />
                <input
                  type="text"
                  class="form-control col mt-1"
                  placeholder="3rd Thing"
                  minLength={3}
                />
              </div>

              <div class="form-group">
                <label for="InputName">
                  Top three things you want to buy online but not easily
                  available<span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  class="form-control col"
                  placeholder="1st Thing"
                  minLength={3}
                  required
                />
                <input
                  type="text"
                  class="form-control col mt-1"
                  placeholder="2nd Thing"
                  minLength={3}
                />
                <input
                  type="text"
                  class="form-control col mt-1"
                  placeholder="3rd Thing"
                  minLength={3}
                />
              </div>
              <div class="form-group">
                <label for="InputName">
                  Is a store near you?<span className="text-danger"> *</span>
                </label>
                <div class="mb-3">
                  <select class="custom-select m-1" required>
                    <option value="">Choose...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <div class="invalid-feedback">
                    Example invalid custom select feedback
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="InputName">
                    Do you Like to Shop from local store by going physically to the local store<span className="text-danger"> *</span>
                </label>
                <input
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  type="number"
                  class="form-control"
                  placeholder="Rate between 1 to 10"
                  maxLength="10"
                  minLength="0"
                  required
                />
              </div>

              <div class="form-group">
                <label for="InputName">
                  Would you buy from an online store if easily accessible?
                  <span className="text-danger"> *</span>
                </label>
                <div class="mb-3">
                  <select class="custom-select m-1" required>
                    <option value="">Choose...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <div class="invalid-feedback">
                    Example invalid custom select feedback
                  </div>
                </div>
                <div class="form-group">
                  <label for="InputName">
                    How many times do you Buy from a retail store in a month?
                    <span className="text-danger"> *</span>
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="in number"
                    minLength={1}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="InputName">
                  What you prefer<span className="text-danger"> *</span>
                  </label>
                  <br />
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      name="prefer"
                      type="radio"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                      shop online with fast delivery
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      name="prefer"
                      type="radio"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2">
                      Shop offline by going physically to the local store
                    </label>
                  </div>
                  <button type="submit" className="btn bg-primary mt-4 text-light d-block mx-auto col-11 col-md-5 borderRounded">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
