import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

const HomeAddressForm = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white p-2 fixed top-0 z-10">
        <span className="ml-2">9:41</span>
        <div className="flex items-center space-x-2">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gradient-to-r from-green-300 to-green-500 mt-8"></div>
      {/* Back Button */}
      <div className="w-full flex justify-start p-2 mt-2">
        <div className="bg-gray-700 rounded-full p-2">
          <span className="text-white">&#x2190;</span>
        </div>
      </div>
      {/* Form Title */}
      <h1 className="text-white font-bold mt-4">Home Address</h1>
      {/* Form Subheading */}
      <p className="text-gray-300 mt-1">Make sure it's in English</p>
      {/* Form */}
      <div className="flex flex-col space-y-4 mt-4 w-4/5">
        <Label className="text-white">Street</Label>
        <Input className="rounded bg-blue-100 text-blue-900" defaultValue="123 Maligaya Street" />
        
        <Label className="text-white">Province</Label>
        <div className="relative">
          <Input className="rounded bg-blue-100 text-blue-900" />
        <ChevronDown className="absolute right-2 top-2 text-blue-900" />
        </div>
        
        <Label className="text-white">City/Municipality</Label>
        <div className="relative">
          <Input className="rounded bg-blue-100 text-blue-900" />
        <ChevronDown className="absolute right-2 top-2 text-blue-900" />
        </div>
        
        <Label className="text-white">Barangay</Label>
        <div className="relative">
          <Input className="rounded bg-blue-100 text-blue-900" />
        <ChevronDown className="absolute right-2 top-2 text-blue-900" />
        </div>
        
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox checked={checked} onCheckedChange={setChecked} className="text-orange-500" />
          <span className="text-white">
            I have read and understood the <span className="text-orange-500">Terms and Conditions</span> and <span className="text-orange-500">Data Privacy Policy</span>
          </span>
        </div>
        
        <Button className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg shadow-[rgba(0,0,0,0.5)] active:shadow-none active:translate-y-1 mt-4">Next</Button>
      </div>
    </div>
  );
};

export default HomeAddressForm;