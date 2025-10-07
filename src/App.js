import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Stats from './components/Stats';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App(){
  return (
    <>
      <Navbar />
      <main style={{marginTop: '70px'}}>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <TechStack />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
