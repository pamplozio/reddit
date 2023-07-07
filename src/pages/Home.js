import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/vinyardPic.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer' >
            <h1>Fa come lei, guarda dal balcone ed apri quando arrivano</h1>
            <p>2023</p>
            <Link to={'/wines'}>
                <button>Get it until is fresh :)</button>
            </Link>
        </div>
    </div>
  )
}

export default Home