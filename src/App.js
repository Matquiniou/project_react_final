import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard.js';
import NavBar from './Components/NavBar.js';
import Measure from './Components/Measure.js';
import Sensors from './Components/Sensors.js';
import Users from './Components/Users.js';
import Footer from './Components/Footer.js';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
        <NavBar></NavBar>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/Measure" exact component={Measure}></Route>
        <Route path="/Users" exact component={Users}></Route>
        <Route path="/Sensors" exact component={Sensors}></Route>
        <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
