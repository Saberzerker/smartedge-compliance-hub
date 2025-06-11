
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="lg:ml-64">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="min-h-[calc(100vh-73px)]">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
