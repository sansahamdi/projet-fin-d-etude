import React, { Fragment, useState } from 'react';
import Logo from '../../assets/Logo.png';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from 'mdbreact';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <MDBNavbar color='default-color' dark expand='md'>
        <MDBNavbarBrand>
          <img src={Logo} />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to='#!'>
                <MDBIcon icon='home' />
                <strong>Home</strong>{' '}
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/filter'>
                <MDBIcon icon='filter' />
                <strong>Filter</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='addUser'>
                <MDBIcon far icon='plus-square' />
                <strong>Add user</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='#!'>
                <MDBIcon far icon='edit' />
                <strong>Update</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='#!'>
                <MDBIcon icon='file-signature' />
                <strong>Posts</strong>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavLink to='/Login'>
              <MDBIcon icon='user' />
              <strong>Login</strong>{' '}
            </MDBNavLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Fragment>
  );
};

export default NavBar;
