import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Company from './pages/company';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import Contact from './pages/contact';
import About from './pages/about'
import Resources from './pages/resources';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Resources />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact"  element={<Contact/>}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;