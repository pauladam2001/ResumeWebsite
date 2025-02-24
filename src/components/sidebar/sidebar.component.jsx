import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { useGlobalContext } from '../../context';

import Pdf from '../../assets/CV_Adam_Paul_2.pdf';

import './sidebar.styles.css';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <div className={`${isSidebarOpen ? 'sidenav show-sidenav' : 'sidenav'}`}>
            <button className='close-btn' onClick={closeSidebar}>
                <IoMdClose style={{ color: "white" }} />
            </button>
            <Link to='/' className='link'>
                Home
            </Link>
            <Link to='/projects' className='link'>
                Projects & Tutorials
            </Link>
            <a href={Pdf} target='_blank' rel='noreferrer' className='link'>Resume</a>
        </div>
    );
}

export default Sidebar;