import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Dashboard from "./components/Dashboard"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
