import React from 'react';
import Picture from '../../assets/image.png';
import Rotate from 'react-reveal/Rotate';

import './about.styles.css';

const About = () => {
    return (
        <div id='about'>
            <div className='title-container'>
                {/* <Flip left>
                    <Swing> */}
                <Rotate top left>
                    <h1 className='about-title'>About me</h1>
                </Rotate>
                {/* </Swing>
                </Flip> */}
            </div>
            <div className='about-section'>
                <Rotate top left>
                    <img src={Picture} alt='Logo' className='logo' />
                </Rotate>
                {/* <Rotate top right> */}
                <p className='about-paragraph'><span>&nbsp;&nbsp;</span>I am a second year Computer Science student at Babes-Bolyai University. <br />
                    <span>&nbsp;&nbsp;</span>My main passions are sports and programming and I
                    consider myself an energetic, communicative and open person who is dedicated to delivering work on time.<br />
                    <span>&nbsp;&nbsp;</span>I can't wait
                    to start working in this domain and to improve my programming skills.
                </p>
                {/* </Rotate> */}
            </div>
        </div>
    );
}

export default About;