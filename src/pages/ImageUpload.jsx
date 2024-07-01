import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const images = [
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-2-1.png?w=1024",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/black-luxury-50th-anniversary-card-1.png?w=1024",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/untitled-design-4-1.png?w=500",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/untitled-design-3-1.png?w=500",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/untitled-design-2-1.png?w=500",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/black-luxury-50th-anniversary-card-3-1.png?w=874",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/untitled-design-5-1.png?w=500",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/4cdc4478-5a6c-4804-8091-9d4edadf5cb6-1.jpg?w=1024",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/c64ab9bf-3f96-40e9-90e1-8f384301c09e.jpg?w=1024",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px.png?w=500",
  "https://marcroland84.wordpress.com/wp-content/uploads/2024/06/img_6590-1-1.png?w=1024"
];

const ImageUpload = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      <h1 className="text-white text-2xl font-bold mt-8">Upload Image</h1>
      <div className="flex flex-col space-y-4 mt-4 w-4/5">
        <Label className="text-white">Select Image to Upload</Label>
        <Input type="file" className="rounded bg-blue-100 text-blue-900" />
        <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1 mt-4 w-full">Upload</Button>
      </div>
      <h2 className="text-white text-xl font-bold mt-8">Templates Gallery</h2>
      <div className="grid grid-cols-2 gap-4 mt-4 w-4/5">
        {images.map((src, index) => (
          <Card key={index} className="bg-blue-100">
            <CardHeader>
              <CardTitle>Template {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={src} alt={`Template ${index + 1}`} className="w-full h-auto" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;