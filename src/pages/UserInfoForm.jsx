import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar, ChevronDown } from "lucide-react";

const UserInfoForm = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white p-2 fixed top-0 z-10">
        <span className="text-white ml-2">9:41</span>
        <div className="flex items-center space-x-2">
          <span className="text-white">&#x2190;</span>
          <span className="text-white">🔋</span>
          <span className="text-white">📶</span>
        </div>
      </div>
      {/* Title */}
      <h1 className="text-white font-bold mt-16">Let's get to know you!</h1>
      {/* Form */}
      <div className="flex flex-col space-y-4 mt-8 w-4/5">
        <Label className="text-blue-300">Full Name</Label>
        <Input className="rounded bg-blue-100 text-blue-900" defaultValue="Juan Dela Cruz" />
        
        <Label className="text-blue-300">Country Code & Phone Number</Label>
        <div className="flex space-x-2">
          <Input className="rounded bg-blue-100 text-blue-900 w-1/4" defaultValue="+63" />
          <Input className="rounded bg-blue-100 text-blue-900 w-3/4" defaultValue="9177777777" />
        </div>
        
        <Label className="text-blue-300">Email Address</Label>
        <Input className="rounded bg-blue-100 text-blue-900" defaultValue="juandelacruz@gmail.com" />
        
        <Label className="text-blue-300">Date of Birth</Label>
        <div className="flex items-center space-x-2">
          <Input className="rounded bg-blue-100 text-blue-900" defaultValue="07/03/2000" />
          <Calendar className="text-blue-300" />
        </div>
        
        <Label className="text-blue-300">Gender</Label>
        <div className="flex items-center space-x-2">
          <Input className="rounded bg-blue-100 text-blue-900" defaultValue="Male" />
          <ChevronDown className="text-blue-300" />
        </div>
        
        <Label className="text-blue-300">Referral Code</Label>
        <Input className="rounded bg-blue-100 text-blue-900" defaultValue="INS1234" />
        
        <Button className="bg-blue-800 text-white rounded mt-4">Next</Button>
      </div>
    </div>
  );
};

export default UserInfoForm;