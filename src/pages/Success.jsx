import React from "react";
import { Button } from "@/components/ui/button";

const Success = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Check Mark */}
      <div className="flex flex-col items-center">
        <div className="bg-green-600 rounded-full p-4">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#10B981" />
            <path
              d="M9 12l2 2 4-4"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Success Message */}
        <h1 className="text-green-500 font-bold mt-4">Success!</h1>
        <p className="text-gray-400 mt-2">You have successfully created an account</p>
        {/* Instructional Text */}
        <p className="text-gray-400 mt-4">Press continue to Login</p>
        {/* Continue Button */}
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 mt-4 w-full">Continue</Button>
      </div>
    </div>
  );
};

export default Success;
