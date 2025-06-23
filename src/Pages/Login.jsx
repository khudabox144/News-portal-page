import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { setUser, SignIn } = use(AuthContext);
  const {error,setError}=useState('');
  const location=useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    SignIn(email, password)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        navigate(`${location.state?location.state: '/'}`)
      })
      .catch((e) => {
        // console.log(e.message);
        setError(e.code);
      });
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold ">Login Your Account </h3>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              required
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error? <p className="text-red-500" >{error}</p> : ''}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <div className="text-center mt-5">
              <h3>
                Don't An Account?{" "}
                <Link
                  to={"/auth/register"}
                  className="text-pink-500 underline  "
                >
                  Register
                </Link>{" "}
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
