import React from 'react';
import Picture from '../../assets/image.png';
import Fade from 'react-reveal/Fade';

import './about.styles.css';

const About = () => {
    return (
        <div id='about'>
            <div className='title-container'>
                <Fade bottom>
                    <h1 className='about-title'>About me</h1>
                </Fade>
            </div>
            <div className='about-section'>
                <Fade bottom>
                    <img src={Picture} alt='Logo' className='logo' />
                    <p className='about-paragraph'>
                        &nbsp;&nbsp; I am a second-year Computer Science student at Babes-Bolyai University. <br /><br />

                        &nbsp;&nbsp; With a strong passion for sports and programming, I am energetic, communicative and open to all opportunities that lead to personal and professional growth. <br /><br />

                        &nbsp;&nbsp; As much as I am dedicated and serious when it comes to work and meeting standards, I am a spirit-lifter and love to bring humor inside any group. <br /><br />

                        &nbsp;&nbsp; I can't wait to hop on board in the IT indsutry and bring some ideas to life.
                    </p>
                </Fade>
            </div>
        </div>
    );
}

export default About;