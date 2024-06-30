import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Wifi, Battery, Signal } from "lucide-react";

const DocumentScanning = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center bg-gray-200 text-white p-2 fixed top-0 z-10">
        <div className="flex items-center">
          <ChevronLeft className="text-white" />
          <span className="ml-2">9:41</span>
        </div>
        <div className="flex items-center space-x-2">
          <Signal className="text-white" />
          <Wifi className="text-white" />
          <Battery className="text-white" />
        </div>
      </div>
      {/* Down List Text */}
      <div className="mt-12 text-white text-center">
        <span>down list</span>
      </div>
      {/* Crop Button */}
      <div className="absolute top-16 right-4">
        <Button className="bg-gray-500 text-white rounded-lg">Crop</Button>
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
        <Button className="bg-white rounded-full w-16 h-16"></Button>
      </div>
    </div>
  );
};

export default DocumentScanning;