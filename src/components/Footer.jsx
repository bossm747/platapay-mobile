import React from "react";
import { Home, BarChart, QrCode, Settings, User } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <Home className="text-white" />
      <BarChart className="text-white" />
      <QrCode className="text-white" />
      <Settings className="text-white" />
      <User className="text-white" />
    </div>
  );
};

export default Footer;