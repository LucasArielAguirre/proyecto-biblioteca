// src/components/Layout.tsx
import React, { FC } from 'react';
import Navbar from './Navbar';
import Bienvenida from './Bienvenida';
import { Analytics } from '@vercel/analytics/react';


interface LayoutProps {
  children: React.ReactNode; 
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Bienvenida />
      {children} 
      <Analytics />
    </>
  );
};

export default Layout;
