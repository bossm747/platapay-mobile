import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Mpin from "./pages/Mpin.jsx";
import OtpVerification from "./pages/OtpVerification.jsx";
import UserInfoForm from "./pages/UserInfoForm.jsx";
import HomeAddressForm from "./pages/HomeAddressForm.jsx";
import Success from "./pages/Success.jsx";
import PlatapayStyleSheet from "./pages/PlatapayStyleSheet.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import ImageUpload from "./pages/ImageUpload.jsx";
import AccountVerification from "./pages/AccountVerification.jsx";
import DocumentScanning from "./pages/DocumentScanning.jsx";
import KycIdScanner from "./pages/KycIdScanner.jsx";
import IdUpload from "./pages/IdUpload.jsx";
import IdVerification from "./pages/IdVerification.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
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
      </Routes>
    </Router>
  );
}

export default App;