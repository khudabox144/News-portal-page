import React from 'react';
import logo from '/public/assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
    const formatDate=format(new Date(),'EEEE , MMMM d, yyyy')
    return (
        <div className='mt-5 flex flex-col items-center gap-3' >
            <img className='w-[471px] ' src={logo} alt="" />
            <p className='text-accent' >Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent' >{formatDate}</p>
            
        </div>
    );
};

export default Header;