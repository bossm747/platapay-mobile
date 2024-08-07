import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";

const IdVerification = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Layout>
      <div className="h-screen w-screen flex flex-col items-center bg-white">
        {/* Light Blue Bar */}
        <div className="w-full bg-blue-300 text-white p-2 text-center mt-2">
          ID Verification
        </div>
        {/* Main Content Area */}
        <div className="bg-white rounded-lg p-4 mt-4 w-11/12 shadow-lg">
          <h1 className="text-gray-800 font-bold text-xl">Identification Card</h1>
          <p className="text-gray-500 mt-2">A valid ID is required for verification</p>
          {/* ID Card Icon */}
          <div className="bg-blue-100 rounded-lg p-4 mt-4 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center justify-center">
                <span className="text-green-500">✔️</span>
                <span className="text-blue-500 ml-2">🛡️</span>
              </div>
            </div>
          </div>
          {/* ID Type */}
          <Label className="text-gray-500 mt-4">ID Type</Label>
          <Select>
            <SelectTrigger className="w-full bg-blue-100 rounded mt-2">
              <SelectValue placeholder="Select ID Type" />
              <ChevronDown className="absolute right-2 top-2 text-gray-500" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gsis">GSIS eID (Government Service Insurance System)</SelectItem>
              <SelectItem value="sss">SSS ID (Social Security System)</SelectItem>
              <SelectItem value="umid">UMID (Unified Multi-Purpose Identification)</SelectItem>
              <SelectItem value="drivers">Driver's License</SelectItem>
              <SelectItem value="voters">Voter's ID</SelectItem>
            </SelectContent>
          </Select>
          {/* ID Number */}
          <Label className="text-gray-500 mt-4">ID Number</Label>
          <Input className="bg-blue-100 rounded mt-2" placeholder="0000 0000 0000 0000" />
          {/* Checkbox */}
          <div className="flex items-center space-x-2 mt-4">
            <Checkbox checked={checked} onCheckedChange={setChecked} className="text-gray-500" />
            <span className="text-gray-500">
              I have read and understood the <span className="text-blue-500">Terms and Conditions</span> and <span className="text-blue-500">Data Privacy Policy</span>
            </span>
          </div>
          {/* Next Button */}
          <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 mt-8 w-full">Next</Button>
        </div>
      </div>
    </Layout>
  );
};

export default IdVerification;
