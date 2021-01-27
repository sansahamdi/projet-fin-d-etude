import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const UserCard = () => {
return (
<MDBContainer>
  <MDBListGroup style={{ width: "22rem" }}>
    <MDBListGroupItem>user name</MDBListGroupItem>
  </MDBListGroup>
</MDBContainer>

);
};

export default UserCard;
