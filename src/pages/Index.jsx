import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Bell, Phone, ArrowRight, Building, FileText, Hand, PiggyBank, UserPlus, Sprout, ShoppingCart, Gift, Leaf, CreditCard } from "lucide-react";
import platapayLogo from "@/public/images/platapay-logo.png";

const Index = () => {
  const services = [
    { title: "Send", icon: <Phone className="text-blue-900" /> },
    { title: "Load", icon: <ArrowRight className="text-blue-900" /> },
    { title: "Transfer", icon: <Building className="text-blue-900" /> },
    { title: "Bills", icon: <FileText className="text-blue-900" /> },
    { title: "Borrow", icon: <Hand className="text-blue-900" /> },
    { title: "GSave", icon: <PiggyBank className="text-blue-900" /> },
    { title: "GInsure", icon: <UserPlus className="text-blue-900" /> },
    { title: "GInvest", icon: <Sprout className="text-blue-900" /> },
    { title: "GLife", icon: <ShoppingCart className="text-blue-900" /> },
    { title: "A+ Rewards", icon: <Gift className="text-blue-900" /> },
    { title: "GForest", icon: <Leaf className="text-blue-900" /> },
    { title: "Cards", icon: <CreditCard className="text-blue-900" /> },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900">
      {/* Header */}
      <header className="bg-purple-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={platapayLogo} alt="Platapay Logo" className="h-8 w-auto mr-2" />
          <span className="text-xl font-bold">Platapay</span>
        </div>
        <Bell className="text-white" />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {/* User Info and Balance */}
        <Card className="bg-white/10 text-white mb-6">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <Avatar className="h-12 w-12 bg-purple-700">
              <span className="text-xl font-bold">JD</span>
            </Avatar>
            <div className="text-right">
              <CardTitle className="text-lg">Juan Dela Cruz</CardTitle>
              <p className="text-sm text-gray-300">+63 917 123 4567</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-1">Available Balance</p>
            <p className="text-3xl font-bold">₱100,000.00</p>
            <div className="flex justify-between mt-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Top Up</Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">Cash Out</Button>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-blue-900">Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              {services.map((service, index) => (
                <Link key={index} to="#" className="flex flex-col items-center">
                  <div className="bg-blue-100 p-2 rounded-full mb-2">{service.icon}</div>
                  <span className="text-blue-900 text-xs text-center">{service.title}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-purple-900 text-white p-4 flex justify-between items-center">
        <Phone className="text-white" />
        <ArrowRight className="text-white" />
        <div className="relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
            <QrCode className="text-purple-900 w-8 h-8" />
          </div>
        </div>
        <FileText className="text-white" />
        <Hand className="text-white" />
      </footer>
    </div>
  );
};

export default Index;
