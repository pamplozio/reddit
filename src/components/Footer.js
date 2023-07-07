import React from 'react';
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <InstagramIcon/>
        </div>
        
        <p> &copy; 2023 corowines.com </p>
    </div>
  )
}

export default Footer