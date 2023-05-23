import React from "react"
 import "./Header.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import red from "@material-ui/core/colors/red";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
  },
  paper: {
    background: "white",
  },
}));

const Header = () => {
  let user = localStorage.getItem("token");
  const navigate = useNavigate();

  function logout() {
    // localStorage.clear();
    localStorage.removeItem("token");
    navigate("/login");
  }
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <IconButton
              color="white "
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Drawer
              className={classes.drawer}
              variant="temporary"
              anchor="left"
              open={open}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <List>
                <ListItem button>
                  <ListItemText primary="Item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Item 3" />
                </ListItem>
              </List>
            </Drawer>
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
                  <NavLink 
                   
                    activeClassName="active"
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink >
                </li>
                <li className="nav-item">
                  <NavLink 
                    className="nav-link active"
                    // activeClassName="active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </NavLink >
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
                  <Link style={{ color: "black" }} to="/profile">
                    Profile
                  </Link>
                  <br></br>
                  <hr></hr>
                  <Link style={{ color: "black" }} to="/setting">
                    Setting
                  </Link>

                  <br></br>
                  <hr></hr>
                  <button onClick={logout}>Logout</button>

                  <NavDropdown.Divider />
                </NavDropdown>
                <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zuIeV-VHoBsl7__UnNmwHlSw5_EtiYmazjII8iI&s" />

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
