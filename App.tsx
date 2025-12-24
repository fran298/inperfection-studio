import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Laser from './pages/Laser';
import Nails from './pages/Nails';
import Facial from './pages/Facial';
import Massage from './pages/Massage';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/depilacao-laser" element={<Laser />} />
        <Route path="/unhas" element={<Nails />} />
        <Route path="/estetica-facial" element={<Facial />} />
        <Route path="/massagens" element={<Massage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contactos" element={<Contact />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;