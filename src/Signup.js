import React, { useState } from 'react';

import {Link} from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import PasswordIcon from '@mui/icons-material/Password';
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import './signup.css';

import { TextField } from '@mui/material';

const SignUp = () => {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('') 

  const [passwordVisible, setPasswordVisible] = useState({
    password: "",
    showPassword: false
  })

  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState({
    confirmPassword: "",
    showConfirmPassword: false
  })


  const changeVisibility = ()=> {
      setPasswordVisible({...passwordVisible, showPassword: !passwordVisible.showPassword});
  }
  

  const contentVisibility = (event) => {
      setPasswordVisible({...passwordVisible, password: event.target.value});
  }

  const changeVisibilityConfirm = () => { 
    setConfirmPasswordVisible({...confirmPasswordVisible, showConfirmPassword: !confirmPasswordVisible.showConfirmPassword});
  }

  const contentVisibilityConfirm = (event) => {
    setConfirmPasswordVisible({...confirmPasswordVisible, confirmPassword: event.target.value});
  }

  return (
    <div id="signup-body">
      <div className="signup-main-items" id="signup-heading">Sign Up Page</div>

      <div className="signup-main-items" id="signup-form">
        <div className="signup-form-div1" id="signup-form-name-div">
          <SchoolIcon className="signup-form-icon"/>
          <TextField
          className="signup-form-textfield"
          label="Institute Name"
          variant="standard"
          spellcheck={false}
          sx = {{
            input: {
              color: 'aquamarine',
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 18,
              marginTop: '4px'
            },
            label: {
              color: "#aaaaaa",
              fontSize: 20,
              fontFamily: 'Libre Baskerville, serif',
            }
          }}
          />  
        </div>

        <div className="signup-form-div1">
          <EmailIcon className="signup-form-icon"/>
          <TextField 
          className="signup-form-textfield"
          label="Institute Email Id"
          variant="standard"
          spellcheck={false}
          sx = {{
            input: {
              color: 'aquamarine',
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 18,
              marginTop: '4px'
            },
            label: {
              color: "#aaaaaa",
              fontSize: 20,
              fontFamily: 'Libre Baskerville, serif',
            }
          }}
          />
        </div>

        <div className="signup-form-div1">
          <PhoneIcon className="signup-form-icon"/>
          <TextField 
          className="signup-form-textfield"
          label="Institute Contact Number"
          variant="standard"
          spellcheck={false}
          sx = {{
            input: {
              color: 'aquamarine',
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 18,
              marginTop: '4px'
            },
            label: {
              color: "#aaaaaa",
              fontSize: 20,
              fontFamily: 'Libre Baskerville, serif',
            }
          }}
          />
        </div>

        <div className="signup-form-div1">
          <PasswordIcon className="signup-form-icon"/>
          <TextField 
          value={passwordVisible.password}
          type={passwordVisible.showPassword ? 'text' : 'password'}
          className="signup-form-textfield"
          label="Password"
          variant="standard"
          onChange={contentVisibility}
          spellcheck={false}
          InputProps={{
            endAdornment: passwordVisible.showPassword ? <IconButton><Visibility style={{color: 'aquamarine'}} onClick={changeVisibility}/></IconButton> : <IconButton><VisibilityOff style={{color: 'aquamarine'}} onClick={changeVisibility}/></IconButton>
          }}
          sx = {{
            input: {
              color: 'aquamarine',
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 18,
              marginTop: '4px'
            },
            label: {
              color: "#aaaaaa",
              fontSize: 20,
              fontFamily: 'Libre Baskerville, serif',
            }
          }}
          />
        </div>

        <div className="signup-form-div1">
          <PasswordIcon className="signup-form-icon"/>
          <TextField 
          value={confirmPasswordVisible.confirmPassword}
          type={confirmPasswordVisible.showConfirmPassword ? 'text' : 'password'}
          className="signup-form-textfield"
          label="Confirm Password"
          variant="standard"
          onChange={contentVisibilityConfirm}
          spellcheck={false}
          InputProps={{
            endAdornment: confirmPasswordVisible.showConfirmPassword ? <IconButton><Visibility style={{color: 'aquamarine'}} onClick={changeVisibilityConfirm}/></IconButton> : <IconButton><VisibilityOff style={{color: 'aquamarine'}} onClick={changeVisibilityConfirm}/></IconButton>
          }}
          sx = {{
            input: {
              color: 'aquamarine',
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 18,
              marginTop: '4px'
            },
            label: {
              color: "#aaaaaa",
              fontSize: 20,
              fontFamily: 'Libre Baskerville, serif',
            }
          }}
          />
        </div>

        <div id="signup-form-first-page">
          <Link to="/SecondSignUpPage"><button id="button">Next</button></Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp