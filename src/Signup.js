import React, { useState } from 'react';
import './Signup.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [shown, setShown] = useState(false)
    const [shownName, setShownName] = useState(false)
    const [previous, setPrevious] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const changeVisibilityPassword = () => {
        if (passwordVisible == false) {
            setPasswordVisible(true)
        }
        else {
            setPasswordVisible(false)

        }
    }

    const changeVisibilityConfirmPassword = () => {
        if (confirmPasswordVisible == false) {
            setConfirmPasswordVisible(true)
        }
        else {
            setConfirmPasswordVisible(false)

        }
    }

    const nonVisibleConfirm = <FontAwesomeIcon className='visibility-password' value={confirmPasswordVisible} onClick={changeVisibilityConfirmPassword} icon={faEyeSlash} style={{ color: 'aquamarine' }} />
    const visibleConfirm = <FontAwesomeIcon className='visibility-password' value={confirmPasswordVisible} onClick={changeVisibilityConfirmPassword} icon={faEye} style={{ color: 'aquamarine' }} />

    const nonVisible = <FontAwesomeIcon className='visibility-password' value={passwordVisible} onClick={changeVisibilityPassword} icon={faEyeSlash} style={{ color: 'aquamarine' }} />
    const visible = <FontAwesomeIcon className='visibility-password' value={passwordVisible} onClick={changeVisibilityPassword} icon={faEye} style={{ color: 'aquamarine' }} />

    return (
        <div id="signup-body">

            {/* Previous Icon */}
            <Link to='/'><ArrowLeftIcon onMouseEnter={() => setPrevious(true)} onMouseLeave={() => setPrevious(false)} id='previous-icon' /></Link>
            {previous && (<div className='hover-icon'>Previous Page</div>)}

            {/* Heading */}
            <div id="signup-heading">Sign Up Page</div>

            {/* Main Body */}
            <div id="signup-main-body">

                <div className="detail-fields">

                    {/* Institute Name Icon */}
                    <SchoolIcon onMouseEnter={() => setShownName(true)} onMouseLeave={() => setShownName(false)} className='main-icons' />

                    {/* Institute Name Input Field */}
                    <div className="detail-inputs">
                        <input type="text" name='institute-name' className='signup-main' autoComplete='off' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Institute Name...' /><br /><br />
                    </div>
                </div>

                {/* Institute Name Hover Message */}
                {shownName && (<div className='hover-icon'>Name</div>)}


                <div className="detail-fields">

                    {/* Institute Email Icon */}
                    <EmailIcon onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)} className='main-icons' />

                    {/* Institute Email Input Field */}
                    <div className="detail-inputs">
                        <input type="text" name='institute-name' className='signup-main' autoComplete='off' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Institute Email Id...' /><br /><br />
                    </div>
                </div>

                {/* Institute Email Hover Message */}
                {shown && (<div className='hover-icon'>Email</div>)}


                {/* Password And Confirm Password Input Fields */}
                <div id='password-fields'>
                    <div className='div-password' style={{ marginRight: '6%' }}>
                        <input type={passwordVisible ? "text" : "password"} className='signup-password' autoComplete='off' onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder='Password...' />
                        <div className='div-password-fields'>{passwordVisible ? visible : nonVisible}</div>
                    </div>

                    <div className='div-password'>
                        <input type={confirmPasswordVisible ? "text" : "password"} className='signup-password' autoComplete='off' onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} placeholder='Confirm Password...' />
                        <div className='div-password-fields'>{confirmPasswordVisible ? visibleConfirm : nonVisibleConfirm}</div>
                    </div>
                </div><br /><br />

                {/* Submit Button */}
                <div id='submit-button-div'>
                    <Link to="/login/profile"><button id='submit-button'>Sign Up</button></Link>
                </div>

            </div>
        </div>
    );
}

export default SignUp
