import React from "react";
import { Button } from "@/components/ui/button";

const ButtonShowcase = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 p-8">
      <h1 className="text-white text-2xl font-bold mb-8">Button Showcase</h1>
      
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Border</span>
          <Button className="border border-white text-white">Border Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Dark Shadow</span>
          <Button className="shadow-lg shadow-black text-white">Dark Shadow Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Light Shadow</span>
          <Button className="shadow-lg shadow-gray-500 text-white">Light Shadow Button</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;