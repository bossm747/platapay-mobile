import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Wifi, Battery, Signal } from "lucide-react";

const DocumentScanning = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Down List Text */}
      <div className="mt-4 text-white text-center">
        <span>down list</span>
      </div>
      {/* Crop Button */}
      <div className="absolute top-16 right-4">
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1">Crop</Button>
      </div>
      {/* Document View */}
      <div className="flex-1 flex justify-center items-center mt-4">
        <div className="relative bg-black w-4/5 h-3/5">
          <div className="absolute inset-0 border-4 border-white">
            <div className="absolute inset-4 border-2 border-black">
              <img
                src="https://via.placeholder.com/300x150"
                alt="Document"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Capture Button */}
      <div className="absolute bottom-8">
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 rounded-full w-16 h-16 active:shadow-none active:translate-y-1"></Button>
      </div>
    </div>
  );
};

export default DocumentScanning;
