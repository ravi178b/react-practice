import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import About from "./components/About";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Work from "./components/Work"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
function App() {
  return (
    <>
      <div className="App">
     
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/work" element={<Work/>}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/work" element={<Work/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
