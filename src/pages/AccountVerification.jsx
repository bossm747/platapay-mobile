import React from "react";
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
      <h1 className="text-gray-700 font-thin mt-4">Verify your account</h1>
      {/* Main Text */}
      <p className="text-gray-700 font-bold mt-4 text-center">
        Enjoy higher account limits by upgrading your account through simple verification.
      </p>
      {/* Checklist Graphic */}
      <div className="mt-4">
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#FFFFFF" stroke="#D1D5DB" />
          <path
            d="M8 10h8M8 14h5"
            stroke="#D1D5DB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12l1 1 3-3"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Instructions Title */}
      <h2 className="text-gray-700 font-thin mt-4">Below are the things to do to verify your account.</h2>
      {/* Steps */}
      <div className="mt-4 text-gray-700">
        <p><strong>Step 1:</strong> Complete your personal information</p>
        <p className="mt-2"><strong>Step 2:</strong> Have your valid ID ready</p>
        <p className="mt-2"><strong>Step 3:</strong> Confirm identity via face verification</p>
      </div>
      {/* Start Button */}
      <Button className="bg-blue-900 text-white rounded-full mt-8">Start</Button>
    </div>
  );
};

export default AccountVerification;