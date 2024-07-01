import React from "react";
import platapayLogo from "@/public/images/platapay-logo.png";
import { Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-purple-900 text-white p-4 flex justify-between items-center">
      <Menu className="text-white" />
      <div className="flex items-center">
        <img src={platapayLogo} alt="Platapay Logo" className="h-8" />
      </div>
      <Bell className="text-white" />
    </div>
  );
};

export default Header;