import React, { useState } from 'react'
import TopBar from './TopBar.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Priceing() {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [emailError,setEmailError] = useState(false)
const [passwordError,setPasswordError] = useState(false)

const [showData,setShowData] = useState("")
const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        try {
            if(!email || !password){
                if(!email) setEmailError(true)
                if(!password) setPasswordError(true)
                alert('Both feild Required')
                return;
            }

            setEmailError(false);
            setPasswordError(false);
            setShowData({email,password})
            setEmail("")
            setPassword("")
            setTimeout(()=>{
                navigate('/dashboard')
            },3000)

            
        } catch (error) {
            console.log(error)
        }
    }

    const handleEmailBlur = ()=>{
        if(!email) setEmailError(true)
    }

    const handlePasswordBlur = ()=>{
        if(!password) setPasswordError(true)
    }


    const emailChange = (e)=>{
        setEmail(e.target.value)
        if(e.target.value){
            setEmailError(false)
        }
    }

    const passwordChange = (e)=>{
        setPassword(e.target.value)
        if(e.target.value){
            setPasswordError(false)
        }
    }

  return <>
  <TopBar/>
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" className='email' value={email} isInvalid={emailError} onChange={emailChange} onBlur={handleEmailBlur} placeholder="Enter email" />
        <Form.Control.Feedback type='invalid'>
            Email is Required
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={passwordChange} onBlur={handlePasswordBlur} isInvalid={passwordError} placeholder="Password" />
        <Form.Control.Feedback type='invalid'>
            Password is Required
        </Form.Control.Feedback>
      </Form.Group>
      
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

   {showData && (
     <div className="container">
     <div className="result">
         <div className="content">
             <h1>Email :{showData.email} </h1>
             <h1>Password :{showData.password} </h1>


         </div>
     </div>
 </div>
   )}
  </>
}

export default Priceing
