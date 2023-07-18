import React from 'react';
import JamOnTrunk from '../assets/jamOnTrunk.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'style={{ backgroundImage: `url(${JamOnTrunk})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet. At ducimus voluptas et nostrum corporis in laudantium maiores aut sapiente quos. Vel ducimus neque sed quia nulla et atque corporis eos enim quae ex mollitia galisum eum necessitatibus quos!
            Aut omnis error qui iusto quas aut quod modi 33 corporis maiores! Et perspiciatis necessitatibus aut nihil omnis a labore ratione ea sunt accusantium sit ipsum doloremque? At quia deleniti non porro doloribus sed quis labore vel quas tenetur et consequuntur odio et modi esse?
            Aut aspernatur magnam est enim quaerat aut repudiandae exercitationem. Eos eligendi corrupti eum voluptatem consequuntur quo omnis assumenda ab doloremque quae?</p>
        </div>
    </div>
  )
}

export default About