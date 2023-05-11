import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


import "./Contact.css";
import { Formik,Field ,ErrorMessage} from "formik";
import * as Yup from "yup";
const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required("Username is required")
    .typeError('Name must be a string')
    .matches(/^[A-Za-z]+$/, "Username must contain only letters"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
   // countryCode: Yup.string().required("Country code is required"),
  phone: Yup.string()
  .matches(/^\d{10,14}$/, 'Contact number must be between 10 and 14 digits')
  .required("Phone Number is required"),
  message: Yup.string()
  .required("Message is required")
  .matches(/^[A-Za-z]+$/, "message must contain only letters"),
});
const handleSubmit = (values,{ setSubmitting }) => {
 console.log(values);
setSubmitting(false)
};
const Contact = () => {
  
  const[value,setValue]=useState();
  return (
    <div>
      <section className="vh-100">
        <div className="container py-6 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <Formik
              validationSchema={schema}
              initialValues={{
                name: "",
                email: "",
                phone:"",
                message: "",
              }}
              onSubmit={handleSubmit}
            >
              {({
                isSubmitting,
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
                          <label
                            className="form-label"
                            htmlFor="email"
                          >
                            Your Name
                          </label> 
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder="Your name"
                            className="form-control inp_text"
                            id="email"
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
                            htmlFor="email"
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
                          <label className="form-label" htmlFor="phone">
                            Your Contact Number
                          </label>
                          
                          <PhoneInput
                           type="text"
                            name="phone"
                            
                            country="us"
                            value={value}
                            enableAreaCodes={true}
                            onChange={(value) => setFieldValue('phone', value)}
                            style={{ borderColor: errors.phone ? "red" : "" }}
                           
  
                          />
                          
                          {/* <input    
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            placeholder="Your contact"
                            className="form-control inp_text"
                            id="contact"
                            style={{ borderColor: errors.phone ? "red" : "" }}
                          /> */}
                        </div>
                      
                      
                        <p  
                          className="text-red-400"
                          style={{ color: errors.phone ? "red" : "" }}
                        >
                          {errors.phone && touched.phone && errors.phone}
                        </p>
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="Message"
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
d                           isabled={isSubmitting}
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
