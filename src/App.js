import './App.css';
import React from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Contacts from './components/contacts/Contacts';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
    <Header/>
    <About/>
    <Experience/>
    <Nav/>
    <Portfolio/>
    <Contacts/>
    <Footer/>
    </>
  );
}

export default App;
