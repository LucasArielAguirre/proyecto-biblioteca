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
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import ProtectedRoute from './components/ProtectedRoute';
import Estados from './pages/Estados';
import { Analytics } from '@vercel/analytics/react';
import AllsearchAd from './pages/AllsearchAd';
import Allsearchuser from './pages/Allsearchuser';
import BookDetailsAdmin from './components/BookDetailsAdmin';
import BookDetailsUser from './components/BookDetailsUser';
import SearchUtiles from './pages/SearchUtiles';
import SearchUtilesAd from './pages/SearchUtilesAd';
import SearchUtilesUser from './pages/SearchUtilesUser';

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

  const hideNavbar = location.pathname === '/login' || 
                     location.pathname.startsWith('/admin') || 
                     location.pathname.startsWith('/user') || 
                     location.pathname === '/estados';

  return (
    <>
      {!hideNavbar && <Navbar />} 
      
      <AnimatePresence mode="wait">
        {location.pathname === '/' && <Bienvenida />}
        
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/libro/:id" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
              <BookDetails /> 
            </motion.div>
          } />
          <Route path="/allsearch" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
              <AllSearch />
            </motion.div>
          } />
              <Route path="/searchutiles" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
              <SearchUtiles />
            </motion.div>
          } />
          <Route path="/login" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
              <Login />
            </motion.div>
          } />
          <Route path="/admin/estados" element={
            <ProtectedRoute role="admin">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
              <Estados />
            </motion.div>
            </ProtectedRoute>

          } />
               <Route path="/admin/allsearchad" element={
              <ProtectedRoute role="admin"> 
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
                  <AllsearchAd />
                </motion.div>
            </ProtectedRoute>

          } />
           <Route path="/admin/searchutilesad" element={
              <ProtectedRoute role="admin"> 
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
                  <SearchUtilesAd />
                </motion.div>
            </ProtectedRoute>

          } />
  
          <Route path="/admin/:id" element={
              <ProtectedRoute role="admin"> 
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
                 <BookDetailsAdmin/>
                </motion.div>
            </ProtectedRoute>

          } />
          <Route path="/admin" element={
            <ProtectedRoute role="admin"> 
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
                <AdminPage />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route path="/user" element={
            <ProtectedRoute role="user">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
                  <UserPage />
                </motion.div>
            </ProtectedRoute>
          } />
          <Route path="/user/allsearchuser" element={
            <ProtectedRoute role="user">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
                <Allsearchuser />
              </motion.div>
            </ProtectedRoute>
          } />
                     <Route path="/user/searchutilesuser" element={
              <ProtectedRoute role="user"> 
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
                  <SearchUtilesUser />
                </motion.div>
            </ProtectedRoute>

          } />
           <Route path="/user/:id" element={
              <ProtectedRoute role="user"> 
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
                  <BookDetailsUser/>
                </motion.div>
            </ProtectedRoute>

          } />
        </Routes>

        {location.pathname === '/' && <Others />}
        {location.pathname === '/' && <Footer />}
      </AnimatePresence>
    </>
  );
};

export default App;
