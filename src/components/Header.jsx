import React from "react";
import template1 from "@/public/images/template1.png";
import { Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-purple-900 text-white p-4 flex justify-between items-center">
      <Menu className="text-white" />
      <div className="flex flex-col items-center">
        {/* Top row: Platapay logo */}
        <img src={template1} alt="Platapay Logo" className="h-8" />
        {/* Bottom row: Page title */}
        <span className="text-xl font-bold">Home</span>
      </div>
      <Bell className="text-white" />
    </div>
  );
};

export default Header;