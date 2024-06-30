import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccountVerification = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white p-2 fixed top-0 z-10">
        <span className="text-gray-400 ml-2">9:41</span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">📶</span>
          <span className="text-gray-400">📶</span>
          <span className="text-white">🔋</span>
        </div>
      </div>
      {/* Back Arrow */}
      <div className="w-full flex justify-start p-2 mt-8">
        <div className="bg-gray-700 rounded-full p-2">
          <span className="text-white">&#x2190;</span>
        </div>
      </div>
      {/* Title */}
      <h1 className="text-white font-thin mt-4">Verify your account</h1>
      {/* Main Text */}
      <p className="text-white font-bold mt-4 text-center">
        Enjoy higher account limits by upgrading your account through simple verification.
      </p>
      {/* Checklist Graphic */}
      <div className="mt-4">
        <CheckCircle className="text-white" size={100} />
      </div>
      {/* Instructions Title */}
      <h2 className="text-white font-thin mt-4">Below are the things to do to verify your account.</h2>
      {/* Steps */}
      <div className="mt-4 text-white">
        <p><strong>Step 1:</strong> Complete your personal information</p>
        <p className="mt-2"><strong>Step 2:</strong> Have your valid ID ready</p>
        <p className="mt-2"><strong>Step 3:</strong> Confirm identity via face verification</p>
      </div>
      {/* Start Button */}
      <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg mt-8 px-8 py-2 shadow-lg shadow-[rgba(0,0,0,0.5)] active:shadow-none active:translate-y-1">Start</Button>
    </div>
  );
};

export default AccountVerification;