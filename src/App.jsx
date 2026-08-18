import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import React from 'react';
import Home from './components/Home';

function App() {
  return(
    <React.Fragment> 
    <Header />
    <Home /> 
    <Footer /> 
    </React.Fragment >
  );
}
export default App;
