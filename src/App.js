import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
        <h2 style={{color:'green'}}>COVIT-19 Live Status </h2><br/>
      <Home/>
    </div>
  );
}

export default App;
