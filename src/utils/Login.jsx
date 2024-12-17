import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';
import AXIOS_SERVICE from '../utils/AxiosService.jsx';
import ApiRouter from '../utils/ApiRouter.jsx';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Both email and password are required.');
      return;
    }

    try {
      const { data, message, token, role } = await AXIOS_SERVICE.post(
        ApiRouter.LOGIN.path,
        { email, password },
        { authenticate: ApiRouter.LOGIN.auth }
      );
      console.log('message :', message);
      console.log('token: ', token);
      console.log('role: ', role);

      alert(message);

      sessionStorage.setItem('token', token);
      sessionStorage.setItem('role', role);

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      if (role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailBlur = () => {
    if (!email) setEmailError(true);
  };

  const handlePasswordBlur = () => {
    if (!password) setPasswordError(true);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value) setEmailError(false); // Reset error when typing
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value) setPasswordError(false); // Reset error when typing
  };

  return (
    <MDBContainer fluid>
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)',
          height: '300px',
        }}
      ></div>

      <MDBCard
        className="mx-5 mb-5 p-5 shadow-5"
        style={{
          marginTop: '-100px',
          background: 'hsla(0, 0%, 100%, 0.8)',
          backdropFilter: 'blur(30px)',
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <div className="d-flex row">
            <MDBInput
              wrapperClass="mb-5 custom-width"
              size="lg"
              value={email}
              onChange={handleEmail}
              onBlur={handleEmailBlur}
              label="Email"
              id="form1"
              type="email"
              isInvalid={emailError}
            />
            {emailError && <div className="invalid-feedback">Email is required</div>}

            <MDBInput
              wrapperClass="mb-5 custom-width"
              size="lg"
              value={password}
              onChange={handlePassword}
              onBlur={handlePasswordBlur}
              label="Password"
              id="form1"
              type="password"
              isInvalid={passwordError}
            />
            {passwordError && <div className="invalid-feedback">Password is required</div>}
          </div>

          <div className="login-form-btn">
            <MDBBtn className="w-35 mb-4" size="md" onClick={handleSubmit}>
              Sign in
            </MDBBtn>

            <a className="w-35 mb-4" style={{ cursor: 'pointer' }} size="md" onClick={() => navigate('/signup')}>
              Sign up
            </a>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
