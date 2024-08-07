import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import { SupabaseAuthProvider } from './integrations/supabase/auth';

const Mpin = React.lazy(() => import('./pages/Mpin'));
const OtpVerification = React.lazy(() => import('./pages/OtpVerification'));
const UserInfoForm = React.lazy(() => import('./pages/UserInfoForm'));
const HomeAddressForm = React.lazy(() => import('./pages/HomeAddressForm'));
const Success = React.lazy(() => import('./pages/Success'));
const PlatapayStyleSheet = React.lazy(() => import('./pages/PlatapayStyleSheet'));
const UserProfile = React.lazy(() => import('./pages/UserProfile'));
const ImageUpload = React.lazy(() => import('./pages/ImageUpload'));
const AccountVerification = React.lazy(() => import('./pages/AccountVerification'));
const DocumentScanning = React.lazy(() => import('./pages/DocumentScanning'));
const KycIdScanner = React.lazy(() => import('./pages/KycIdScanner'));
const IdUpload = React.lazy(() => import('./pages/IdUpload'));
const IdVerification = React.lazy(() => import('./pages/IdVerification'));
const Balance = React.lazy(() => import('./pages/Balance'));
const SupabaseDemo = React.lazy(() => import('./pages/SupabaseDemo'));

function App() {
  return (
    <SupabaseAuthProvider>
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/otp-verification" element={<OtpVerification />} />
              <Route path="/mpin" element={<Mpin />} />
              <Route path="*" element={<Navigate to="/" replace />} />
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
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </SupabaseAuthProvider>
  );
}

export default App;
