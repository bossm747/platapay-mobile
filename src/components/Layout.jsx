import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, Bell, Home, CreditCard, QrCode, Inbox, HelpCircle } from 'lucide-react';
import logoUrl from '@/public/images/platapay-logo.png';
import pages from '../pagesConfig';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Header */}
      <header className="bg-purple-900 text-white p-4 flex justify-between items-center">
        <Menu className="text-white cursor-pointer" />
        <img src={logoUrl} alt="Platapay Logo" className="h-8 w-auto" />
        <Bell className="text-white" />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
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
