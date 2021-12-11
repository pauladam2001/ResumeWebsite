import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { useGlobalContext } from '../../context';

import Pdf from '../../assets/resume.pdf';

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
                Personal Projects
            </Link>
            <a href={Pdf} target='_blank' rel='noreferrer' className='link'>Resume</a>
        </div>
    );
}

export default Sidebar;