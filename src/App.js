import './App.css';
import React from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import about from './components/about/About';
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
    <Header/>
      <Nav/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
