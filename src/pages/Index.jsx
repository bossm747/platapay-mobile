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
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 p-4 lg:p-8">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-white text-center text-4xl lg:text-5xl font-bold">BALANCE</h1>
          <p className="text-white text-center text-4xl lg:text-5xl mt-2">₱747,747.00</p>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <Button className="bg-green-500 text-white shadow-lg shadow-[rgba(0,0,0,0.5)] px-6 py-3">Wallet Topup</Button>
          <Button className="bg-purple-900 text-white border border-white border-[0.5px] rounded shadow-lg shadow-[rgba(0,0,0,0.9)] px-6 py-3">Wallet Cashout</Button>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Button key={index} className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1 w-full h-24 lg:h-32 flex flex-col items-center justify-center transition-all duration-200">
              {service.icon}
              <span className="text-sm lg:text-base text-white mt-2">{service.title}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
