
import React from "react";
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import './App.css';
import Boys from "./Boys";
import Girls from "./Girls";
import Home from "./Home";
import { useState  } from "react";
import { dataBoys } from "./dataBoys"
import { dataInfants } from "./dataInfants";
import { dataGirls } from "./dataGirls";
import Infants from "./Infants";

function App() {
  const [infants, setInfants]= useState(dataInfants);

  const [boys, setBoys] =useState(dataBoys);

  const [girls, setGirls]=useState(dataGirls);


  return <Router>
    <nav>
      <Link to="/infants" className="link">Infants</Link>
      <Link to="/boys"  className="link">Boys</Link>
      <Link to="/girls"  className="link">Girls</Link>
    </nav>

    <Routes>
      <Route  path="/"  element={<Home/>}/>
     <Route path="/infants" element={<Infants infantsClothes={infants}/>}/>
      <Route path="/boys" element={<Boys boysClothes={boys} />}/>
      <Route path="/girls"element={<Girls girlsClothes={girls}/>}/>
    </Routes>
  </Router>
}

export default App;
