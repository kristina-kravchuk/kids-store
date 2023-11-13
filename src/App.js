
import React from "react";
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import './App.css';
import Infants from "./Infants";
import Boys from "./Boys";
import Girls from "./Girls";
import Home from "./Home";


function App() {

  return <Router>
    <nav>
      <Link to="/infants">Infants</Link>
      <Link to="/boys">Boys</Link>
      <Link to="/girls">Girls</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/infants" element={<Infants/>}/>
      <Route path="/boys" element={<Boys/>}/>
      <Route path="/girls"element={<Girls/>}/>
    </Routes>
  </Router>
}

export default App;
