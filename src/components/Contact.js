  import React, { useState } from "react";
  import PhoneInput from "react-phone-input-2";
  import "react-phone-input-2/lib/style.css";
  import "./Contact.css";
  import { Formik, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  const schema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters long")
      .max(15, "Username must be no longer than 15 characters")
      .required("Username is required")
      .typeError("username must be a string")
      .matches(/^[A-Za-z]+$/, "Username must contain only letters"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    // countryCode: Yup.string().required("Country code is required"),
    phone: Yup.string()
      .matches(/^\d{10,14}$/, "Contact number must be between 10 and 14 digits")
      .required("Phone Number is required"),
    message: Yup.string()
      .required("Message is required")
      .matches(/^[A-Za-z]+$/, "message must contain only letters"),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  const Contact = () => {
    const handleKeyPress = (e) => {
      if (e.charCode === 32) {
        e.preventDefault();
      }
    };
    const [value, setValue] = useState();
    return (
      <div>
        <section className="vh-100">
          <div className="container py-6 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <Formik
                validationSchema={schema}
                initialValues={{
                  username: "",
                  email: "",
                  phone: "",
                  message: "",
                }}
                onSubmit={handleSubmit}
              >
                {({
                  isSubmitting,
                  onKeyPress,
                  setFieldValue,
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <div className="col-12 col-md-5 col-lg-4 col-xl-5">
                    <div className="card shadow-2-strong">
                      <form noValidate onSubmit={handleSubmit}>
                        <div className="card-body p-5 text-center">
                          <h1 className="mb-1">Contact Form</h1>

                          <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="email">
                              UserName
                            </label>
                            <input
                              type="text"
                              name="username"
                              onChange={handleChange}
                              onBlur={handleBlur}
                  
                              onKeyPress={handleKeyPress}
                              value={values.username}
                              placeholder="username"
                              className="form-control"
                              id="username"
                            
                              style={{ borderColor: errors.username ? "red" : "" }}
                            />
                          </div>

                          <p
                            className="text-red-400"
                            style={{ color: errors.username? "red" : "" }}
                          >
                            {errors.username && touched.username && errors.username}
                          </p>

                          <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              onKeyPress={handleKeyPress}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              placeholder="Your email"
                              className="form-control"
                              id="email"
                              style={{ borderColor: errors.email ? "red" : "" }}
                            />
                          </div>
                          <p
                            className="text-red-400"
                            style={{ color: errors.email ? "red" : "" }}
                          >
                            {errors.email && touched.email && errors.email}
                          </p>
                          <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="phone">
                              Your Contact Number
                            </label>

                            <PhoneInput
                              type="text"
                              name="phone"
                              country="us"
                              value={value}
                              enableAreaCodes={true}
                              onChange={(value) => setFieldValue("phone", value)}
                              style={{border: errors.phone ? " 1px solid red " : "" }}
                            />
                          </div>

                          <p
                            className="text-red-400"
                            style={{ color: errors.phone ? "red" : "" }}
                          >
                            {errors.phone && touched.phone && errors.phone}
                          </p>
                          <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="Message">
                              Message
                            </label>
                            <textarea
                              type="text"
                              name="message"
                              onKeyPress={handleKeyPress} 
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                              placeholder="Write text"
                              className="form-control inp_text"
                              id="message"
                              style={{ borderColor: errors.message ? "red" : "" }}
                            />
                          </div>
                          <p
                            className="text-red-400"
                            style={{ color: errors.message ? "red" : "" }}
                          >
                            {errors.message && touched.message && errors.message}
                          </p>

                          <p className="text-center mb-0">
                            <button
                              d
                              isabled={isSubmitting}
                              className="btn btn-dark btn-lg btn-block w-100 text-uppercase"
                              type="submit"
                            >
                              Submit Now
                            </button>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default Contact;
