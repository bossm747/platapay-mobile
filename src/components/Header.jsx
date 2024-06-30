import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <Menu className="text-white" />
      <div className="flex items-center space-x-2">
        <Avatar className="bg-white text-blue-900">P</Avatar>
        <span className="text-xl font-bold">Platapay</span>
      </div>
      <Bell className="text-white" />
    </div>
  );
};

export default Header;