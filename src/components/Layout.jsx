import React, { useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Bell, Menu, Home, Inbox, QrCode, HelpCircle, CreditCard, LogIn, Settings, ArrowLeft, ArrowRight } from "lucide-react";

const logoUrl = "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px.png?w=500"; // Updated logo URL

const pages = [
  { path: "/", name: "Home", icon: <Home className="text-white w-8 h-8" /> },
  { path: "/otp-verification", name: "OTP Verification", icon: <QrCode className="text-white w-8 h-8" /> },
  { path: "/mpin", name: "MPIN", icon: <CreditCard className="text-white w-8 h-8" /> },
  { path: "/user-info-form", name: "User Info Form", icon: <User className="text-white w-8 h-8" /> },
  { path: "/home-address-form", name: "Home Address Form", icon: <MapPin className="text-white w-8 h-8" /> },
  { path: "/success", name: "Success", icon: <CheckCircle className="text-white w-8 h-8" /> },
  { path: "/platapay-style-sheet", name: "Platapay Style Sheet", icon: <Layers className="text-white w-8 h-8" /> },
  { path: "/user-profile", name: "User Profile", icon: <User className="text-white w-8 h-8" /> },
  { path: "/image-upload", name: "Image Upload", icon: <Upload className="text-white w-8 h-8" /> },
  { path: "/account-verification", name: "Account Verification", icon: <CheckSquare className="text-white w-8 h-8" /> },
  { path: "/document-scanning", name: "Document Scanning", icon: <File className="text-white w-8 h-8" /> },
  { path: "/kyc-id-scanner", name: "KYC ID Scanner", icon: <IdCard className="text-white w-8 h-8" /> },
  { path: "/id-upload", name: "ID Upload", icon: <Upload className="text-white w-8 h-8" /> },
  { path: "/id-verification", name: "ID Verification", icon: <CheckCircle className="text-white w-8 h-8" /> },
  { path: "/balance", name: "Balance", icon: <DollarSign className="text-white w-8 h-8" /> },
];

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPage = pages.find(page => page.path === location.pathname);

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Sticky Header */}
      <div className="w-full flex justify-between items-center bg-purple-900 text-white p-2 fixed top-0 z-10">
        <div className="relative">
          <Menu className="text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <div className="flex flex-col items-center">
          <img src={logoUrl} alt="Platapay Logo" className="h-10 w-auto mb-2" />
          <span className="text-2xl font-bold">Platapay</span>
          <span className="text-xl font-bold">{currentPage ? currentPage.name : "Home"}</span>
        </div>
        <Bell className="text-white" />
      </div>
      {/* Sliding Menu */}
      {menuOpen && (
        <div className={`fixed top-0 left-0 h-full bg-purple-900 text-white shadow-2xl z-20 ${collapsed ? 'w-16' : 'w-1/2'} transition-width duration-300`}>
          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <button onClick={() => setCollapsed(!collapsed)} className="text-white w-full text-left mb-4">
                {collapsed ? <ArrowRight className="w-8 h-8" /> : <ArrowLeft className="w-8 h-8" />}
              </button>
              {pages.map(page => (
                <Link key={page.path} to={page.path} className="flex items-center px-2 py-3 hover:bg-purple-700" onClick={() => setMenuOpen(false)}>
                  {page.icon}
                  {!collapsed && <span className="ml-4">{page.name}</span>}
                </Link>
              ))}
            </div>
            <div>
              <Link to="/login" className="flex items-center px-2 py-3 hover:bg-purple-700" onClick={() => setMenuOpen(false)}>
                <LogIn className="text-white w-8 h-8" />
                {!collapsed && <span className="ml-4">Log In/Out</span>}
              </Link>
              <Link to="/settings" className="flex items-center px-2 py-3 hover:bg-purple-700" onClick={() => setMenuOpen(false)}>
                <Settings className="text-white w-8 h-8" />
                {!collapsed && <span className="ml-4">Settings</span>}
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Body Content */}
      <div className="flex-1 mt-16">
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