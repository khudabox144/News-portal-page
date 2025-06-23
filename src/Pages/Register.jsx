import React, { use, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";

const Register = () => {
    // const [errorMsg,setErrorMsg]=useState('');
   const {createUser,setUser,updateUser}=use(AuthContext);
   const [nameError,setNameError]=useState('');
   const navigate=useNavigate();
   const handleRegister = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if(name.length<5){
        setNameError("name should be more than 5 characters")
        return;
    }
    const photo=form.photoURL.value;
    const email = form.email.value;
    const password=form.password.value;
    console.log(name);

    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (passwordRegex.test(password)) {
    //     console.log("Password is valid! Proceeding...");
    //     setErrorMsg("what the fuck are you giving password without letter and digit")
    //     return ; 
    // }

    createUser(email, password)
    .then((result) => {
        const user=result.user;
        // console.log(user);
        //update user
        updateUser({displayName:name , photoUrl:photo}).then(()=>{
            setUser({...user, displayName:name , photoUrl:photo})
            navigate('/');
        })
        .catch((error)=>{
            // console.log(error);
            setUser(user);
        });
    })
    .catch((error) => {
        // Safely handle undefined errors
        const errorMessage = error?.message || "An unknown error occurred";
        // console.error("Registration error:", errorMessage);
        alert(errorMessage);
    });

   }
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold">Register your Account</h3>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister}  className="fieldset">
            <label className="label">Name</label>
            <input name="name" required type="text" className="input" placeholder="Name" />
            <label className="label">PhotoURL</label>
            <input name="photoURL"  type="text" className="input" placeholder="PhotoURL" />
            <label className="label">Email</label>
            <input required name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input required name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <legend className="fieldset-legend">Login options</legend>
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept Terms and Conditions
            </label>
            {nameError?<p className=" text-red-500" >{nameError}</p>:''}
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
          </form>
          {/* {errorMsg && <p className="text-red-500">{errorMsg}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Register;
