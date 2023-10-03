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
                        I am a Ruby on Rails Engineer with nearly two years of hands-on experience in developing robust web applications. I'm a Computer Science graduate from Babes-Bolyai University, currently pursuing a master's degree in Entrepreneurship and Business Administration. <br /> <br />
                        Because I'm passionate about sports and programming, I bring that enthusiasm to work every day. I make sure to stay energized, communicate effectively, and I'm always up for any opportunity that helps me grow, both personally and professionally. <br /> <br />
                        I take my work seriously, but I also enjoy adding humor and positivity to the team. It makes the workplace a friendlier and more enjoyable environment.
                    </p>
                </Fade>
            </div>
        </div>
    );
}

export default About;