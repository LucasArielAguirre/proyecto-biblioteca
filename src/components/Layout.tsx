// src/components/Layout.tsx
import React, { FC } from 'react';
import Navbar from './Navbar';
import Bienvenida from './Bienvenida';


interface LayoutProps {
  children: React.ReactNode; // Especifica que el componente acepta children
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Bienvenida />
      {children} {/* Aquí se renderizan los componentes hijos */}
      
    </>
  );
};

export default Layout;
