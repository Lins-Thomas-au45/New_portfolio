import './App.css';
import React from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import about from './components/about/About';
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
    <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default App;
