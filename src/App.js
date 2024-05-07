import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Work from './pages/Work';
import About from './pages/About';
import FromTheSky from './pages/FromTheSky'
import work_data from './data/work.json'
import ProjectPage from './components/ProjectPage'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/from-the-sky" element={<FromTheSky />} />

          {work_data.map((project, index) => (
            <Route
              key={index}
              path={"/" + project.route}
              element={<ProjectPage project={project} />}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
