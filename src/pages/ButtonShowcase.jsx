import React from "react";
import { Button } from "@/components/ui/button";

const ButtonShowcase = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 p-8">
      <h1 className="text-white text-2xl font-bold mb-8">Button Showcase</h1>
      
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Border</span>
          <Button className="border border-white text-white shadow-lg shadow-[rgba(255,255,255,0.5)] active:shadow-none active:translate-y-1">Border Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Dark Shadow</span>
          <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1">Dark Shadow Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Light Shadow</span>
          <Button className="shadow-lg shadow-gray-500 text-white bg-purple-700">Light Shadow Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Gradient Background</span>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">Gradient Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Solid Background</span>
          <Button className="bg-blue-500 text-white">Solid Blue Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Solid Background</span>
          <Button className="bg-purple-500 text-white">Solid Purple Button</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;