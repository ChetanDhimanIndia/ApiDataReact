import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Login from "./Login/Login";
import NavbarFun from "./Components/NavBar/Navbar";
function App() {
  return (
    <div>
      <NavbarFun> </NavbarFun>
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
