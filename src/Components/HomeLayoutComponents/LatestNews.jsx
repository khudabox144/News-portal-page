import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto flex gap-5 items-center bg-base-200 p-5 rounded-xl' >
                <p className='btn btn-secondary' >Latest</p>
                <Marquee className='flex gap-5' pauseOnHover >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus, nihil reprehenderit sed ipsam labore.</p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;