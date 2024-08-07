import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Mpin from './pages/Mpin';
import OtpVerification from './pages/OtpVerification';
import UserInfoForm from './pages/UserInfoForm';
import HomeAddressForm from './pages/HomeAddressForm';
import Success from './pages/Success';
import PlatapayStyleSheet from './pages/PlatapayStyleSheet';
import UserProfile from './pages/UserProfile';
import ImageUpload from './pages/ImageUpload';
import AccountVerification from './pages/AccountVerification';
import DocumentScanning from './pages/DocumentScanning';
import KycIdScanner from './pages/KycIdScanner';
import IdUpload from './pages/IdUpload';
import IdVerification from './pages/IdVerification';
import Balance from './pages/Balance';
import SupabaseDemo from './pages/SupabaseDemo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/mpin" element={<Mpin />} />
        <Route path="/user-info-form" element={<UserInfoForm />} />
        <Route path="/home-address-form" element={<HomeAddressForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/platapay-style-sheet" element={<PlatapayStyleSheet />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/image-upload" element={<ImageUpload />} />
        <Route path="/account-verification" element={<AccountVerification />} />
        <Route path="/document-scanning" element={<DocumentScanning />} />
        <Route path="/kyc-id-scanner" element={<KycIdScanner />} />
        <Route path="/id-upload" element={<IdUpload />} />
        <Route path="/id-verification" element={<IdVerification />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/supabase-demo" element={<SupabaseDemo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
