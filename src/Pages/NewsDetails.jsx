import React, { useEffect, useState } from 'react';
import Header from '../Components/HomeLayoutComponents/Header';
import RightAside from '../Components/HomeLayoutComponents/RightAside';
import NewsDetailsCard from '../Components/HomeLayoutComponents/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const [News,setNews]=useState({});
    const {id}=useParams();
    // console.log(id);
    const data=useLoaderData();
    // console.log(data);
   useEffect(()=>{
    const newsDetails=data.find((singleNews)=>singleNews.id==id);
    setNews(newsDetails);
   },[data,id]);
    
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='mt-10 w-11/12 mx-auto grid grid-cols-12' >
                <div className='col-span-9' >
                    <h3>now the fucking news need to add here </h3>
                     <NewsDetailsCard News={News} ></NewsDetailsCard>
                </div>
                <aside className='col-span-3' >
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;