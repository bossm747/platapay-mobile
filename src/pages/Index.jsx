import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import platapayLogo from "@/public/images/platapay-logo.png";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  const features = [
    { title: "Balance", path: "/balance" },
    { title: "OTP Verification", path: "/otp-verification" },
    { title: "MPIN", path: "/mpin" },
    { title: "User Info", path: "/user-info-form" },
    { title: "Home Address", path: "/home-address-form" },
    { title: "Account Verification", path: "/account-verification" },
    { title: "Document Scanning", path: "/document-scanning" },
    { title: "KYC ID Scanner", path: "/kyc-id-scanner" },
    { title: "ID Upload", path: "/id-upload" },
    { title: "ID Verification", path: "/id-verification" },
    { title: "User Profile", path: "/user-profile" },
    { title: "Image Upload", path: "/image-upload" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 p-4 lg:p-8">
      <img src={platapayLogo} alt="Platapay Logo" className="w-32 h-auto mb-8" />
      <h1 className="text-white text-4xl font-bold mb-8">Welcome to Platapay</h1>
      <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <Link key={index} to={feature.path}>
                <Button className="w-full h-24 shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-600 active:shadow-none active:translate-y-1 flex flex-col justify-center items-center">
                  <span>{feature.title}</span>
                  <ArrowRight className="mt-2" size={16} />
                </Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-md mt-8">
        <CardHeader>
          <CardTitle className="text-white text-2xl">AI Assistant</CardTitle>
        </CardHeader>
        <CardContent>
          <AIAssistant />
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
