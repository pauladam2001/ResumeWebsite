import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '4px solid white', height: '40vh' }}>
            {props.children}
        </div>
    );
}

export default Scroll;