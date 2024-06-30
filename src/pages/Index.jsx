import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center bg-black text-white p-2">
        <span className="ml-2">9:41</span>
        <div className="flex items-center space-x-2">
          <span>&#x2190;</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>
      {/* Screen Divider */}
      <div className="w-full h-1 bg-green-500"></div>
      {/* Title */}
      <h1 className="text-black text-center mt-4">(MPIN)</h1>
      {/* Illustration */}
      <div className="mt-4">
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#D1FAE5" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 6H13V12H11V6ZM11 14H13V16H11V14Z"
            fill="#10B981"
          />
        </svg>
      </div>
      {/* Prompt */}
      <p className="text-black text-center mt-4">
        Nominate a 4-digit Mobile Personal Identification Number (MPIN).
      </p>
      {/* Instruction 1 */}
      <Label className="text-gray-500 mt-4">Enter 4 Digit MPIN code</Label>
      {/* Entry Field Set 1 */}
      <div className="flex space-x-2 mt-2">
        <Input className="w-12 h-12 text-center border-2 border-green-500" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-500" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-500" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-500" maxLength={1} />
      </div>
      {/* Instruction 2 */}
      <Label className="text-gray-500 mt-4">Confirm 4 Digit MPIN code</Label>
      {/* Entry Field Set 2 */}
      <div className="flex space-x-2 mt-2">
        <Input className="w-12 h-12 text-center border-2 border-green-500" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-500" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-500" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-500" maxLength={1} />
      </div>
      {/* Verify Button */}
      <Button className="bg-orange-500 text-white rounded-full mt-4 px-8 py-2">Verify</Button>
      {/* Keypad */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((key) => (
          <Button key={key} className="bg-white text-black border border-gray-300">
            {key}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Index;