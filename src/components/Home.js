import React from 'react';
import './Home.css';
import c2clogo from '../images/C2C_2024_Logo.png';

function Home() {
    return (
        <div className="home">
            <div className="image-wrapper">
                <img src={c2clogo} alt="official logo of C2C" height={600} width={600}/>
            </div>
        </div>
    )
}

export default Home;