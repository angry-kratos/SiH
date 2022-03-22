import React from 'react'
import './Login.css'

import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import './GlobalCssSliderDeep.css';
import { useNavigate } from "react-router-dom";






function Login() {
    let navigate = useNavigate();
    return (
        <div className='LoginArea'>

            <h1> LogIn To Your DB</h1>



            <div className="login-body">
                <div className='section email-div'>
                    <div className='icon'><EmailIcon id="email-icon" /></div>
                    <TextField id="standard-basic" label="Email Id" variant="standard" style={{ fontColor: 'white', marginLeft: '15px' }} />
                </div><br />
                <div className='section password-div'>
                    <div className='icon'><LockIcon id="lock-icon" /></div>
                    <TextField id="standard-basic" label="Password" variant="standard" style={{ fontColor: 'white', marginLeft: '15px' }} sx={{ input: { color: '#21b6ae' } }} />
                </div>
                <div>
                    <Button className='button12' variant="contained" startIcon={<LoginIcon />} onClick={() => { navigate("/Profile") }} style={{
                        borderRadius: 50,
                        backgroundColor: "#21b6ae",
                        padding: "18px 36px",
                        fontSize: "15px",
                        margin: '30px',
                        marginLeft: '165px'

                    }}  >Login</Button >
                </div>
            </div>
            <div id="signup-shortcut">already have an account ? <span id='shortcut-link'>Sign Up</span></div>



        </div >
    )
}

export default Login

