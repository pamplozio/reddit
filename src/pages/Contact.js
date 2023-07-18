import React from 'react';
import SelfDrink from '../assets/Contactpage.jpeg';
import '../styles/Contact.css';


function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' 
             style={{ backgroundImage: `url(${SelfDrink})`}}>
                
        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>

            <form id='contactForm' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' 
                       placeholder='Enter full name...' 
                       type='text'>
                </input>
                <label htmlFor='email'>Email</label>
                <input name='email' 
                       placeholder='Enter email...' 
                       type='email'>
                </input>
                <label htmlFor='message'>Message</label>
                <textarea 
                       rows='6' 
                       placeholder='Enter message...' 
                       name='message' 
                       required>
                </textarea>
                <button type='submit'>Send Message</button>
                
            </form>
        </div>
    </div>
  )
}

export default Contact