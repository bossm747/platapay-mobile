import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const AccountVerification = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center bg-gray-800 text-white p-2 fixed top-0 z-10">
        <span className="ml-2">9:41</span>
        <div className="flex items-center space-x-2">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
        <span className="text-center flex-1">data required</span>
      </div>
      {/* Back Button */}
      <div className="w-full flex justify-start p-2 mt-8">
        <span className="text-white">&#x2190;</span>
      </div>
      {/* Screen Title */}
      <h1 className="text-white font-bold mt-4">Verify your account</h1>
      {/* Information Text */}
      <p className="text-gray-300 mt-4 text-center px-4">
        Your personal data will be used to support your experience throughout this application, to manage access to your account, and for other purposes as described in our
      </p>
      {/* Form Container */}
      <div className="bg-white rounded-lg p-4 mt-4 w-11/12">
        {/* Input Fields */}
        <Label className="text-gray-700">Full Name</Label>
        <Input className="bg-gray-200 rounded mt-2" defaultValue="Jude Dela Cruz" />
        
        <Label className="text-gray-700 mt-4">Date of Birth</Label>
        <Input className="bg-gray-200 rounded mt-2" defaultValue="07/03/2000" />
        
        <Label className="text-gray-700 mt-4">Place of Birth</Label>
        <Input className="bg-gray-200 rounded mt-2" defaultValue="123 Maligaya street" />
        
        <Label className="text-gray-700 mt-4">Gender</Label>
        <div className="relative">
          <Input className="bg-gray-200 rounded mt-2" defaultValue="Male" />
          <ChevronDown className="absolute right-2 top-2 text-gray-700" />
        </div>
        
        <Label className="text-gray-700 mt-4">Present Address</Label>
        <Input className="bg-gray-200 rounded mt-2" defaultValue="123 Maligaya street brgy 123, Manila 3008" />
        
        <Label className="text-gray-700 mt-4">Permanent Address</Label>
        <Input className="bg-gray-200 rounded mt-2" defaultValue="123 Maligaya street brgy 123, Manila 3008" />
        
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox checked={checked} onCheckedChange={setChecked} className="text-gray-700" />
          <span className="text-gray-700">Check if same as Present Address</span>
        </div>
        
        {/* Dropdown Menus */}
        <Label className="text-gray-700 mt-4">Nationality</Label>
        <Select>
          <SelectTrigger className="w-full bg-gray-200 rounded mt-2">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option-one">Option One</SelectItem>
            <SelectItem value="option-two">Option Two</SelectItem>
          </SelectContent>
        </Select>
        
        <Label className="text-gray-700 mt-4">Nature of Work</Label>
        <Select>
          <SelectTrigger className="w-full bg-gray-200 rounded mt-2">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option-one">Option One</SelectItem>
            <SelectItem value="option-two">Option Two</SelectItem>
          </SelectContent>
        </Select>
        
        <Label className="text-gray-700 mt-4">Source of Funds</Label>
        <Select>
          <SelectTrigger className="w-full bg-gray-200 rounded mt-2">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option-one">Option One</SelectItem>
            <SelectItem value="option-two">Option Two</SelectItem>
          </SelectContent>
        </Select>
        
        {/* Next Button */}
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg shadow-[rgba(0,0,0,0.5)] active:shadow-none active:translate-y-1 mt-8 w-full">Next</Button>
      </div>
      {/* Home Indicator */}
      <div className="w-16 h-1 bg-white rounded-full mt-4"></div>
    </div>
  );
};

export default AccountVerification;