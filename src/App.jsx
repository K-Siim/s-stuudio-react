import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Company from './pages/company';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Company />}/>
        <Route path="/about" element={<Company />}/>
        <Route path="/contact"  element={<Contact/>}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;