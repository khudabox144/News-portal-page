import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
 export const AuthContext=createContext();

const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null);
    const [loading , setLoading]=useState(true);
//    function to create an user
   const createUser=(email,password)=>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);
   };
// Update User
const updateUser=(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData);
}
//    SignOut function
   const Singout=()=>{
    return signOut(auth);
   };

//    SignIn 

const SignIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
};


//    function to hold user onAuth
   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>{
        unsubscribe();
    }
   },[]) 

   const userInfo={
    user,
    setUser,
    createUser,
    Singout,
    SignIn,
    loading,
    setLoading,
    updateUser,
   }
    return <AuthContext value={userInfo} >{children}</AuthContext>;
};

export default AuthProvider;