import React from "react";
import { Bell, Menu } from "lucide-react";
import { ArrowLeftRight, Smartphone, TrendingUp, Target, Shield, Star, PieChart, ShoppingBag, Send, Bitcoin, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    { title: "Plata PayMe", icon: <ArrowLeftRight className="text-white" /> },
    { title: "Plata PaLoad", icon: <Smartphone className="text-white" /> },
    { title: "Plata PaLoan", icon: <span className="text-white">PHP</span> },
    { title: "Plata Invest", icon: <TrendingUp className="text-white" /> },
    { title: "Plata Goals", icon: <Target className="text-white" /> },
    { title: "Plata Protect", icon: <Shield className="text-white" /> },
    { title: "Plata Rewards", icon: <Star className="text-white" /> },
    { title: "Plata Budget", icon: <PieChart className="text-white" /> },
    { title: "Plata Shop", icon: <ShoppingBag className="text-white" /> },
    { title: "Plata Remit", icon: <Send className="text-white" /> },
    { title: "Plata Crypto", icon: <Bitcoin className="text-white" /> },
    { title: "Plata Support", icon: <HelpCircle className="text-white" /> },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Sticky Header */}
      <div className="w-full flex justify-between items-center bg-purple-900 text-white p-2 fixed top-0 z-10">
        <Menu className="text-white" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">Platapay</span>
          <span className="text-xl font-bold">Home</span>
        </div>
        <Bell className="text-white" />
      </div>
      {/* Screen Divider */}
      <div className="w-full h-1 bg-blue-600 mt-16"></div>
      {/* Body Content */}
      <div className="flex-1 flex flex-col items-center justify-center mt-8">
        <div className="flex flex-col items-center mt-8">
          {/* Title */}
          <h1 className="text-white text-center text-4xl font-bold mt-4">BALANCE</h1>
          {/* Balance Amount */}
          <p className="text-white text-center text-4xl mt-2">₱747,747.00</p>
        </div>
        {/* Wallet Buttons */}
        <div className="flex space-x-4 mt-4">
          <Button className="bg-green-500 text-white shadow-lg shadow-[rgba(0,0,0,0.5)]">Wallet Topup</Button>
          <Button className="bg-purple-900 text-white border border-white border-[0.5px] rounded shadow-lg shadow-[rgba(0,0,0,0.9)]">Wallet Cashout</Button>
        </div>
        {/* Spacer */}
        <div className="h-8"></div>
        {/* Keypad */}
        <div className="grid grid-cols-3 gap-2 mt-4 w-full px-4">
          {services.map((service, index) => (
            <Button key={index} className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 w-full h-16 flex flex-col items-center justify-center">
              {service.icon}
              <span className="text-xs text-white">{service.title}</span>
            </Button>
          ))}
        </div>
      </div>
      {/* Sticky Footer */}
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white p-2 fixed bottom-0 z-10">
        <span className="text-center">Footer Content</span>
      </div>
    </div>
  );
};

export default Index;