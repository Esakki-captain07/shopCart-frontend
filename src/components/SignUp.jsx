import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import AXIOS_SERVICE from '../utils/AxiosService.jsx';
import ApiRouter from '../utils/ApiRouter.jsx';

function SignUp() {
    const navigate = useNavigate()
   const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    mobile:'',
    email:'',
    password:''
   })

   const handleChange = (e)=>{
    const {name,value} = e.target
    setFormData((pre)=>({...pre,[name]:value}))
   }

   const handlesignup = async (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, mobile, email, password } = formData;
  
      let response = await AXIOS_SERVICE.post(
        ApiRouter.SIGNUP.path,
        { firstName, lastName, mobile, email, password },
        { headers: { Authorization: `Bearer ${ApiRouter.SIGNUP.auth}` } } 
      );
  
      console.log('Response:', response);
  
      if (response.message === 'User Created Successfull') {
        alert(response.message); 
        navigate('/'); 
      }
    } catch (error) {
      console.error('Signup Error:', error.response?.data || error.message);
      alert('Signup failed. Please try again.');
    }
  };
  
  return <>
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>
          <div className="d-flex row">
          <MDBRow>
            
                
              <MDBInput wrapperClass='mb-4 custom-width' size="lg" value={formData.firstName} onChange={handleChange}  label='First name' id='firstName' name='firstName' type='text'/>


              <MDBInput wrapperClass='mb-4 custom-width' size="lg" value={formData.lastName}  onChange={handleChange} label='Last name' id='lastName' name='lastName' type='text'/>
 
          </MDBRow>
          <MDBInput wrapperClass='mb-4 custom-width'  size="lg" value={formData.mobile} onChange={handleChange} label='number' id='mobile' name='mobile' type='number'/>

            <MDBInput
              wrapperClass="mb-4 custom-width"
              size="lg"
              label="Email"
              id="email"
              name='email'
              onChange={handleChange}
              value={formData.email}
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4 custom-width"
              size="lg"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              name='password'
              type="password"
            />
          </div>

          
          <div className="login-form-btn">
          <MDBBtn className='w-35 mb-3' size='md' onClick={handlesignup}>sign up</MDBBtn>
          <a className="w-35 mb-3" style={{cursor:'pointer'}} size="md" onClick={()=>navigate('/login')}>
            Sign in
          </a>
          </div>

          <div className="text-center">

            <p>or sign up with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

          </div>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </>;
}

export default SignUp;