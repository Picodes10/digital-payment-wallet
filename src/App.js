import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Home />
    </div>
  )
}

export default App