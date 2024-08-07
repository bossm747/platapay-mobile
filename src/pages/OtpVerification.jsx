import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const OtpVerification = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Back Arrow */}
      <div className="w-full flex justify-start p-2 mt-2">
        <span className="text-green-500">&#x2190;</span>
      </div>
      {/* Phone Icon */}
      <div className="mt-4">
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#BFDBFE" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 6H13V12H11V6ZM11 14H13V16H11V14Z"
            fill="#1E40AF"
          />
        </svg>
      </div>
      {/* Message */}
      <p className="text-gray-400 text-center mt-4">
        Please enter the OTP code sent to your number + [Masked Phone Number].
      </p>
      {/* OTP Input Boxes */}
      <div className="flex space-x-2 mt-4">
        <Input className="w-12 h-12 text-center border-2 border-green-300" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-300" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-300" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-300" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-300" maxLength={1} />
        <Input className="w-12 h-12 text-center border-2 border-green-300" maxLength={1} />
      </div>
      {/* OTP Dots */}
      <div className="flex space-x-2 mt-2">
        <span className="text-green-500">•</span>
        <span className="text-green-500">•</span>
        <span className="text-green-500">•</span>
        <span className="text-green-500">•</span>
        <span className="text-green-500">•</span>
        <span className="text-green-500">•</span>
      </div>
      {/* Resend Message */}
      <p className="text-gray-400 text-center mt-4">
        Didn’t receive OTP code? <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 mt-4">Resend new?</Button>
      </p>
    </div>
  );
};

export default OtpVerification;
