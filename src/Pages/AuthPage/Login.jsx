/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.path || location.state?.pathname || "/";

//   const [disable, setDisable] = useState(true);
  const { user, Login } = useContext(AuthContext);
  const [errorM, setErrorM] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    Login(email, password)
      .then((result) => {
        console.log(result.user);
        setErrorM('');

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });


        navigate(from);
      })
      .catch((err) => {
        setErrorM(err.message)
        console.log(err)
    });
  };


  return (
    <div className="flex justify-center items-center">
      <div className="p-5 md:p-28">
        <div
          className="hero p-5 md:px-10 md:py-5 shadow-lg shadow-slate-950/50 "
          //   style={{ backgroundImage: `url(${bgImg})` }}
        >
          <form
            onSubmit={handleLogin}
            className="hero-content flex-col lg:flex-row"
          >
            <div className="text-center lg:text-left">
              {/* <img src={bgImg2} alt="" /> */}
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                {errorM && <p className="text-my-primary">{errorM}</p>}

                <div className="form-control mt-6">
                  <button
                    // disabled={disable}
                    className="btn bg-[#cd9b50] border-none"
                  >
                    Login
                  </button>
                </div>
                <p className="text-[#D1A054] text-center my-2">
                  Don't have an account?
                  <Link to="/register" className="ml-1 hover:link">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
