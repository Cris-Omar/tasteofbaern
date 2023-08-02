import './styles/style.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from './components/Footer';

import Home from "./pages/Home"
import Contact from "./pages/footer/Contact"
import Jobs from './pages/footer/Jobs';
import LegalNotice from './pages/footer/LegalNotice';
import NoMatch from './pages/NoMatch';

import { useThemeContext } from './components/context/ThemeContext';

function App() {

  //variable for the use of the Theme Context
  const { theme } = useThemeContext ()

  return (
  
  <Router >
    <div className='app'>
      <div className='appWrapper' id={theme}>
        <Navbar />

          <Routes >
            <Route index element={<Home/>} />
            <Route path='' element={<Home/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="jobs" element={<Jobs/>} />
            <Route path="legalnotice" element={<LegalNotice/>} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          
        <Footer />
      </div>
    </div>
  </Router>
  );
}

export default App;
