import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Check } from "lucide-react";

const UserProfile = () => {
  const accountOptions = [
    "Profile Limits",
    "My Linked Accounts",
    "My QR Codes",
    "Settings",
    "GScore",
    "Terms and Conditions",
    "Privacy Choices",
    "Alipay+",
    "Voucher Pocket",
    "Promos",
    "Help",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Bar */}
      <div className="bg-blue-900 text-white p-4">
        <div className="flex justify-between items-center">
          <span>4:49</span>
          <div className="flex items-center space-x-2">
            <span>📶</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <Avatar className="bg-white text-blue-900">MA</Avatar>
          <div className="ml-4">
            <div>Marc Roland Agbay</div>
            <div className="text-gray-300">09182156660</div>
            <div className="flex items-center">
              <Check className="text-white" />
              <span className="ml-2">Fully Verified</span>
            </div>
          </div>
        </div>
        <Button className="bg-white text-blue-900 mt-4">View Benefits</Button>
      </div>

      {/* Account Options List */}
      <div className="p-4">
        {accountOptions.map((option, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded">
                <span>📄</span>
              </div>
              <span className="ml-4 text-blue-900">{option}</span>
            </div>
            <span className="text-blue-300">➡️</span>
          </div>
        ))}
        <div className="flex justify-between items-center py-2 mt-4 border-t border-gray-200">
          <span className="text-blue-900">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;