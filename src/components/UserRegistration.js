import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { Form, FormGroup, Input, Toast } from "reactstrap";
import axios from "axios";
import base_url from "../service/UserService";

function UserRegistration() {

  const [user, setUser] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: ""
  });

  //form handler function
  const handleFormSubmit = (e) => {
    console.log(user);
    saveUser(user);
    e.preventDefault();
  }

  // created function to submit form server side
  const saveUser = (data) => {
    console.log(data);
    axios.post(`${base_url}/users/save`,data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
          console.log(error);
      }
    );
  }


  return (
    <div className="container my-2">
      <h3 className="my-2">Register new user</h3>
      <Fragment>
        <Form onSubmit={handleFormSubmit}>
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
              onChange={(e)=>{
                setUser({...user,firstName:e.target.value})
              }}
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
              onChange={(e)=>{
                setUser({...user,lastName:e.target.value})
              }}
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
              onChange={(e)=>{
                setUser({...user,email:e.target.value})
              }}
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
              onChange={(e)=>{
                setUser({...user,password:e.target.value})
              }}
            />
          </div>
        </div>
        <hr/>
        <div class="row g-3">
        <div class="col-md-4">
          <label for="inputUserType" class="form-label">
            User Type
          </label>
          <select id="inputUserType" class="form-select" onChange={(e)=>{
            setUser({...user,userType:e.target.value})
          }}>
            <option selected>Choose...</option>
            <option>Super</option>
            <option>Operation</option>
          </select>
        </div>
        <hr/>
        <div class="row g-1">
          {/* <div class="col"> */}
           <button type="submit" class="btn btn-success"> Register </button>
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
