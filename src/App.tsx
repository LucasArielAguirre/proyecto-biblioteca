// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Bienvenida from './components/Bienvenida';
import Navbar from './components/Navbar';
import Books from './components/Popular'; // Asegúrate de que este sea tu componente que lista libros
import BookDetails from './components/BookDetails'; 
import { AnimatePresence, motion } from 'framer-motion';
import Others from './components/Others';
import Footer from './components/Footer';
import AllSearch from './pages/AllSearch';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (

        <Router>
            <Navbar/>    
            <MainContent />
            <Analytics />
       </Router>
  
  );
}

const MainContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
    <AnimatePresence mode="wait">
        {location.pathname === '/' && <Bienvenida />}
        
        <Routes>
          <Route path="/" element={
            <motion.div
            >
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
            </motion.div>} /> 
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
        </Routes>
        {location.pathname === '/' && <Others />}
        {location.pathname === '/' && <Footer />}
      </AnimatePresence>
    </>
  );
};
export default App