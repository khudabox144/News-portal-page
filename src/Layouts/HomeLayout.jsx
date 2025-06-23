import React from 'react';
import Header from '../Components/HomeLayoutComponents/Header';
import LatestNews from '../Components/HomeLayoutComponents/LatestNews';
import Navbar from '../Components/HomeLayoutComponents/Navbar';
import { Outlet, useNavigation } from 'react-router';
import LeftAside from '../Components/HomeLayoutComponents/LeftAside';
import RightAside from '../Components/HomeLayoutComponents/RightAside';
import LoadingPage from '../Pages/LoadingPage';

const HomeLayout = () => {
    const {state}=useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='mt-5' >
                    <LatestNews></LatestNews>
                </section>
                <section  className='mt-2 w-11/12 mx-auto ' >
                    <Navbar></Navbar>
                </section> 
            </header>
            <main className='mt-10 w-11/12 mx-auto grid grid-cols-12 gap-5 ' >
                <aside className='col-span-3  top-5 h-screen  ' >
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6' >
                   {state==="loading" ? <LoadingPage/> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 '>
                   <RightAside></RightAside>
                </aside>
            </main>
            
        </div>
    );
};

export default HomeLayout;