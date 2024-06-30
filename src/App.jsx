import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import OtpVerification from "./pages/OtpVerification.jsx";
import UserInfoForm from "./pages/UserInfoForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path="/user-info-form" element={<UserInfoForm />} />
      </Routes>
    </Router>
  );
}

export default App;
