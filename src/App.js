import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Models from './pages/Models';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Services from './components/Services';
import Contact from './components/Contact';
import TemplatesPage from './pages/TempelatesPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/models" element={<Models />} />
          <Route path="/tempelates" element={<TemplatesPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
