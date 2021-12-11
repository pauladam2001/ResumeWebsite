import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Card = ({ title, image, github }) => {
    return (
        <div className='tc bg-washed-yellow black dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={image} alt='project' width='100' height='100' />
            <div>
                <h2>{title}</h2>
                <a href={github} target='_blank' className='iconn'>
                    <BsGithub />
                </a>
            </div>
        </div>
    );
}

export default Card;