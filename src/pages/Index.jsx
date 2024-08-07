import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import pages from "../pagesConfig";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 p-4 lg:p-8">
      <h1 className="text-white text-4xl font-bold mb-8">Welcome to Platapay</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {pages.map((page) => (
          <Link key={page.path} to={page.path}>
            <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
              {page.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
