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
      <div className="mt-4 w-4/5">
        <div className="border-2 border-dashed border-gray-300 w-full h-64 flex items-center justify-center bg-gray-100">
          {idImage ? (
            <img src={idImage} alt="Uploaded ID" className="max-w-full max-h-full" />
          ) : (
            <span className="text-gray-500">ID Preview</span>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-4 w-4/5">
        <Input type="file" accept="image/*" onChange={handleUpload} className="rounded bg-blue-100 text-blue-900" />
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 w-full dark:shadow-[rgba(0,0,0,0.9)]">Upload</Button>
      
      </div>
    </div>
  );
};

export default IdUpload;