import React from 'react';
import './Home.css';
import c2clogo from '../images/C2C_2024_Logo.png';
import c2cphoto from '../images/C2C_Photo.png';
import img1 from '../images/intro_image_square.png';
import img2 from '../images/intro_image_2.png';
import img3 from '../images/intro_image_3.png';
import Button from '@mui/material/Button';

function Home() {
    return (
        <div className="home">
            <div className="welcome-text">
                <h2 className='animate-character'>Welcome&nbsp;to</h2>
                <br />
                <h2 className='animate-character'>Combining</h2>
                <br />
                <h2 className='animate-character'>two&nbsp;Cultures.</h2>
                <div className="welcome-paragraph">
                    <p>"Jack of all Trades." As student of interdisciplinary studies, </p>
                    <p>&nbsp;are often seen as a "jack of all trades, but master of none."</p>
                </div>
            </div>
            <div className="image-wrapper">
                <img src={c2clogo} alt="official logo of C2C" height={600} width={600}/>
            </div>
            <div className="buton-wrapper">
                <Button variant="outlined" sx={{
                    color: 'white',
                    ml: '65%',
                    borderColor: 'white',
                }} href="#intro">Learn more</Button>
            </div>
            <div className="image-wrapper-2">
                <img src={c2cphoto} alt="The C2C group" height={400} width={610}/>
            </div>
            <div className="intro-paragraph" id="intro">
                <h2>What&nbsp;is&nbsp;C2C?</h2>
                <p>Combining Two Cultures (C2C) is a student-led conference that celebrates and supports interdisciplinary education among undergraduate students. </p>
                <p>C2C welcomes participants from across Canada and abroad to interact with a community of like-minded individuals also interested in interdisciplinary studies.</p>
                <p>This year, C2C will provide participants with exciting opportunities to network, collaborate, and explore the benefits and practical uses of their interdisciplinary degrees and experiences.</p>
            </div>
            <div className="theme-paragraph">
                <h2>Jack&nbsp;of&nbsp;all</h2>
                <h2 className="adj-h2">Trades</h2>
                <p>This year’s theme for C2C is “Jack of all Trades,” drawing from the full quotation 
                    “a jack of all trades is a master of none, but oftentimes better than a master of one.” 
                    As interdisciplinary students, we may frequently be seen as a “jack of all trades but a master of none.” 
                    This may be viewed as an insult, as it suggests a lack of depth of knowledge in a singular subject or skill. 
                    However, as the rest of the quotation suggests, being a “jack of all trades” is “oftentimes better than a master of one.” 
                    Having skills and knowledge from multiple fields of study and experiences sets up interdisciplinary students to be great problem-solvers, 
                    leaders, and collaborators. At C2C, we will harness the strengths of interdisciplinary studies through our workshops, guest speakers, 
                    and networking events.</p>
            </div>
            <div className="image-wrapper-3">
                <img src={img1} alt="A wheel of knowledge" height={430}/>
            </div>
            <div className="image-wrapper-4">
                <img src={img2} alt="A Jack card" height={300} />
                <img className="img-5" src={img3} alt="A sitting Jack" height={300}/>
            </div>
            <div></div>
        </div>
    )
}

export default Home;