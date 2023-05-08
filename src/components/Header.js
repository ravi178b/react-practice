import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Header = () => {
  let user = localStorage.getItem("token");
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand">Dashboard</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/work"
                  >
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                
                <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                  <Link style={{color:"black"}}to="/profile">Profile</Link>
                  <br></br>
                  <Link style={{color:"black"}} to="/setting">Setting</Link>
                  <br></br>
                 <button onClick={logout}>Logout</button>
                

                  <NavDropdown.Divider />
                </NavDropdown>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
