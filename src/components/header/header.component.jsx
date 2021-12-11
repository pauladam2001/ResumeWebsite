import React from 'react';
import { BsReverseLayoutSidebarReverse } from 'react-icons/bs';
import { useGlobalContext } from '../../context';
import Fade from 'react-reveal/Fade';

import './header.styles.css';

const Header = () => {
    const { isSidebarOpen, openSidebar } = useGlobalContext();

    return (
        <div className='header'>
            <div className='sidebar-container'>
                <Fade top>
                    <button className='icon' onClick={openSidebar}>
                        {!isSidebarOpen ? <BsReverseLayoutSidebarReverse style={{ color: "white" }} /> : null}
                    </button>
                </Fade>
            </div>
        </div>
    );
}

export default Header;