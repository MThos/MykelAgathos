import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Setup from './components/Setup';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ReactTooltip />   
    </div>
  );
}

export default App;
