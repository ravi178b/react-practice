import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Too Long!")
    .matches(/^[A-Za-z]+$/, "Username must contain only letters")
    .required("Username is required"),

  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    axios
      .post("https://reqres.in/api/register", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data, "token");

        const token = "QpwL5tke4Pnpja7X4";
        localStorage.setItem("token", token);
        toast.success("Signup Successfull", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
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

                  <Formik
                    validationSchema={schema}
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                  >
                    {({
                      isSubmitting,
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                          <form noValidate onSubmit={handleSubmit}>
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
                              <label
                                className="form-label"
                                htmlFor="form2Example17"
                              >
                                Your Name
                              </label>
                              <hr />
                              <input
                                type="name"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder="Your Name"
                                className="form-control inp_text"
                                id="name"
                                style={{
                                  borderColor: errors.name ? "red" : "",
                                }}
                              />
                            </div>
                            <p
                              className="error"
                              style={{ color: errors.name ? "red" : "" }}
                            >
                              {errors.name && touched.name && errors.name}
                            </p>
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                htmlFor="form2Example17"
                              >
                                Email address
                              </label>
                              <hr />
                              <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="Enter email id / username"
                                className="form-control inp_text"
                                id="email"
                                style={{
                                  borderColor: errors.email ? "red" : "",
                                }}
                              />
                            </div>
                            <p
                              className="error"
                              style={{ color: errors.email ? "red" : "" }}
                            >
                              {errors.email && touched.email && errors.email}
                            </p>

                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                htmlFor="form2Example27"
                              >
                                Password
                              </label>
                              <hr />
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Enter password"
                                // className="form-control"
                                style={{
                                  borderColor: errors.password ? "red" : "",
                                }}
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <AiOutlineEye />
                                ) : (
                                  <AiOutlineEyeInvisible />
                                )}
                              </button>
                            </div>
                            <p
                              className="error"
                              style={{ color: errors.password ? "red" : "" }}
                            >
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </p>
                            <div className="pt-1 mb-4">
                              <button
                                className="btn btn-dark btn-lg btn-block"
                                disabled={isSubmitting}
                                type="submit"
                              >
                                SignUp
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </Formik>
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
