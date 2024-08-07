import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Bell, Home, CreditCard, QrCode, Inbox, HelpCircle } from 'lucide-react';
import logoUrl from '@/public/images/platapay-logo.png';
import pages from '../pagesConfig';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = pages.find(page => page.path === location.pathname);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Header */}
      <header className="bg-purple-900 text-white p-4 flex justify-between items-center">
        <Menu className="text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        <img src={logoUrl} alt="Platapay Logo" className="h-8 w-auto" />
        <Bell className="text-white" />
      </header>

      {/* Sliding Menu */}
      <motion.div
        className="fixed top-0 left-0 h-full bg-purple-900 text-white shadow-2xl z-30"
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-4 flex flex-col h-full">
          <button onClick={() => setMenuOpen(false)} className="self-end text-white mb-4">
            &times;
          </button>
          {pages.map(page => (
            <Link
              key={page.path}
              to={page.path}
              className={`flex items-center px-2 py-3 hover:bg-purple-700 text-sm ${
                location.pathname === page.path ? 'bg-purple-700' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {React.createElement(page.icon, { className: "text-white w-6 h-6 mr-2" })}
              <span>{page.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 text-white p-4 flex justify-between items-center">
        <Home className="text-white w-6 h-6" />
        <CreditCard className="text-white w-6 h-6" />
        <div className="relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-2xl">
            <QrCode className="text-purple-900 w-10 h-10" />
          </div>
        </div>
        <Inbox className="text-white w-6 h-6" />
        <HelpCircle className="text-white w-6 h-6" />
      </footer>
    </div>
  );
};

export default Layout;
