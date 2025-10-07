import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';
function App(){
  return (
    <>
      <Navbar />
      <main style={{marginTop: '70px'}}>
      <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
