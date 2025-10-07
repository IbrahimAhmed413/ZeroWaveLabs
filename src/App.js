import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
