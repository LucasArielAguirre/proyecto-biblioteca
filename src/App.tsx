// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Bienvenida from './components/Bienvenida';
import Navbar from './components/Navbar';
import Books from './components/Popular'; 
import BookDetails from './components/BookDetails'; 
import { AnimatePresence, motion } from 'framer-motion';
import Others from './components/Others';
import Footer from './components/Footer';
import AllSearch from './pages/AllSearch';
import Login from './pages/Login';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <MainContent />
      <Analytics />
    </Router>
  );
}

const MainContent: React.FC = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/login';

  return (
    <>
      {!hideNavbar && <Navbar />}
      
      <AnimatePresence mode="wait">
        {location.pathname === '/' && <Bienvenida />}
        
        <Routes>
          <Route path="/" element={
            <motion.div>
              <Books />
            </motion.div>
          } />
          <Route path="/libro/:id" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <BookDetails /> 
            </motion.div>
          } /> 
          <Route path="/allsearch" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <AllSearch />
            </motion.div>
          } />
          <Route path="/login" element={
            <motion.div
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Login />
            </motion.div>
          } />
        </Routes>

        {location.pathname === '/' && <Others />}
        {location.pathname === '/' && <Footer />}
      </AnimatePresence>
    </>
  );
};

export default App;
