import React from 'react';
import swimmingImage from '/public/assets/swimming.png';
import playGroundImage from '/public/assets/playground.png';
import classImage from '/public/assets/class.png';

const Qzone = () => {
    return (
        <div>
            <h2 className='font-bold mb-5' > QZone </h2>
            <div className='my-5' >
                <img src={swimmingImage} alt="" />
            </div>
            <div className='my-5'>
                <img src={classImage} alt="" />
            </div>
            <div className='my-5'>
                <img src={playGroundImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;