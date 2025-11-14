import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Form, FormGroup, Input } from "reactstrap";

function UserRegistration() {
  return (
    <div className="container" style={{ width: "1000px" }}>
      <p className="display-5 fw-bold">Register new user</p>
      <Fragment>
        <Form>
          <FormGroup>
        <div class="row g-3">
          <div class="col">
            <Input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              id="firstName"
              name="firstName"
            />
          </div>
          <div class="col">
            <Input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>
        <hr/>
        <div class="row g-3">
          <div class="col">
            <Input
              type="text"
              class="form-control"
              placeholder="email@gmail.com"
              aria-label="Email"
              id="email"
              name="email"
            />
          </div>
          <div class="col">
            <Input
              type="text"
              class="form-control"
              placeholder="**********"
              aria-label="Password"
              id="password"
              name="password"
            />
          </div>
        </div>
        <hr/>
        <div class="row g-3">
        <div class="col-md-4">
          <label for="inputUserType" class="form-label">
            User Type
          </label>
          <select id="inputUserType" class="form-select">
            <option selected>Choose...</option>
            <option>Super</option>
            <option>Operation</option>
          </select>
        </div>
        <hr/>
        <div class="row g-1">
          {/* <div class="col"> */}
           <button type="button" class="btn btn-success"> Register </button>
          {/* </div> */}
          {/* <div class="col"> */}
            <button type="button" class="btn btn-danger">Cancel</button>
          {/* </div> */}
        </div>
        </div>
        <hr/>
        </FormGroup>
      </Form>  
      </Fragment>
    </div>
  );
}

export default UserRegistration;
