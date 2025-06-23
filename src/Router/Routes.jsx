import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Components/HomeLayoutComponents/Home';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NewsDetails from '../Pages/NewsDetails';
import PrivateRoute from '../AuthProvider/PrivateRoute';
import LoadingPage from '../Pages/LoadingPage';

const router=createBrowserRouter([{
    path:'/',
    Component:HomeLayout,
    children:[
        {
            path:'/',
            Component:Home
        },
        {
            path:'/category/:id',
            Component:CategoryNews,
            loader:()=> fetch('/demo-data/news.json'),
            hydrateFallbackElement:<LoadingPage></LoadingPage>
        }
    ]
    },
    {
        path:'/auth',
        Component:AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login,
            },
            {
                path:'/auth/register',
                Component:Register,
            }
        ]
    },
    {
        path:'/news-details/:id',
        element:<PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader:()=>fetch('/demo-data/news.json'),
        hydrateFallbackElement:<LoadingPage></LoadingPage>
    },
    {
        path:'/*',
        element:<h2>Error 404</h2>
    }
])


export default router;