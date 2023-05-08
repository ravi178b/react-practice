import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import React, { useState } from "react";

const SignUp = () => {
  const initialValues = { name: '',email: '', password: '' };
  const validationSchema = Yup.object({
    name :Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleApi = () => {
    axios
      .post("https://reqres.in/api/register", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data, "token");
        toast.success("Signup Successfull", {
          position: "top-center",
        });
        const token = "QpwL5tke4Pnpja7X4";
        localStorage.setItem("token", token);

        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error Notification!", {
          position: "top-center",
        });
        alert("server err");
      });
    // toast.success("Signup Successfull", {
    //   position: "top-center",
    // });
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
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">SignUp</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Create your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="name"
                            id="form2Example17"
                            onChange={handleName}
                            placeholder=" Enter Your Name"
                            value={name}
                            className="form-control form-control-lg"
                            name="Your Name"
                            required
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Your Name
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            onChange={handleEmail}
                            placeholder="Enter Email Address"
                            value={email}
                            className="form-control form-control-lg"
                            name="email"
                            required
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            value={password}
                            placeholder="Enter password"
                            onChange={handlePassword}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            onClick={handleApi}
                            type="button"
                          >
                            SignUp
                          </button>
                        </div>

                        {/* <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a> */}
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

export default SignUp;
