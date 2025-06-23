import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from '/public/assets/user.png';
import {AuthContext} from '/src/AuthProvider/AuthProvider'
const Navbar = () => {
    const links=<>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/'} >About</NavLink>
        <NavLink to={'/'} >Career</NavLink>
    </>
    const {user,Singout}=use(AuthContext);
    // console.log(user.email);
    const handleLogout=()=>{
      // console.log("user is trying to log out ");
      Singout()
      .then(()=>{
          alert("you logged out successfully");
      })
      .catch((e)=>{
        // console.log(e.message);
      })
    }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-accent menu-sm gap-5 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            
            {links}
             
          </ul>
        </div>
        <p>{ user && user.email}</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-accent gap-5 menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end">
        <img src={`${user?user.photoURL:userIcon}`} className="mr-5  w-12 rounded-full " alt="" />
        {
          user ? <button onClick={handleLogout} className="btn btn-primary bg-blue-500" >SingOut</button> : <Link to={'/auth/login'}  className="btn btn-primary">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
