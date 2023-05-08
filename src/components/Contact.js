import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-6 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-5 col-lg-4 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <form>
                  <div className="card-body p-5 text-center">
                    <h1 className="mb-5">Contact Form</h1>
                    

                    <div className="form-outline mb-2">
                      <input
                        placeholder="Your Name"
                        type="text"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Your Name
                      </label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        placeholder="Your Email"
                        type="text"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Your Email
                      </label>
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        placeholder=" Your Contact Number"
                        type="number"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Your Contact Number
                      </label>
                    </div>

                    <div className="form-outline mb-2">
                      <textarea
                        placeholder="write something"
                        type="text"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Message
                      </label>
                    </div>

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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
