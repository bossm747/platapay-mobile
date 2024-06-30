import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import OtpVerification from "./pages/OtpVerification.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
