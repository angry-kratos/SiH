import React from 'react'
import './Profile.css';
// import {useNavigate} from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {

    // let navigate = useNavigate();
  return (
      <div>
      <div id="main-profile-body"style={{border: '1px solid red'}}>
        <div className="div-card">
          <div className='heading-profile'>Institute Name :</div>
          <div className='main-point'>Indian Institute of Technology Goa</div>
        </div>

        <div className="div-card"style={{border: '1px solid red'}}>
          <div className='heading-profile'>Institute Serial Number :</div>
          <div className='main-point'>000000000000000</div>
        </div>

        <div className="div-card"style={{border: '1px solid red'}}>
          <div className='heading-profile'>About Institute :</div>
          
        </div>

        <div className="div-card" style={{border: '1px solid red'}}>
          <div id="div-address-head" className="heading-profile">Address :</div>
          <EditIcon />
        </div>

        <div className="div-card"style={{border: '1px solid red'}}>
          <div className="heading-profile">Contact Number :</div>
          <input type="text" name="Contact Number" id="input-phone-number" />
        </div>
      </div>
      </div>
  )
}

export default Profile