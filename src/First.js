import React from 'react'
import './First.css'
import { Button } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useNavigate } from "react-router-dom";






function First() {
    let navigate = useNavigate();




    return (
        <div className='Welcome'>

            <div>

                <Button className='button1' variant="text" startIcon={<CallIcon />} onClick={() => { navigate("/Contact") }} style={{
                    color: "#21b6ae",
                    padding: "18px 36px",
                    fontSize: "10px",

                    marginRight: '10px',
                    marginLeft: '30px'
                }}  >Contact Us</Button>

                <Button className='button1' variant="text" startIcon={<InfoIcon />} onClick={() => { navigate("/About") }} style={{
                    color: "#21b6ae",
                    padding: "18px 36px",
                    fontSize: "10px",

                    marginRight: '20px',
                    marginLeft: '20px'
                }}  >About Us</Button>
                <Button className='button1' variant="text" startIcon={<HelpOutlineIcon />} style={{
                    color: "#21b6ae",
                    padding: "18px 36px",
                    fontSize: "10px",

                    marginRight: '30px',
                    marginLeft: '20px'
                }}  >Help</Button>






            </div>

            <h1> Welcome To PlaceDB</h1>
            <div className='buttons'>

                <Button className='button1' onClick={() => { navigate("/Login") }} variant="contained" startIcon={<AccountBalanceIcon />} style={{
                    borderRadius: 50,
                    backgroundColor: "#21b6ae",
                    padding: "18px 36px",
                    fontSize: "25px",
                    margin: '100px',
                    marginRight: '30px',
                    marginLeft: '280px'
                }}  >Institute</Button>
                <Button className='button1' variant="contained" startIcon={<DonutSmallIcon />} onClick={() => { navigate("/Statistics") }} style={{
                    borderRadius: 50,
                    backgroundColor: "#21b6ae",
                    padding: "18px 36px",
                    fontSize: "25px",
                    margin: '30px',
                    marginLeft: '100px'

                }}  >Statistics</Button>


                <Button className='button1' variant="contained" startIcon={<DataThresholdingIcon />} style={{
                    borderRadius: 50,
                    backgroundColor: "#21b6ae",
                    padding: "18px 36px",
                    fontSize: "25px",
                    margin: '30px',
                    marginLeft: '100px'

                }}  >Corporate</Button>



            </div>
        </div >
    )
}

export default First