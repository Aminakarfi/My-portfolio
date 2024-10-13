// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
