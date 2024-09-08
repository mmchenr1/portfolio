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


// only show navbar on scroll up
window.addEventListener('DOMContentLoaded', function() {
  let prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)
    var navbar = document.getElementById('navbar')
    var progressBarContainer = this.document.getElementById('progress-bar-container')
    if (navbar === null) console.log('can\'t find #navbar element');
    else{
      if(progressBarContainer !== null && currentScrollPos < 40){
        progressBarContainer.style.paddingTop = `0px`;
      }
      else if (Math.abs(currentScrollPos - prevScrollPos) < 90) return;
      else if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove('hidden');
        if(progressBarContainer !== null) {
          progressBarContainer.style.paddingTop = `${navbar.offsetHeight}px`;
        }
      }
      else {
        navbar.classList.add('hidden');
        if(progressBarContainer !== null) {
          progressBarContainer.style.paddingTop = `0px`;
        }
      }      
    }
    prevScrollPos = currentScrollPos;
  });
});

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
