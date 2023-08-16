import './styles/style.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import LegalNotice from './pages/LegalNotice';
import NoMatch from './pages/NoMatch';
import Events from './pages/Events';
import Newsletter from './pages/Newsletter';
import Reservation from './pages/Reservation';
import OpeningHours from './pages/OpeningHours';
import Team from './pages/Team';
import Voucher from './pages/Voucher';
import Location from './pages/Location';
import { useThemeContext } from './components/context/ThemeContext';
import Offer from './pages/Offer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { theme } = useThemeContext();

  return (
    <Router> 
      <div className='app'>
        <div className='appWrapper' id={theme}>
          <Navbar />

          <Routes>
            <Route index element={<Home />} />
            <Route path='' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='legalnotice' element={<LegalNotice />} />
            <Route path='offer' element={<Offer />} />
            <Route path='location' element={<Location />} />
            <Route path='events' element={<Events />} />
            <Route path='newsletter' element={<Newsletter />} />
            <Route path='reservation' element={<Reservation />} />
            <Route path='openinghours' element={<OpeningHours />} />
            <Route path='team' element={<Team />} />
            <Route path='voucher' element={<Voucher />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>

          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </Router>
  );
}

export default App;
