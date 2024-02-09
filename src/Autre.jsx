// Autre.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Autre() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Autre.jsx</code> and save to reload.
        </p>
        <Link to="/" className="App-link">
          hafa
        </Link>
      </header>
    </div>
  );
}

export default Autre;
