import React from "react";
import { Phone, ArrowRight, Building, FileText, Hand, PiggyBank, UserPlus, Sprout, ShoppingCart, Gift, Leaf, CreditCard, ArrowLeftRight, Mobile, DollarSign, TrendingUp, Target, Shield, Star, PieChart, ShoppingBag, Send, Bitcoin, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const services = [
    { title: "Plata PayMe", icon: <ArrowLeftRight className="text-white" /> },
    { title: "Plata PaLoad", icon: <Mobile className="text-white" /> },
    { title: "Plata PaLoan", icon: <DollarSign className="text-white" /> },
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
      <div className="w-full flex justify-between items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white p-2 fixed top-0 z-10">
        <span className="ml-2">9:41</span>
        <div className="flex items-center space-x-2">
          <span>&#x2190;</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>
      {/* Screen Divider */}
      <div className="w-full h-1 bg-blue-600 mt-8"></div>
      {/* Body Content */}
      <div className="flex-1 flex flex-col items-center justify-center mt-8">
        {/* Title */}
        <h1 className="text-white text-center mt-4">(MPIN)</h1>
        {/* Illustration */}
        <div className="mt-4">
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#BFDBFE" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 6H13V12H11V6ZM11 14H13V16H11V14Z"
              fill="#1E40AF"
            />
          </svg>
        </div>
        {/* Prompt */}
        <p className="text-white text-center mt-4">
          Nominate a 4-digit Mobile Personal Identification Number (MPIN).
        </p>
        {/* Instruction 1 */}
        <Label className="text-white mt-4">Enter 4 Digit MPIN code</Label>
        {/* Entry Field Set 1 */}
        <div className="flex space-x-2 mt-2">
          <Input className="w-12 h-12 text-center border-2 border-white" maxLength={1} />
          <Input className="w-12 h-12 text-center border-2 border-white" maxLength={1} />
          <Input className="w-12 h-12 text-center border-2 border-white" maxLength={1} />
          <Input className="w-12 h-12 text-center border-2 border-white" maxLength={1} />
        </div>
        {/* Instruction 2 */}
        <Label className="text-white mt-4">Confirm 4 Digit MPIN code</Label>
        {/* Entry Field Set 2 */}
        <div className="flex space-x-2 mt-2">
          <Input className="w-12 h-12 text-center border-2 border-white" maxLength={1} />
          <Input className="w-12 h-12 text-center border-2 border-white" maxLength={1} />
          <Input className="w-12 h-12 text-center border-2 border-white" maxLength={1} />
          <Input className="w-12 h-12 text-center border-2 border-white" maxLength={1} />
        </div>
        {/* Verify Button */}
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 mt-4 px-8 py-2">Verify</Button>
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