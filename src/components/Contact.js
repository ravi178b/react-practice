import React from "react";
import "./Contact.css";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is a required field"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  contact: Yup.string().required("contact is a required field"),

  message: Yup.string().required("Message is a required field"),
});

const handleSubmit = (values) => {

  console.log(handleSubmit);
};

const Contact = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container py-6 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <Formik
              validationSchema={schema}
              initialValues={{ name: "", email: "", contact: "", message: "" }}
              onSubmit={handleSubmit}
            >
              {({
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
                            placeholder="username"
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
                            placeholder="username"
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
                          <input
                            type="number"
                            name="contact"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contact}
                            placeholder="username"
                            className="form-control inp_text"
                            id="contact"
                            style={{ borderColor: errors.contact ? "red" : "" }}
                          />
                        </div>
                        <p
                          className="text-red-400"
                          style={{ color: errors.contact ? "red" : "" }}
                        >
                          {errors.contact && touched.contact && errors.contact}
                        </p>

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
                          <input
                            type="submit"
                            className="btn btn-dark btn-lg btn-block w-100 text-uppercase"
                            value="Submit Now"
                          />
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
