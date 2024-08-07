import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 p-4 lg:p-8">
      <h1 className="text-white text-4xl font-bold mb-8">Welcome to Platapay</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <Link to="/balance">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            Balance
          </Button>
        </Link>
        <Link to="/otp-verification">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            OTP Verification
          </Button>
        </Link>
        <Link to="/mpin">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            MPIN
          </Button>
        </Link>
        <Link to="/user-info-form">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            User Info Form
          </Button>
        </Link>
        <Link to="/home-address-form">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            Home Address Form
          </Button>
        </Link>
        <Link to="/success">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            Success
          </Button>
        </Link>
        <Link to="/user-profile">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            User Profile
          </Button>
        </Link>
        <Link to="/image-upload">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            Image Upload
          </Button>
        </Link>
        <Link to="/account-verification">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            Account Verification
          </Button>
        </Link>
        <Link to="/document-scanning">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            Document Scanning
          </Button>
        </Link>
        <Link to="/kyc-id-scanner">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            KYC ID Scanner
          </Button>
        </Link>
        <Link to="/id-upload">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            ID Upload
          </Button>
        </Link>
        <Link to="/id-verification">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            ID Verification
          </Button>
        </Link>
        <Link to="/supabase-demo">
          <Button className="w-full shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1">
            Supabase Demo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
