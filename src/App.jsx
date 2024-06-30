import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import OtpVerification from "./pages/OtpVerification.jsx";
import UserInfoForm from "./pages/UserInfoForm.jsx";
import HomeAddressForm from "./pages/HomeAddressForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path="/user-info-form" element={<UserInfoForm />} />
      <Route path="/home-address-form" element={<HomeAddressForm />} />
      </Routes>
    </Router>
  );
}

export default App;
