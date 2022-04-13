import React from 'react'
import './Login.css'

import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import './GlobalCssSliderDeep.css';
import { useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IconButton } from '@mui/material';
import { useState } from 'react';

function Login() {
    
    const [passwordVisible, setPasswordVisible] = useState({
        password: "",
        showPassword: false
    })
    
    const changeVisibility = ()=> {
        setPasswordVisible({...passwordVisible, showPassword: !passwordVisible.showPassword});
    }

    const contentVisibility = (event) => {
        setPasswordVisible({...passwordVisible, password: event.target.value});
    }

    let navigate = useNavigate();
    return (
        <div className='LoginArea'>
            <h1 style={{width: 'fit-content'}}>LogIn To Your Account</h1>
            <div className="login-body">
                <div className='section email-div'>
                    <div className='icon'><EmailIcon 
                    id="email-icon"
                    />
                    </div>

                    <TextField 
                    className="standard-basic" 
                    label="Email Id" 
                    variant="standard" 
                    style={{
                        margin: 'auto',
                        marginLeft: '1.5vw',
                        }} 
                    sx={{
                        input: {
                            color: 'aquamarine'
                        },
                        label: {
                            color: '#808080',
                            fontFamily: 'Libre Baskerville, serif',
                            fontSize: 19,
                        }
                        
                        }}/>

                </div><br />
                <div className='section password-div'>
                    <div className='icon'><LockIcon id="lock-icon" /></div>
                    <TextField 
                    value={passwordVisible.password}
                    type={passwordVisible.showPassword ? 'text' : 'password'}
                    className="standard-basic" 
                    onChange={contentVisibility}
                    label="Password" 
                    variant="standard" 
                    spellcheck={false}
                    style={{
                        margin: 'auto', 
                        marginLeft: '1.5vw'
                        }} 
                        sx={{ 
                            input: {
                                color: 'aquamarine'
                            }, 
                            label: {
                                color: '#808080',
                                fontFamily: 'Libre Baskerville, serif',
                                fontSize: 19,
                            }
                            }} />

                    <IconButton id='visibility-of-password' onClick={changeVisibility}>{passwordVisible.showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                </div>
                <div style={{width: 'fit-content', height: 'fit-content', margin: 'auto', marginTop: '4vh'}}>
                    <Button 
                    id="btn-login"
                    variant="contained" 
                    startIcon={<LoginIcon />}  
                    onClick={() => { navigate("/Profile") }}>Login</Button >
                </div>
            </div>
            <div id="signup-shortcut">already have an account ? <span id='shortcut-link' onClick={() => {navigate("/SignUp")}}>Sign Up</span></div>
        </div >
    )
}

export default Login;