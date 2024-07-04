import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Bell, Menu, Home, Inbox, QrCode, HelpCircle, CreditCard, LogIn, Settings, ArrowLeft, ArrowRight } from "lucide-react";
import pages from "../pagesConfig";

const logoUrl = "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px.png?w=500";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPage = pages.find(page => page.path === location.pathname);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Sticky Header */}
      <div className="w-full flex justify-between items-center bg-purple-900 text-white p-2 fixed top-0 z-10">
        <div className="relative">
          <Menu className="text-white cursor-pointer lg:hidden" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <div className="flex flex-col items-center">
          <img src={logoUrl} alt="Platapay Logo" className="h-10 w-auto mb-2" />
          <span className="text-2xl font-bold">Platapay</span>
          <span className="text-xl font-bold">{currentPage ? currentPage.name : "Home"}</span>
        </div>
        <Bell className="text-white" />
      </div>
      {/* Sliding Menu for Mobile */}
      {menuOpen && (
        <div ref={menuRef} className={`fixed top-0 left-0 h-full bg-purple-900 text-white shadow-2xl z-20 lg:hidden ${collapsed ? 'w-16' : 'w-1/2'} transition-width duration-300`}>
          <div className="p-4 flex flex-col justify-between h-full">
            <div className="flex-1 overflow-y-auto">
              <button onClick={() => setCollapsed(!collapsed)} className="text-white w-full text-left mb-4">
                {collapsed ? <ArrowRight className="w-8 h-8" /> : <ArrowLeft className="w-8 h-8" />}
              </button>
              {pages.map(page => (
                <Link key={page.path} to={page.path} className="flex items-center px-2 py-3 hover:bg-purple-700 text-sm" onClick={() => setMenuOpen(false)}>
                  {React.createElement(page.icon, { className: "text-white w-8 h-8" })}
                  {!collapsed && <span className="ml-4">{page.name}</span>}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/login" className="flex items-center px-2 py-3 hover:bg-purple-700 text-sm" onClick={() => setMenuOpen(false)}>
                <LogIn className="text-white w-8 h-8" />
                {!collapsed && <span className="ml-4">Log In/Out</span>}
              </Link>
              <Link to="/settings" className="flex items-center px-2 py-3 hover:bg-purple-700 text-sm" onClick={() => setMenuOpen(false)}>
                <Settings className="text-white w-8 h-8" />
                {!collapsed && <span className="ml-4">Settings</span>}
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Side Menu for Desktop and Tablet */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:bg-purple-900 lg:text-white lg:fixed lg:top-0 lg:left-0 lg:h-full lg:shadow-2xl">
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="flex-1 overflow-y-auto">
            <button onClick={() => setCollapsed(!collapsed)} className="text-white w-full text-left mb-4">
              {collapsed ? <ArrowRight className="w-8 h-8" /> : <ArrowLeft className="w-8 h-8" />}
            </button>
            {pages.map(page => (
              <Link key={page.path} to={page.path} className="flex items-center px-2 py-3 hover:bg-purple-700 text-sm">
                {React.createElement(page.icon, { className: "text-white w-8 h-8" })}
                {!collapsed && <span className="ml-4">{page.name}</span>}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/login" className="flex items-center px-2 py-3 hover:bg-purple-700 text-sm">
              <LogIn className="text-white w-8 h-8" />
              {!collapsed && <span className="ml-4">Log In/Out</span>}
            </Link>
            <Link to="/settings" className="flex items-center px-2 py-3 hover:bg-purple-700 text-sm">
              <Settings className="text-white w-8 h-8" />
              {!collapsed && <span className="ml-4">Settings</span>}
            </Link>
          </div>
        </div>
      </div>
      {/* Body Content */}
      <div className="flex-1 mt-16 mb-16 p-4 lg:ml-64">
        <Outlet />
      </div>
      {/* Sticky Footer */}
      <div className="w-full flex justify-between items-center bg-purple-900 text-white p-4 fixed bottom-0 z-10">
        <Home className="text-white w-8 h-8" />
        <CreditCard className="text-white w-8 h-8" />
        <div className="relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-2xl">
            <QrCode className="text-purple-900 w-12 h-12" />
          </div>
        </div>
        <Inbox className="text-white w-8 h-8" />
        <HelpCircle className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Layout;