import React from "react";
import { Home, User, QrCode, Inbox, Settings } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-purple-900 text-white p-4 flex justify-between items-center fixed bottom-0 w-full">
      <Home className="text-white" />
      <User className="text-white" />
      <div className="relative">
        <QrCode className="text-white absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-900 rounded-full p-2" size={48} />
      </div>
      <Inbox className="text-white" />
      <Settings className="text-white" />
    </div>
  );
};

export default Footer;