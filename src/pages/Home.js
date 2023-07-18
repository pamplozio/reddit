import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/vinyardPic.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer' >
            <h1>I miei non ne sapevano niente</h1>
            
            <Link to={'/wines'}>
                <button>Click here and get it until is fresh :)</button>
            </Link>
        </div>
    </div>
  )
}

export default Home