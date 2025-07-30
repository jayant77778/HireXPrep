import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import ExploreDomains from './pages/ExploreDomains';
import MockInterviews from './pages/MockInterviews';
import GetHired from './pages/GetHired';
import TrackProgress from './pages/TrackProgress';
import ForRecruiters from './pages/ForRecruiters';
import PortfolioTracker from './pages/PortfolioTracker';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/domains" element={<ExploreDomains />} />
            <Route path="/mock-interviews" element={<MockInterviews />} />
            <Route path="/get-hired" element={<GetHired />} />
            <Route path="/progress" element={<TrackProgress />} />
            <Route path="/recruiters" element={<ForRecruiters />} />
            <Route path="/portfolio" element={<PortfolioTracker />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;