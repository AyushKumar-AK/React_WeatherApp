import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/AyushKumar-AK/React_WeatherApp">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/AyushKumar-AK/">
          Ayush Kumar
        </a>{" "}
        
        
      </div>
    </React.Fragment>
  );
}

export default App;
