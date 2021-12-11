import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../assets/404.png';
import { useGlobalContext } from '../../context';

import './errorpage.styles.css';

const ErrorPage = () => {
    const { isSidebarOpen } = useGlobalContext();

    return (
        <div className='error-page'>
            <img src={Picture} alt='Oops. The page does not exist.' className='image' />
            <Link to='/' className={`${isSidebarOpen ? 'hide-button' : 'btn-errorpage btn-hero-errorpage'}`}>
                <button className='btn-grad-errorpage'>
                    Back home
                </button>
            </Link>
        </div>
    );
}

export default ErrorPage;