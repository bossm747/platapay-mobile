import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PlatapayStyleSheet = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 p-8">
      <Header />
      <h1 className="text-white text-2xl font-bold mb-8">Platapay Theme Showcase</h1>
      
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Border</span>
          <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1">Border Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Dark Shadow</span>
          <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1">Dark Shadow Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Light Shadow</span>
          <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1">Light Shadow Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Button with Gradient Background</span>
          <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1">Gradient Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Solid Blue Button</span>
          <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1">Solid Blue Button</Button>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-white mb-2">Solid Purple Button</span>
          <Button className="shadow-lg shadow-[rgba(0,0,0,0.5)] text-white bg-blue-700 active:shadow-none active:translate-y-1">Solid Purple Button</Button>
        </div>

        <div className="flex flex-col items-center">
          <Label className="text-white mb-2">Input Field</Label>
          <Input className="bg-blue-100 text-blue-900" placeholder="Enter text" />
        </div>

        <div className="flex flex-col items-center">
          <Label className="text-white mb-2">Checkbox</Label>
          <Checkbox className="text-blue-900" />
        </div>

        <div className="flex flex-col items-center">
          <Label className="text-white mb-2">Radio Group</Label>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one" className="text-white">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two" className="text-white">Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col items-center">
          <Label className="text-white mb-2">Select</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option-one">Option One</SelectItem>
              <SelectItem value="option-two">Option Two</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-center">
          <Label className="text-white mb-2">Textarea</Label>
          <Textarea className="bg-blue-100 text-blue-900" placeholder="Enter text" />
        </div>

        <div className="flex flex-col items-center">
          <Label className="text-white mb-2">Switch</Label>
          <Switch />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlatapayStyleSheet;