import React, { useEffect, useState } from "react";
import Home from "./Home";
import Pizza from "./Pizza";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Help = () => {
  return <h1>Help</h1>;
};

const App = () => {
  return (
    <>
      <nav className="">
        <div className="App-loo">
          <img src="/Assets/Bloomeatslogo.png" alt="Lambda Eats Logo" />
        </div>
        <div className="">
          <Link to="">Home</Link>&nbsp;
          <Link to="help">Help</Link>&nbsp;
          <Link to="pizza">Pizza</Link>
        </div> 
     
      </nav>
      <div className="App-body"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="pizza" element={<Pizza />} />
      </Routes>
       </div>
    
    </>
  );
};
export default App;
