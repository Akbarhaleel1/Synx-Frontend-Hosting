

import  { useState } from "react";
import {
  Reviews,
  GetReviews,
} from "./sections/index.js";

import Nav from "./components/Nav.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AnalyticsDashboard from "./sections/Analytics.jsx";
import EditReviews from "./sections/EditReviews.jsx";
import GetReviewsEmail from "./sections/getReviewEmail.jsx";
import SynXPlusReviewRequest from "./sections/getReviewWattsapp.jsx";
import Integrations from "./sections/Integrations.jsx";
import Signup from "./sections/auth/Signup.jsx";
import EnhancedLogin from "./sections/auth/Login.jsx";
import ForgotPasswordPage from "./sections/auth/ForgotPassword.jsx";
import OTPVerificationPage from "./sections/auth/Otp.jsx";
import QrCode from './sections/QrCode.jsx'
import HotelReview from './sections/HotelReview.jsx'
import NegativeReview from './sections/negetiveFeedback.jsx'
import NegativeReviewsDisplay from './sections/getNegetiveReviews.jsx'

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  return (
    <main className="relative">
      <Router>
        <Routes>
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/GetReviews" element={<GetReviews />} />
          <Route path="/GetReviews/email" element={<GetReviewsEmail />} />
          <Route
            path="/GetReviews/whatsapp"
            element={<SynXPlusReviewRequest />}
          />
          <Route path="/EditReviews" element={<EditReviews />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<EnhancedLogin />} />
          <Route path="/forgorPassword" element={<ForgotPasswordPage />} />
          <Route path="/OTPVerificationPage" element={<OTPVerificationPage />} />
          <Route path="/QrCode" element={<QrCode />} />
          <Route path="/HotelReview" element={<HotelReview />} />
          <Route path="/review" element={<NegativeReview />} />
          <Route path="/negetiveReview" element={<NegativeReviewsDisplay />} />

        </Routes>
      </Router>

    </main>
  );
};

export default App;

