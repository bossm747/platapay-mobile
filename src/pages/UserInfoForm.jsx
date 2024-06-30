import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar, ChevronDown } from "lucide-react";

const UserInfoForm = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-white">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center bg-gray-800 text-white p-2 fixed top-0 z-10">
        <span className="text-white ml-2">9:41</span>
        <div className="flex items-center space-x-2">
          <span className="text-green-500">&#x2190;</span>
          <span className="text-white">🔋</span>
          <span className="text-white">📶</span>
          <span className="text-white">📶</span>
        </div>
      </div>
      {/* Title */}
      <h1 className="text-black font-bold mt-16">Let's get to know you!</h1>
      {/* Form */}
      <div className="flex flex-col space-y-4 mt-8 w-4/5">
        <Label className="text-gray-500">Full Name</Label>
        <Input className="rounded bg-yellow-100 text-gray-500" defaultValue="Juan Dela Cruz" />
        
        <Label className="text-gray-500">Country Code & Phone Number</Label>
        <div className="flex space-x-2">
          <Input className="rounded bg-yellow-100 text-gray-500 w-1/4" defaultValue="+63" />
          <Input className="rounded bg-yellow-100 text-gray-500 w-3/4" defaultValue="9177777777" />
        </div>
        
        <Label className="text-gray-500">Email Address</Label>
        <Input className="rounded bg-yellow-100 text-gray-500" defaultValue="juandelacruz@gmail.com" />
        
        <Label className="text-gray-500">Date of Birth</Label>
        <div className="flex items-center space-x-2">
          <Input className="rounded bg-yellow-100 text-gray-500" defaultValue="07/03/2000" />
          <Calendar className="text-green-500" />
        </div>
        
        <Label className="text-gray-500">Gender</Label>
        <div className="flex items-center space-x-2">
          <Input className="rounded bg-yellow-100 text-gray-500" defaultValue="Male" />
          <ChevronDown className="text-green-500" />
        </div>
        
        <Label className="text-gray-500">Referral Code</Label>
        <Input className="rounded bg-yellow-100 text-gray-500" defaultValue="INS1234" />
        
        <Button className="bg-orange-500 text-white rounded mt-4">Next</Button>
      </div>
    </div>
  );
};

export default UserInfoForm;