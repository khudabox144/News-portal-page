import React, { use } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Qzone from "./Qzone";
import { Link } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const RightAside = () => {
    const {setUser}=use(AuthContext);
    const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    
    try {
        // Import signInWithPopup from firebase/auth
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        setUser(user); // Update your auth context
        
        console.log("Google Sign-In successful:", user);
    } catch (error) {
        console.error("Google Sign-In error:", error);
    }
};
  return (
    <div>
      <h2  className="text-l font-bold ">Login With</h2>
      <Link to={'/auth/login'} className="btn w-full my-3  bg-white text-black border-[#e5e5e5]">
        <svg
          aria-label="Email icon"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="black"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        Login with Email
      </Link>
      <button onClick={handleSignInWithGoogle} className="btn w-full bg-white text-black border-[#e5e5e5]">
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>

      <h3 className="mt-10 mb-5 text-l font-bold">Find Us On</h3>
      <div className="join join-vertical w-full mb-5 ">
        <button className="btn join-item flex items-center justify-start gap-2">
          <FaFacebook className="w-5 h-5 shrink-0" />
          <span>Facebook</span>
        </button>
        <button className="btn join-item flex items-center justify-start gap-2">
          <FaSquareXTwitter className="w-5 h-5 shrink-0" />
          <span>Twitter</span>
        </button>
        <button className="btn join-item flex items-center justify-start gap-2">
          <FaInstagram className="w-5 h-5 shrink-0" />
          <span>Instagram</span>
        </button>
      </div>
      <div className="bg-base-200 p-2">
        <Qzone></Qzone>
      </div>
    </div>
  );
};

export default RightAside;
