import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { SupabaseAuthProvider } from './integrations/supabase/auth';

function App({ ctx }) {
  const appRef = useRef(null);

  useEffect(() => {
    const renderApp = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      if (appRef.current) {
        const appElement = appRef.current;
        ctx.save();
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        appElement.style.transform = `scale(${1 / window.devicePixelRatio})`;
        appElement.style.transformOrigin = 'top left';
        ctx.drawImage(appElement, 0, 0);
        ctx.restore();
      }
      requestAnimationFrame(renderApp);
    };

    renderApp();
  }, [ctx]);

  return (
    <div ref={appRef} style={{ width: '100%', height: '100%' }}>
      <SupabaseAuthProvider>
        <Router>
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
        </Router>
      </SupabaseAuthProvider>
    </div>
  );
}

export default App;
