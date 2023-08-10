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
import Events from "./pages/events/Events"
import Newsletter from "./pages/footer/Newsletter"
import Reservation from "./pages/Reservation"
import OpeningHours from "./pages/OpeningHours"
import Team from "./pages/footer/Team"
import Voucher from "./pages/Voucher"
import Location from "./pages/Location"
import { useThemeContext } from './components/context/ThemeContext';
import Offer from './pages/Offer';

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
            <Route path="offer" element={<Offer/>} />
            <Route path="location" element={<Location/>} />
            <Route path="events" element={<Events/>} />
            <Route path="newsletter" element={<Newsletter/>} />
            <Route path="reservation" element={<Reservation/>} />
            <Route path="openinghours" element={<OpeningHours/>} />
            <Route path="team" element={<Team/>} />
            <Route path="voucher" element={<Voucher/>} />
            <Route path="*" element={<NoMatch />} />
          </Routes>

        <Footer />
      </div>
    </div>
  </Router>
  );
}

export default App;
