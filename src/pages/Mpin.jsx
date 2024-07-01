import React from "react";
import { Button } from "@/components/ui/button";


const Mpin = () => {
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
        
        {/* Verify Button */}
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 mt-4 w-full max-w-xs mx-auto">Verify</Button>
      </div>
      {/* Sticky Footer */}
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white p-2 fixed bottom-0 z-10">
        <span className="text-center">Footer Content</span>
      </div>
    </div>
  );
};

export default Mpin;