import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      <Header />
      <h1 className="text-white text-2xl font-bold mt-8">Upload ID</h1>
      <div className="flex flex-col space-y-4 mt-4 w-4/5">
        <Input type="file" accept="image/*" onChange={handleUpload} className="rounded bg-blue-100 text-blue-900" />
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 w-full">Upload</Button>
      </div>
      {idImage && (
        <div className="mt-4 w-4/5">
          <h2 className="text-white text-xl font-bold">ID Preview</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src={idImage} alt="Uploaded ID" className="w-full h-auto" />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default IdUpload;