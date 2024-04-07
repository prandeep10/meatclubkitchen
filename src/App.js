import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Menu from './pages/menu/Menu';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Certifications from './pages/certifications/Certifications';
import More from './pages/more/More';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/certifications" element={<Certifications/>} />
        <Route path="/more" element={<More/>} />
      </Routes>
    </Router>
    
  );
};

export default App;
