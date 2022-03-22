import React from 'react'

import './Profile.css';

const Profile = () => {
    return (
        <>

            <div id="main-profile-body">
                <div style={{ display: 'flex' }}>
                    <div className='heading-profile'>Institute Name :</div>
                    <div className='main-point'>Indian Institute of Technology Goa</div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div className='heading-profile'>Institute Serial Number :</div>
                    <div className='main-point'>284nfjsi9qn1pdb</div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div className='heading-profile'>About Institute :</div>
                    <textarea name="about-institute" placeholder='Write About Your Institute...' />
                </div>

                <div style={{ display: 'flex' }}>
                    <div className="heading-profile">Address :</div>
                    <textarea name="about-institute" id='address-textarea' placeholder='Address...' />
                </div>
            </div>
        </>
    )
}

export default Profile