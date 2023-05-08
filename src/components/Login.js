import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { register, handleSubmit,errors } = useForm();
  const Navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);

        const token1 = "QpwL5tke4Pnpja7X4";
        const token2 = localStorage.getItem("token");
        if (token1 === token2) {
          toast.success("Login Successfully !", {
            position: "top-center",
          });
          Navigate("/dashboard");
        } else {
          toast.error("Error Notification!", {
            position: "top-center",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(" something error!", {
          position: "top-center",
        });
        alert("server err");
      });
    toast.success("Success Notification !", {
      position: "top-center",
    });
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            onChange={handleEmail}
                            placeholder="Email"
                            value={email}
                            className="form-control form-control-lg"
                            name="email"
                            {...register('email')({required:"email is required",pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,message:"this is not a valid email address"}})}
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                        </div>
                        <p> {errors.email?.message}</p>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            value={password}
                            name="password"
                            required
                            placeholder="password"
                            onChange={handlePassword}
                            {...register('password')({required:"password is required",minLength:{value:4,message:"password must be more than 4 character"}})}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>
                        <p> {errors.password?.message}</p>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                           
                            type="button"
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link to="/signup" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default Login;
