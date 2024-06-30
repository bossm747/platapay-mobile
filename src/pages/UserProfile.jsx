import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Check, User, Link, QrCode, Settings, Shield, FileText, Lock, HelpCircle, Gift, LogOut } from "lucide-react";

const UserProfile = () => {
  const accountOptions = [
    { title: "Profile Limits", icon: <User className="text-blue-900" /> },
    { title: "My Linked Accounts", icon: <Link className="text-blue-900" /> },
    { title: "My QR Codes", icon: <QrCode className="text-blue-900" /> },
    { title: "Settings", icon: <Settings className="text-blue-900" /> },
    { title: "GScore", icon: <Shield className="text-blue-900" /> },
    { title: "Terms and Conditions", icon: <FileText className="text-blue-900" /> },
    { title: "Privacy Choices", icon: <Lock className="text-blue-900" /> },
    { title: "Alipay+", icon: <Gift className="text-blue-900" /> },
    { title: "Voucher Pocket", icon: <Gift className="text-blue-900" /> },
    { title: "Promos", icon: <Gift className="text-blue-900" /> },
    { title: "Help", icon: <HelpCircle className="text-blue-900" /> },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 min-h-screen">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white p-4">
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
                {option.icon}
              </div>
              <span className="ml-4 text-white">{option.title}</span>
            </div>
            <span className="text-blue-300">➡️</span>
          </div>
        ))}
        <div className="flex justify-between items-center py-2 mt-4 border-t border-gray-200">
          <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 w-full">
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;