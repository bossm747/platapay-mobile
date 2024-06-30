import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const IdUpload = () => {
  const [idImage, setIdImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-b from-blue-900 to-purple-900">
      <h1 className="text-white text-2xl font-bold mt-8">Upload ID</h1>
      {idImage && (
        <div className="mt-4 w-4/5">
          <h2 className="text-white text-xl font-bold">ID Preview</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src={idImage} alt="Uploaded ID" className="w-full h-auto" />
          </div>
        </div>
      )}
      <div className="flex flex-col space-y-4 mt-4 w-4/5">
        <Input type="file" accept="image/*" onChange={handleUpload} className="rounded bg-blue-100 text-blue-900" />
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 w-full">Upload</Button>
      </div>
      <div className="relative mt-8 w-4/5 h-64 border-2 border-dashed border-gray-300">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-300"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-300"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-300"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-300"></div>
      </div>
    </div>
  );
};

export default IdUpload;