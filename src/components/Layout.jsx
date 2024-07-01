import React, { useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Bell, Menu, Home, ArrowLeftRight, QrCode, Inbox, HelpCircle } from "lucide-react";

const logoUrl = "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px.png?w=500"; // Updated logo URL

const pages = [
  { path: "/", name: "Home" },
  { path: "/otp-verification", name: "OTP Verification" },
  { path: "/mpin", name: "MPIN" },
  { path: "/user-info-form", name: "User Info Form" },
  { path: "/home-address-form", name: "Home Address Form" },
  { path: "/success", name: "Success" },
  { path: "/platapay-style-sheet", name: "Platapay Style Sheet" },
  { path: "/user-profile", name: "User Profile" },
  { path: "/image-upload", name: "Image Upload" },
  { path: "/account-verification", name: "Account Verification" },
  { path: "/document-scanning", name: "Document Scanning" },
  { path: "/kyc-id-scanner", name: "KYC ID Scanner" },
  { path: "/id-upload", name: "ID Upload" },
  { path: "/id-verification", name: "ID Verification" },
  { path: "/balance", name: "Balance" },
];

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = pages.find(page => page.path === location.pathname);

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Sticky Header */}
      <div className="w-full flex justify-between items-center bg-purple-900 text-white p-2 fixed top-0 z-10">
        <div className="relative">
          <Menu className="text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && (
            <div className="absolute top-10 left-0 bg-white text-black p-4 rounded shadow-lg z-20">
              {pages.map(page => (
                <Link key={page.path} to={page.path} className="block px-2 py-1 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                  {page.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center">
          <img src={logoUrl} alt="Platapay Logo" className="h-10 w-auto mb-2" />
          <span className="text-2xl font-bold">Platapay</span>
          <span className="text-xl font-bold">{currentPage ? currentPage.name : "Home"}</span>
        </div>
        <Bell className="text-white" />
      </div>
      {/* Body Content */}
      <div className="flex-1 mt-16">
        <Outlet />
      </div>
      {/* Sticky Footer */}
      <div className="w-full flex justify-between items-center bg-purple-900 text-white p-4 fixed bottom-0 z-10">
        <Home className="text-white w-8 h-8" />
        <ArrowLeftRight className="text-white w-8 h-8" />
        <div className="relative">
          <QrCode className="text-white w-12 h-12 absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-900 rounded-full p-2" />
        </div>
        <Inbox className="text-white w-8 h-8" />
        <HelpCircle className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Layout;