import React from 'react';
import Picture from '../../assets/AdamPaul_40.png';
import Fade from 'react-reveal/Fade';
import { Link as ScrollLink } from 'react-scroll';
import { useGlobalContext } from '../../context';

import './hero.styles.css';

const Hero = () => {
    const { isSidebarOpen } = useGlobalContext();

    return (
        <div id='hero'>
            <div className='hero title'>
                <Fade left cascade>
                    <div>
                        <h1 className='hero-title title'>
                            Hello, my name is <span className='title-color'>Adam Paul Adrian</span>.
                        </h1>
                        <h1 className='hero-title title'>
                            I'm a <span className='role-text'>Ruby on Rails Engineer</span>.
                        </h1>
                    </div>
                </Fade>
            </div>
            <div className='btn-container'>
                <p className='hero-cta'>
                    <Fade right>
                        <ScrollLink className='btn btn-hero' to='about' smooth={true} duration={2000}>
                            <button className={`${isSidebarOpen ? 'btn-grad btn-sidebar-open' : 'btn-grad'}`}>
                                Know me
                            </button>
                        </ScrollLink>
                    </Fade>
                </p>
            </div>
        </div>
    );
}

export default Hero;