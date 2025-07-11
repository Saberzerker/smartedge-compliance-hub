
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <div className="ml-16 pt-14 transition-all duration-300">
        <main className="min-h-[calc(100vh-3.5rem)]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
