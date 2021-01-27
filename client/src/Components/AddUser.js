import React, { useState } from "react";
import '../App.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { createUser } from "../actions/userActions"
import { useDispatch } from "react-redux";

const AddUser = () => {
  const dispatch = useDispatch();

  const [id_unique, setIdUnique] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sumbmitHandler = (e) => {
    e.preventDefault();

    console.log({ id_unique, name, email, password })
    dispatch(createUser({ id_unique, name, email, password }))

  }
  return (
    <div className='Add'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">New user</p>
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light"
                  >
                    User ID
                </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                    value={id_unique}
                    onChange={(e) => setIdUnique(e.target.value)}
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User firts name
                </label>
                  <input
                    type="text"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User Email
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User last name
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User Password
                </label>
                  <input

                    id="defaultFormCardEmailEx"
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User NIC
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User sex
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User recruitment date
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User grade
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User level
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User situation
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    User statu
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    Date
                </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <div className="text-center py-4 mt-3">
                    <MDBBtn type="submit" onClick={sumbmitHandler}>
                      Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default AddUser;