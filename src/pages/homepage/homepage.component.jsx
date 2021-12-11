import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import Hero from '../../components/hero/hero.component';
import About from '../../components/about/about.component';
import Contact from '../../components/contact/contact.component';
import { RiArrowUpSLine } from 'react-icons/ri';
import { animateScroll } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import './homepage.styles.css';

const HomePage = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    useEffect(() => {
        if (isSidebarOpen) {
            closeSidebar();
        }
    }, [])

    return (
        <div className={`${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <Hero />
            <About />
            <Contact />
            <Fade>
                <RiArrowUpSLine style={{ color: 'white' }} className='icon-up' onClick={() => { animateScroll.scrollToTop() }} />
            </Fade>
        </div>
    );
}

export default HomePage;