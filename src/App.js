import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import PrincipalMessage from './components/PrincipalMessage';
import Facilities from './components/Facilities';
import Activities from './components/Activities';
import Rules from './components/Rules';
import Careers from './components/Careers';
import Admissions from './components/Admissions';
import StudyMaterial from './components/StudyMaterial';
import Gallery from './components/Gallery';
import Faculty from './components/Faculty';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/principal' element={<PrincipalMessage />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/admissions' element={<Admissions />} />
        <Route path='/study' element={<StudyMaterial />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/faculty' element={<Faculty />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
