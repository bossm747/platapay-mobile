import { Home, QrCode, CreditCard, User, MapPin, CheckCircle, Layers, Upload, CheckSquare, DollarSign } from "lucide-react";

const pages = [
  { path: "/", name: "Home", icon: Home },
  { path: "/otp-verification", name: "OTP Verification", icon: QrCode },
  { path: "/mpin", name: "MPIN", icon: CreditCard },
  { path: "/user-info-form", name: "User Info Form", icon: User },
  { path: "/home-address-form", name: "Home Address Form", icon: MapPin },
  { path: "/success", name: "Success", icon: CheckCircle },
  { path: "/platapay-style-sheet", name: "Platapay Style Sheet", icon: Layers },
  { path: "/user-profile", name: "User Profile", icon: User },
  { path: "/image-upload", name: "Image Upload", icon: Upload },
  { path: "/account-verification", name: "Account Verification", icon: CheckSquare },
  { path: "/document-scanning", name: "Document Scanning", icon: Upload },
  { path: "/kyc-id-scanner", name: "KYC ID Scanner", icon: Upload },
  { path: "/id-upload", name: "ID Upload", icon: Upload },
  { path: "/id-verification", name: "ID Verification", icon: CheckCircle },
  { path: "/balance", name: "Balance", icon: DollarSign },
];

export default pages;