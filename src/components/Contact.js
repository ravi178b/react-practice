import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "./Contact.css";
import { Formik } from "formik";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const schema = Yup.object().shape({
  

  name: Yup.string()
    .required("Username is required")
    .typeError("Please enter only letters")
    .matches(/^[A-Za-z]+$/, "Username must contain only letters"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  // countryCode: Yup.string().required('Country code is required'),
  contact: Yup.string()
    .required("contact is a required field")
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Contact number must be between 10 and 14 digits")
    .typeError("Please enter only numbers"),

  message: Yup.string()
    .matches(/^[A-Za-z]+$/, "message must contain only letters")
    .required("Message is a required field"),
});

const handleSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
};

const Contact = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <section className="vh-100">
        <div className="container py-6 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <Formik
              validationSchema={schema}
              initialValues={{ name: "", email: "",countryCode: '', phone: "", message: "" }}
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
                <div className="col-12 col-md-5 col-lg-4 col-xl-5">
                  <div className="card shadow-2-strong">
                    <form noValidate onSubmit={handleSubmit}>
                      <div className="card-body p-5 text-center">
                        <h1 className="mb-1">Contact Form</h1>

                        <div className="form-outline mb-2">
                          <label className="form-label" htmlFor="typeEmailX-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder="Your Name"
                            className="form-control inp_text"
                            id="name"
                            style={{ borderColor: errors.name ? "red" : "" }}
                          />
                        </div>
                        <p
                          className="text-red-400"
                          style={{ color: errors.name ? "red" : "" }}
                        >
                          {errors.name && touched.name && errors.name}
                        </p>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="typePasswordX-2"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Your email"
                            className="form-control inp_text"
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
                          <label
                            className="form-label"
                            htmlFor="typePasswordX-2"
                          >
                            Your Contact Number
                          </label>

                          <PhoneInput
                            name="phone" 
                            id="phone"
                            className="PhoneInput"
                            international
                            defaultCountry="RU"
                            value={value}
                            onChange={setValue}
                            style={{ borderColor: errors.phone ? "red" : "" }}
                          />

                          {/* <input
                            type="text"
                            name="contact"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contact}
                            placeholder="Your contact"
                            className="form-control inp_text"
                            id="contact"
                            style={{ borderColor: errors.contact ? "red" : "" }}
                          /> */}
                        </div>

                        {errors.phone && touched.phone && <div style={{ color: errors.phone ? "red" : "" }}>{errors.phone}</div>}
      {errors.countryCode && touched.countryCode && (
        <div>{errors.countryCode}</div>
      )}
                        {/* <p
                          className="text-red-400"
                          style={{ color: errors.contact ? "red" : "" }}
                        >
                          {errors.contact && touched.contact && errors.contact}
                        </p> */}

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="typePasswordX-2"
                          >
                            Message
                          </label>
                          <textarea
                            type="text"
                            name="message"
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
                            disabled={isSubmitting}
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
