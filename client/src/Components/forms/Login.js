import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onsubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/addUser' />;
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <form onSubmit={onsubmit}>
            <p className='h5 text-center mb-4'>Sign in</p>
            <div className='grey-text'>
              <MDBInput
                label='Type your email'
                icon='envelope'
                group
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                label='Type your password'
                icon='lock'
                group
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                validate
              />
            </div>
            <div className='text-center'>
              <MDBBtn>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
