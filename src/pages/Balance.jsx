import React from "react";
import { Bell, Phone, ArrowRight, Building, FileText, Hand, PiggyBank, UserPlus, Sprout, ShoppingCart, Gift, Leaf, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const Balance = () => {
  const services = [
    { title: "Send", icon: <Phone className="text-blue-900" /> },
    { title: "Load", icon: <ArrowRight className="text-blue-900" /> },
    { title: "Transfer", icon: <Building className="text-blue-900" /> },
    { title: "Bills", icon: <FileText className="text-blue-900" /> },
    { title: "Borrow", icon: <Hand className="text-blue-900" /> },
    { title: "GSave", icon: <PiggyBank className="text-blue-900" /> },
    { title: "GInsure", icon: <UserPlus className="text-blue-900" /> },
    { title: "GInvest", icon: <Sprout className="text-blue-900" /> },
    { title: "GLife", icon: <ShoppingCart className="text-blue-900" /> },
    { title: "A+ Rewards", icon: <Gift className="text-blue-900" /> },
    { title: "GForest", icon: <Leaf className="text-blue-900" /> },
    { title: "Cards", icon: <CreditCard className="text-blue-900" /> },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center bg-blue-900 text-white p-2 fixed top-0 z-10">
        <span className="ml-2">9:41</span>
        <div className="flex items-center space-x-2">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
        <Bell className="text-white" />
      </div>
      {/* Platapay Logo */}
      <div className="flex items-center mt-16">
        <Avatar className="bg-gradient-to-r from-gray-400 to-gray-200 text-blue-900">P</Avatar>
        <div className="ml-4">
          <div className="text-white text-xl">Platapay</div>
          <div className="text-gray-400">E-wallet</div>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="w-full h-0.5 bg-gray-300 mt-4"></div>
      {/* Balance Section */}
      <div className="text-center mt-4">
        <div className="text-white text-lg">Balance</div>
        <div className="text-white text-2xl">P100,000.00</div>
        <div className="flex justify-center space-x-4 mt-4">
          <Button className="bg-green-500 text-white">Top Up</Button>
          <Button className="bg-green-500 text-white">Cash Out</Button>
        </div>
      </div>
      {/* Main Container */}
      <div className="bg-white rounded-lg p-4 mt-8 w-11/12">
        <div className="text-blue-900 text-lg">Services</div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-100 p-2 rounded">{service.icon}</div>
              <span className="text-blue-900 mt-2">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Bar */}
      <div className="w-full flex justify-between items-center bg-blue-900 text-white p-4 fixed bottom-0">
        <Phone className="text-white" />
        <ArrowRight className="text-white" />
        <Building className="text-white" />
        <FileText className="text-white" />
        <Hand className="text-white" />
      </div>
    </div>
  );
};

export default Balance;