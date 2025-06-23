import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({News}) => {
    console.log(News);
    const {image_url,details,title}=News;
    return (
        <div className='mt-5 mr-10 shadow-2xl p-5' >
            <div className='' >
                <img src={image_url} alt="" />
            </div>
            <h2 className='text-2xl font-semibold mt-5' >
                {title}
            </h2>
            <p className='text-accent mt-10' >
                {details}
            </p>
            <Link to={`/category/${News.category_id}`}   className='btn btn-secondary my-5' >All news category</Link>
        </div>
    );
};

export default NewsDetailsCard;