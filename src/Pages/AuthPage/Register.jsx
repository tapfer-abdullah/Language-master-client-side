import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

    const [passwordError, setPasswordError] = useState("");
    const [emptyP, setEmptyP] = useState(true);
    const [emptyCP, setEmptyCP] = useState(true);
    const [emptyE, setEmptyE] = useState(true);
    const [btnDisable, setBtnDisable] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const {Register, UpdateUser} = useContext(AuthContext);
  const { Register, UpdateUser } = { Register: null, UpdateUser: null };

  const onSubmit = (data) => {
    console.log("dd");
    console.log(data);

    if(data.password !== data.confirmPassword){
        setPasswordError("Password and Confirm password does not match!");
        return
    }
    else{
        setPasswordError('');
    }

    // Register(data.email, data.password)
    // .then(result => {
    //   const loggedUser = result.user;

    //   UpdateUser(data.name, data.photoUrl)
    //   .then(()=>{
    //     Swal.fire({
    //       title: `Registration successful! Thanks, ${data.name}`,
    //       showClass: {
    //         popup: 'animate__animated animate__fadeInDown'
    //       },
    //       hideClass: {
    //         popup: 'animate__animated animate__fadeOutUp'
    //       }
    //     })
    //   })
    //   .catch("Unable to update profile!")
    // })
    // .catch(error => {
    //   console.log(error)
    // })
  };

  const handleEmail = event =>{
    if(event.target.value){
        setEmptyE(false);
    }
    else{
        setEmptyE(true);
    }
  }
  const handlePassword = event =>{
    if(event.target.value){
        setEmptyP(false);
    }
    else{
        setEmptyP(true);
    }
  }
  const handleCPassword = event =>{
    if(event.target.value){
        setEmptyCP(false);
    }
    else{
        setEmptyCP(true);
    }
  }

  useEffect(()=>{
    console.log(emptyE == true && emptyP== true && emptyCP== true)
    if(emptyE == true && emptyP== true && emptyCP== true){
        setBtnDisable(!false);
    }else{

        setBtnDisable(!true)
    }
  }, [emptyE, emptyP, emptyCP])

  return (
    <div className="flex justify-center items-center">
      <div className="p-5 md:p-28">
        <div
          className="hero p-5 md:px-20 md:pt-5 md:pb-2 shadow-lg shadow-slate-950/50 "
          //   style={{ backgroundImage: `url(${bgImg})` }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="hero-content flex-col lg:flex-row-reverse"
          >
            <div className="text-center lg:text-left">
              {/* <img src={bgImg2} alt="" /> */}
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600 my-2">Name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photoUrl"
                    {...register("photoUrl", { required: true })}
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered"
                  />
                  {errors.photoUrl && (
                    <span className="text-red-600 my-2">
                      Photo URL is required
                    </span>
                  )}
                </div>

                <div onBlur={handleEmail} className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600 my-2">Email is required</span>
                  )}
                </div>

                <div onBlur={handlePassword} className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 32,
                      pattern:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/i,
                    })}
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type == "required" && (
                    <span className="text-red-600 my-2">
                      Password is required
                    </span>
                  )}
                  {errors.password?.type == "pattern" && (
                    <span className="text-red-600 my-2">
                      Password must contain at least six characters including at
                      least 1 upper case and 1 special character
                    </span>
                  )}
                  {(errors.password?.type == "minLength" ||
                    errors.password?.type == "maxLength") && (
                    <span className="text-red-600 my-2">
                      Password should be between 6 to 32 characters is required
                    </span>
                  )}
                </div>

                <div onBlur={handleCPassword} className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    {...register("confirmPassword", {
                      required: true,
                      minLength: 6,
                      maxLength: 32,
                      pattern:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/i,
                    })}
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {/* {console.log(errors)} */}
                  {errors.confirmPassword?.type == "required" && (
                    <span className="text-red-600 my-2">
                      Password is required
                    </span>
                  )}
                  {errors.confirmPassword?.type == "pattern" && (
                    <span className="text-red-600 my-2">
                      Password must contain at least six characters including at
                      least 1 upper case and 1 special character
                    </span>
                  )}
                  {(errors.confirmPassword?.type == "minLength" ||
                    errors.confirmPassword?.type == "maxLength") && (
                    <span className="text-red-600 my-2">
                      Password should be between 6 to 32 characters is required
                    </span>
                  )}
                  {passwordError && <span className="text-red-600 my-2">{passwordError}</span>}
                </div>

                <div className="form-control mt-6">
                  <input disabled={btnDisable}
                    className="btn bg-[#cd9b50] border-none"
                    type="submit"
                    value="Register"
                  />
                </div>

                <p className="text-my-secondary text-center my-2">
                  Already have an account?
                  <Link to="/login" className="ml-1 hover:link">
                    Log in
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

export default Register;
