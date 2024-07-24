import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/Home/Homepage';
import AboutUs from './components/About/AboutUs';
import Academics from './components/Academics/academics';
import Admissions from './components/Admissions/Admissions';
import Faculty from './components/Faculty/faculty';
import Students from './components/Students/Students';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/Contact/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
