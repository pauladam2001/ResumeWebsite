import React, { useEffect } from 'react';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { AiFillYahoo } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { useGlobalContext } from '../../context';
import Fade from 'react-reveal/Fade';

import './contact.styles.css';

const Contact = () => {
    const { alert, showAlert, hideAlert } = useGlobalContext();

    useEffect(() => {
        const timeout = setTimeout(() => {
            hideAlert();
        }, 2000)
        return () => clearTimeout(timeout);
    }, [alert])

    return (
        <div id='contact' className='contact-container'>
            <Fade bottom big cascade>
                <div classNam='icons-section'>
                    <a href='https://github.com/pauladam2001' target='_blank' className='iconn'>
                        <BsGithub style={{ color: "white" }} />
                    </a>
                    <a href='https://www.linkedin.com/in/pauladam2001/' target='_blank' className='iconn'>
                        <BsLinkedin style={{ color: "white" }} />
                    </a>
                    <a href='https://www.facebook.com/paul.adrian.5648' target='_blank' className='iconn'>
                        <BsFacebook style={{ color: "white" }} />
                    </a>
                    <button className='iconn' onClick={() => {
                        showAlert();
                        navigator.clipboard.writeText('paul.adrian2001@yahoo.com');
                    }}>
                        <AiFillYahoo style={{ color: "white" }} />
                    </button>
                    <button className='iconn' onClick={() => {
                        showAlert();
                        navigator.clipboard.writeText('paul.adrian242001@gmail.com')
                    }}>
                        <SiGmail style={{ color: "white" }} />
                    </button>
                    {alert && <p className='alert'>Address copied to clipboard!</p>}
                </div>
            </Fade>
        </div>
    );
}

export default Contact;