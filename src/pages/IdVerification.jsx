import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Battery, Signal, Wifi, Camera, CreditCard } from "lucide-react";

const IdVerification = () => {
  const [isPoliticallyExposed, setIsPoliticallyExposed] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 text-white p-2 fixed top-0 z-10">
        <div className="flex items-center">
          <ArrowLeft className="text-white" />
          <span className="ml-2">9:41</span>
        </div>
        <div className="flex items-center space-x-2">
          <Signal className="text-white" />
          <Wifi className="text-white" />
          <Battery className="text-white" />
        </div>
      </div>
      {/* Title */}
      <h1 className="text-blue-300 font-bold mt-16">ID Verification</h1>
      {/* Primary Instruction */}
      <p className="text-white mt-4 text-center px-4">
        Take a photo of your valid ID and specimen signature
      </p>
      {/* Subheader */}
      <p className="text-gray-300 mt-2 text-center px-4">
        Kindly provide required means of identification to keep your e-wallet safe.
      </p>
      {/* Buttons */}
      <div className="flex space-x-4 mt-8">
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 flex items-center space-x-2">
          <CreditCard className="text-white" />
          <span>Take ID photo</span>
        </Button>
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 flex items-center space-x-2">
          <Camera className="text-white" />
          <span>Take specimen signature</span>
        </Button>
      </div>
      {/* Bulleted List */}
      <ul className="text-white mt-8 px-4 list-disc">
        <li>Ensure the ID is clear and readable.</li>
        <li>Make sure the signature is visible.</li>
        <li>Use a well-lit area for better quality.</li>
      </ul>
      {/* Checkbox */}
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox checked={isPoliticallyExposed} onCheckedChange={setIsPoliticallyExposed} className="text-gray-700" />
        <span className="text-white">I am considered a Politically Exposed Person</span>
      </div>
      {/* Next Button */}
      <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 mt-8 w-4/5">Next</Button>
    </div>
  );
};

export default IdVerification;