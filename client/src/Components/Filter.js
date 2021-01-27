import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const Filter = () => {
  return (
    <Fragment>
      <MDBBtn><strong>By name</strong></MDBBtn>
      <MDBBtn><strong>By level</strong></MDBBtn>
      <MDBBtn><strong>By secteur</strong></MDBBtn>
      <MDBBtn>By ...</MDBBtn>
    </Fragment>
  );
}

export default Filter;